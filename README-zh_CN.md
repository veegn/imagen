# ✨ Imagen - 现代化 AI 图像流服务

Imagen 是一个基于 **Cloudflare Workers** 开发的高性能、高颜值的 AI 图像生成服务。它结合了 Cloudflare AI、R2 和 D1 服务，为您提供流畅的“信息流”式 AI 视觉交互体验。

![Imagen 预览](https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/42670a6d-609c-418a-4619-6287b3faa100/public)

[English README](README.md)

## 🚀 功能特性

- **现代化的 UI/UX**：采用玻璃拟态（Glassmorphism）设计，拥有平滑的过场动画和响应式布局。
- **动态交互背景**：基于 Canvas 开发的高性能粒子星群背景，随鼠标移动实时产生互动感。
- **AI 图像生成**：由 `@cf/stabilityai/stable-diffusion-xl-base-1.0` 模型驱动，生成高质量的视觉作品。
- **持久化存储**：
  - **Cloudflare R2**：优化后的对象存储，用于保存生成的图片文件。
  - **Cloudflare D1**：SQL 数据库，用于存储提示词（Prompt）元数据及记录。
- **图片大图模式**：点击信息流中的图片可进入全屏灯箱模式查看大图，支持平滑缩放与关闭。
- **Hono 后端**：清晰、现代化的 API 架构，确保请求处理的高效与稳定。

## 🛠️ 技术栈

- **运行时**：[Cloudflare Workers](https://workers.cloudflare.com/)
- **框架**：[Hono](https://hono.dev/)
- **AI 模型**：Stability AI (SDXL)
- **数据库**：[Cloudflare D1](https://developers.cloudflare.com/d1/)
- **对象存储**：[Cloudflare R2](https://developers.cloudflare.com/r2/)
- **前端**：原生 HTML5, CSS3, JavaScript (Canvas API)

## 📦 快速上手

### 前置要求
- 已安装 [Node.js](https://nodejs.org/)。
- 拥有支持 Workers 和 AI 的 Cloudflare 账户。
- 已安装 [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-setup/) CLI。

### 安装与配置步骤

1. **安装依赖**：
   ```bash
   npm install
   ```

2. **创建 D1 数据库**：
   ```bash
   npx wrangler d1 create imagen-db
   ```

3. **初始化数据库表结构**：
   ```bash
   npx wrangler d1 execute imagen-db --remote --file=./schema.sql
   ```

4. **创建 R2 存储桶**：
   ```bash
   npx wrangler r2 bucket create imagen-buckets
   ```

5. **更新配置**：
   从第 2 步中获取 `database_id`，并更新到 `wrangler.json` 文件中。

6. **本地开发**：
   ```bash
   npm run dev
   ```

7. **部署到线上**：
   ```bash
   npm run deploy
   ```

## 📄 开源协议
本项目采用 MIT 协议开源 - 详情请参阅 LICENSE 文件。
