# Setup Guide - Arta Frontend

Panduan lengkap instalasi dan konfigurasi untuk aplikasi frontend Arta - Platform Pertukaran Limbah Industri.

## 📋 Prerequisites

### System Requirements
- **Node.js**: v18.0.0 atau lebih tinggi
- **npm**: v8.0.0 atau lebih tinggi (atau yarn v1.22.0+)
- **Git**: v2.30.0 atau lebih tinggi
- **OS**: Windows 10+, macOS 10.15+, atau Linux (Ubuntu 18.04+)

### Development Tools (Recommended)
- **VS Code** dengan extensions:
  - ES7+ React/Redux/React-Native snippets
  - TypeScript Importer
  - Tailwind CSS IntelliSense
  - Auto Rename Tag
  - Prettier - Code formatter

## 🚀 Instalasi

### 1. Clone Repository

```bash
# Clone dari repository
git clone <repository-url>

# Masuk ke direktori project
cd arta-fe

# Checkout ke branch development (jika ada)
git checkout development
```

### 2. Install Dependencies

```bash
# Install dengan npm
npm install

# Atau dengan yarn
yarn install

# Atau dengan pnpm
pnpm install
```

### 3. Environment Configuration

```bash
# Copy file environment example
cp .env.example .env

# Edit file .env dengan text editor
# VS Code: code .env
# Nano: nano .env
```

#### Environment Variables Template

```env
# Application Configuration
APP_NAME="Arta"
APP_ENV=development
APP_URL=http://localhost:5173

# API Configuration
VITE_API_BASE_URL=http://localhost:8000/api
VITE_API_TIMEOUT=10000

# Map Configuration (Leaflet)
VITE_LEAFLET_ACCESS_TOKEN=your_leaflet_access_token
VITE_DEFAULT_LAT=-7.2575
VITE_DEFAULT_LNG=112.7521

# Feature Flags
VITE_ENABLE_CHAT_BOT=true
VITE_ENABLE_REAL_TIME_UPDATES=true
VITE_ENABLE_ANALYTICS=true

# Development
VITE_DEV_TOOLS=true
```

### 4. Database Setup (Jika diperlukan)

```bash
# Jika menggunakan local database untuk development
# Install MySQL/MongoDB/PostgreSQL sesuai kebutuhan

# Jalankan migration (jika ada)
npm run db:migrate

# Seed data (jika ada)
npm run db:seed
```

## 🛠️ Development

### Start Development Server

```bash
# Start development server dengan HMR
npm run dev

# Atau dengan yarn
yarn dev

# Atau dengan pnpm
pnpm dev
```

Aplikasi akan berjalan di:
- **Frontend**: http://localhost:5173
- **Hot Reload**: Otomatis saat file berubah

### Development Commands

```bash
# Type checking
npm run typecheck

# Build untuk development
npm run build:dev

# Linting code
npm run lint

# Format code
npm run format

# Test (jika ada)
npm run test
npm run test:watch
```

## 📦 Build & Production

### Build untuk Production

```bash
# Build optimized untuk production
npm run build

# Build dengan analisis bundle size
npm run build:analyze

# Preview production build
npm run preview
```

### Production Server

```bash
# Start production server
npm run start

# Start dengan PM2 (recommended untuk production)
pm2 start ecosystem.config.js
```

## 🐳 Docker Setup

### Development dengan Docker

```bash
# Build image
docker build -t arta-fe:dev .

# Run development container
docker run -p 5173:5173 -v $(pwd):/app arta-fe:dev npm run dev
```

### Production dengan Docker

```bash
# Build production image
docker build -f Dockerfile.prod -t arta-fe:prod .

# Run production container
docker run -p 3000:3000 arta-fe:prod
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'
services:
  arta-fe:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev
```

```bash
# Jalankan dengan Docker Compose
docker-compose up -d

# Stop containers
docker-compose down
```

## 🔧 Konfigurasi Tambahan

### VS Code Settings

```json
// .vscode/settings.json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

### Prettier Configuration

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### ESLint Configuration

```json
// .eslintrc.json
{
  "extends": [
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

## 🌐 Deployment

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy ke Vercel
vercel

# Deploy ke production
vercel --prod
```

### Netlify Deployment

```bash
# Build untuk Netlify
npm run build

# Deploy dengan Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=build/client
```

### Static Hosting

```bash
# Build static files
npm run build

# Upload folder `build/client` ke hosting
# - GitHub Pages
# - AWS S3
# - Firebase Hosting
```

## 🔍 Troubleshooting

### Common Issues

#### 1. Port Conflict
```bash
# Error: Port 5173 already in use
# Solution: Kill process atau ganti port
npm run dev -- --port 3000
```

#### 2. Module Not Found
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 3. TypeScript Errors
```bash
# Clear TypeScript cache
npm run typecheck -- --noEmit
```

#### 4. Environment Variables Not Working
```bash
# Restart development server setelah mengubah .env
npm run dev
```

### Performance Issues

```bash
# Increase Node.js memory limit
node --max-old-space-size=4096 node_modules/.bin/vite

# Use SWC untuk faster compilation
npm install -D @swc/core
```

## 📊 Monitoring & Analytics

### Development Monitoring

```bash
# Install React DevTools
npm install -g react-devtools

# Monitor bundle size
npm run build:analyze
```

### Production Monitoring

```bash
# Install monitoring tools
npm install @sentry/react
npm install @vercel/analytics
```

## 🤝 Contributing

### Git Workflow

```bash
# Buat branch baru
git checkout -b feature/nama-feature

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push ke remote
git push origin feature/nama-feature

# Buat Pull Request
```

### Code Quality

```bash
# Run semua checks sebelum commit
npm run lint
npm run typecheck
npm run test

# Format code
npm run format
```

## 📚 Resources

### Documentation
- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Vite Docs](https://vitejs.dev/)

### Community
- [React Router Discord](https://discord.gg/react-router)
- [Tailwind CSS Discord](https://discord.gg/tailwindcss)
- [TypeScript Community](https://github.com/microsoft/TypeScript/discussions)

---

**Need Help?** 📞

- Contact development team
- Check issues di GitHub repository
- Join community Discord server

**Happy Coding!** 🚀