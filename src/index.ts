import { Hono } from 'hono';

type Bindings = {
	AI: Ai;
	BUCKET: R2Bucket;
	DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

// Generate and store image
app.post('/api/generate', async (c) => {
	const { prompt } = await c.req.json();
	if (!prompt) return c.json({ error: 'Prompt is required' }, 400);

	const inputs = { prompt };
	const response = await c.env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', inputs);

	// Generate unique key
	const key = `image-${Date.now()}-${Math.random().toString(36).substring(7)}.png`;

	// Store in R2
	await c.env.BUCKET.put(key, response);

	// Store metadata in D1
	await c.env.DB.prepare(
		'INSERT INTO images (prompt, r2_key) VALUES (?, ?)'
	).bind(prompt, key).run();

	return c.json({ success: true, key });
});

// Fetch list of images
app.get('/api/images', async (c) => {
	const { results } = await c.env.DB.prepare(
		'SELECT * FROM images ORDER BY created_at DESC'
	).all();
	return c.json(results);
});

// Stream image from R2
app.get('/api/image/:key', async (c) => {
	const key = c.req.param('key');
	const object = await c.env.BUCKET.get(key);
	if (!object) return c.json({ error: 'Not found' }, 404);

	const headers = new Headers();
	object.writeHttpMetadata(headers);
	headers.set('etag', object.httpEtag);

	return new Response(object.body, { headers });
});

export default app;
