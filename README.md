# Arta - Pertukaran Limbah Industri Menjadi Nilai

[![React Router](https://img.shields.io/badge/React_Router-7.12.0-CA4245?style=for-the-badge&logo=reactrouter)](https://reactrouter.com/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

Arta adalah platform digital pertukaran limbah industri terkemuka di Surabaya yang mengubah limbah menjadi nilai ekonomi. Platform ini mendukung logistik sirkular untuk zona manufaktur Gresik dan SIER dengan solusi ESG terintegrasi.

## 🚀 Fitur Utama

### ✨ Marketplace Limbah
- **Pertukaran Limbah** - Platform jual beli limbah industri
- **Katalog Produk** - Berbagai jenis limbah dengan kategori lengkap
- **Pencarian & Filter** - Temukan limbah yang sesuai dengan kebutuhan
- **Estimasi Harga** - Kalkulasi otomatis nilai limbah

### ✨ Alat ESG
- **Dashboard Analytics** - Monitoring dampak lingkungan
- **Laporan Keberlanjutan** - Tracking KPI ESG
- **Dokumen AMDAL** - Pengelolaan dokumen lingkungan
- **Sertifikasi NIB** - Proses registrasi bisnis

### ✨ Zona Surabaya
- **Peta Interaktif** - Visualisasi zona manufaktur
- **Tracking Logistik** - Monitor distribusi limbah
- **Terminal Pengumpulan** - Lokasi pengumpulan resmi
- **Integrasi Gresik & SIER** - Konektivitas zona industri

## � Struktur Aplikasi

### Halaman Utama:
- `Landing` - Halaman beranda dengan informasi platform
- `Marketplace` - Platform jual beli limbah industri
- `Dashboard` - Analytics dan monitoring ESG
- `EstimationPrice` - Kalkulator nilai limbah
- `Report` - Laporan keberlanjutan
- `FactoryRegistration` - Registrasi pabrik baru

### Komponen Inti:
- `ChatBot` - Asisten AI untuk bantuan pengguna
- `DashboardMap` - Peta interaktif zona industri
- `Sidebar` - Navigasi utama aplikasi
- `Ticker` - Informasi berjalan real-time
- `Logo` - Branding komponen

## 🛠️ Tech Stack

- **Frontend**: React 19.2.3 dengan React Router 7.12.0
- **Bahasa**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 4.1.13
- **Icons**: Heroicons React 2.2.0
- **Maps**: Leaflet & React Leaflet
- **Build Tool**: Vite 7.1.7
- **Server**: Node.js dengan SSR

## � Quick Start

```bash
# Clone repository
git clone <repository-url>
cd arta-fe

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Start development
npm run dev
```

📖 **Untuk panduan instalasi lengkap, lihat [Setup Guide](docs/Setup.md)**

## 🐳 Docker Deployment

Build dan jalankan dengan Docker:

```bash
# Build image
docker build -t arta-fe .

# Run container
docker run -p 3000:3000 arta-fe
```

Platform yang didukung:
- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

## 📁 Struktur Project

```
arta-fe/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── ChatBot.tsx     # AI Assistant
│   │   ├── DashboardMap.tsx # Interactive map
│   │   ├── Sidebar.tsx     # Navigation sidebar
│   │   ├── Ticker.tsx      # News ticker
│   │   └── Logo.tsx        # Brand component
│   ├── routes/             # Page components
│   │   ├── Landing.tsx     # Homepage
│   │   ├── Marketplace.tsx # Waste marketplace
│   │   ├── Dashboard.tsx   # Analytics dashboard
│   │   ├── EstimationPrice.tsx # Price calculator
│   │   ├── Report.tsx      # Sustainability reports
│   │   └── ...             # Other pages
│   ├── app.css             # Global styles
│   ├── root.tsx            # App root component
│   └── routes.ts           # Route configuration
├── public/                 # Static assets
├── docs/                   # Documentation
├── package.json            # Dependencies & scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript config
└── Dockerfile             # Docker configuration
```

## 🔧 Konfigurasi

### Environment Variables
```env
# Application
APP_NAME="Arta"
APP_URL=http://localhost:5173
```

## 📖 Dokumentasi Lengkap

Untuk panduan setup dan konfigurasi lengkap, lihat dokumentasi di folder `docs/`:

- [Setup.md](docs/Setup.md) - Panduan instalasi dan konfigurasi
- [Prompt.md](docs/Prompt.md) - Prompt dan panduan development
- [PromptPitching.md](docs/PromptPitching.md) - Materi pitching
- [PropmtStitch.md](docs/PropmtStitch.md) - Panduan integrasi

## 🌟 Fitur Unggulan

- **Server-Side Rendering** - Performa optimal dan SEO friendly
- **TypeScript** - Type safety dan developer experience
- **Responsive Design** - Optimal di semua device
- **Real-time Updates** - Data aktual marketplace
- **ESG Integration** - Monitoring keberlanjutan
- **Interactive Maps** - Visualisasi zona industri

**Arta** - Solusi digital untuk ekonomi sirkular industri! 🔄♻️
