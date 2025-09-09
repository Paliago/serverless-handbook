# Serverless Handbook

A modern, searchable website for Jimmy Dahlqvist's AWS Serverless Handbook. Built with VitePress for fast performance and excellent developer experience.

![Serverless Handbook Cover](docs/public/images/serverless-handbook-cover-image.png)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173/` to view the site locally.

## 📁 Project Structure

```
serverless-handbook/
├── docs/                    # VitePress site
│   ├── .vitepress/         # Configuration & theming
│   ├── solutions/          # 8 production-ready solutions
│   ├── tutorials/          # 4 step-by-step guides  
│   ├── workshops/          # 1 hands-on workshop
│   └── patterns/           # 2 architecture patterns
├── .github/workflows/      # Deployment automation
└── package.json
```

## 🛠️ Development

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 📚 Content

### 🏗️ Solutions (8 items)
Production-ready serverless solutions with CloudFormation templates:
- Authentication systems (CloudFront Edge, PEP/PDP)
- Monitoring solutions (CloudFront Statistics) 
- SaaS platforms (Connected BBQ)
- Utility services (Image Moderation, URL Redirect, etc.)

### 📖 Tutorials (4 items)
Step-by-step technical guides:
- Container deployment on ECS Fargate
- Graviton optimization for Lambda
- Multi-region IoT architectures

### 🔬 Workshops (1 item)
Hands-on learning experiences:
- Event-driven AI translation Slack bot

### 🏛️ Patterns (2 items)
Architectural patterns:
- Retry Backoff Jitter
- Storage-First design

## 🚀 Deployment

### SST v3 Deployment

```bash
# Deploy to test environment
npx sst deploy --stage test

# Deploy to production environment
npx sst deploy --stage production
```

This deploys the real site to your currently authenticated AWS account. You can set a real domain in the `sst.config.ts` file.

### GitHub Pages

The site automatically deploys to GitHub Pages when you push to the main branch via GitHub Actions.

For manual deployment, build the site and deploy the `docs/.vitepress/dist/` folder to any static hosting provider.

## 🎨 Features

- ⚡ Fast static site generation with VitePress
- 🔍 Built-in local search
- 📱 Responsive design with AWS orange branding  
- 🌙 Dark mode support
- 🎯 SEO optimized
- 📊 Custom Vue components for enhanced UX

## 📄 License

MIT License - see original repository for details.

## 🙏 Acknowledgments

- **Jimmy Dahlqvist** - Original content creator and AWS Serverless Hero
- **VitePress Team** - Excellent documentation framework
- **Vue.js Team** - Powerful frontend framework

---

**Built with ❤️ using VitePress**