# ✨ Imagen - Modern AI Image Feed

Imagen is a high-performance, aesthetically pleasing image generation service built on **Cloudflare Workers**. It leverages Cloudflare's AI, R2, and D1 services to provide a seamless "information flow" style experience for generating and exploring AI-driven visuals.

![Imagen Preview](https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/42670a6d-609c-418a-4619-6287b3faa100/public)

## 🚀 Features

- **Modern UI/UX**: A sleek, responsive frontend with glassmorphism effects and smooth transitions.
- **Interactive Background**: A high-performance canvas-based particle constellation background that reacts to mouse movement.
- **AI Generation**: Powered by `@cf/stabilityai/stable-diffusion-xl-base-1.0` for high-quality image synthesis.
- **Persistent Storage**:
  - **Cloudflare R2**: Optimized object storage for generated image blobs.
  - **Cloudflare D1**: SQL database for prompt metadata and image tracking.
- **Image Lightbox**: Click any image in the feed to view a high-resolution version in a focused modal.
- **Hono Backend**: A clean, modern API structure for efficient request handling.

## 🛠️ Tech Stack

- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **Framework**: [Hono](https://hono.dev/)
- **AI Model**: Stability AI (SDXL)
- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/)
- **Storage**: [Cloudflare R2](https://developers.cloudflare.com/r2/)
- **Frontend**: Vanilla HTML5, CSS3, and JavaScript (Canvas API)

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- A Cloudflare account with Workers and AI enabled.
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-setup/) CLI installed.

### Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Create D1 Database**:
   ```bash
   npx wrangler d1 create imagen-db
   ```

3. **Initialize Database Schema**:
   ```bash
   npx wrangler d1 execute imagen-db --remote --file=./schema.sql
   ```

4. **Create R2 Bucket**:
   ```bash
   npx wrangler r2 bucket create imagen-buckets
   ```

5. **Update Configuration**:
   Copy the `database_id` from step 2 and update it in `wrangler.json`.

6. **Run Locally**:
   ```bash
   npm run dev
   ```

7. **Deploy**:
   ```bash
   npm run deploy
   ```

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
