import type { Route } from "./+types/Report";
import { useState } from 'react';
import { HomeIcon, ShoppingBagIcon, ChartBarIcon, TruckIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
import Ticker from '../components/Ticker';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arta | Pusat Kepatuhan ESG & Laporan" },
    { name: "description", content: "Pusat Kepatuhan & Laporan ESG" },
  ];
}

export default function Report() {
  const [selectedDate, setSelectedDate] = useState(5);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-display flex flex-col">
      <Ticker />

      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-white border-b-4 border-emerald-200 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-gray-500 font-mono">HUB PASAR</p>
                <p className="text-sm font-bold text-emerald-600">SURABAYA</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 w-full">
        <Sidebar
          items={[
            { id: 'dashboard', label: 'Dasbor', icon: <HomeIcon className="w-5 h-5" />, href: '/dashboard', isActive: false },
            { id: 'marketplace', label: 'Pasar', icon: <ShoppingBagIcon className="w-5 h-5" />, href: '/marketplace', isActive: false },
            { id: 'logistics', label: 'Logistik', icon: <TruckIcon className="w-5 h-5" />, href: '/estimation', isActive: false },
            { id: 'report', label: 'Laporan', icon: <ChartBarIcon className="w-5 h-5" />, href: '/report', isActive: true },
            { id: 'settings', label: 'Pengaturan', icon: <Cog6ToothIcon className="w-5 h-5" />, href: '#', isActive: false },
          ]}
          userInfo={{ initials: 'OP', name: 'Operator 7', unit: 'Pusat ESG' }}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex justify-center py-8 px-4 md:px-8 lg:px-12 overflow-y-auto">
        <div className="flex flex-col max-w-[1280px] flex-1 gap-8 w-full">
          {/* PAGE HEADING */}
          <div className="flex flex-wrap justify-between gap-3 border-b-2 border-gray-300 pb-6">
            <div className="flex min-w-72 flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-sm bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-600 border-2 border-emerald-500">V.2.0 AKTIF</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <h1 className="text-gray-900 text-3xl md:text-4xl font-black leading-tight tracking-tight uppercase">
                Terminal Kepatuhan ESG
              </h1>
              <p className="text-gray-600 text-base font-normal leading-normal max-w-2xl">Pantau metrik keberlanjutan, visualisasikan dampak, dan hasilkan laporan siap audit untuk kepatuhan regulasi.</p>
            </div>
            <div className="flex items-end">
              <span className="text-xs font-mono text-gray-600">SINKRONISASI TERAKHIR: 2023-10-24 14:02:55 UTC</span>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* REPORT GENERATOR */}
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6 flex flex-col md:flex-row gap-8 shadow-lg">
                {/* CALENDAR */}
                <div className="flex-1 min-w-[300px]">
                  <div className="flex items-center justify-between mb-4 border-b-2 border-gray-300 pb-2">
                    <h3 className="text-gray-900 text-sm font-bold tracking-wider uppercase flex items-center gap-2">
                      📅
                      Periode Laporan
                    </h3>
                    <div className="flex gap-1">
                      <button className="hover:text-emerald-600 transition-colors text-gray-600">◀</button>
                      <span className="text-gray-900 font-bold text-sm">Oktober 2023</span>
                      <button className="hover:text-emerald-600 transition-colors text-gray-600">▶</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                      <span key={day} className="text-gray-600 text-[10px] font-bold py-1">{day}</span>
                    ))}
                    {[28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((date) => (
                      <button
                        key={date}
                        onClick={() => date >= 1 && setSelectedDate(date)}
                        className={`text-xs h-8 rounded hover:bg-gray-100 transition-colors ${
                          date >= 1
                            ? date === selectedDate
                              ? 'bg-emerald-500 text-white font-bold shadow-lg'
                              : 'text-gray-900 hover:bg-gray-200'
                            : 'text-gray-400'
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ACTION SECTION */}
                <div className="flex-1 flex flex-col justify-between border-t-2 md:border-t-0 md:border-l-2 border-gray-300 pt-6 md:pt-0 md:pl-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-900 text-lg font-bold">Siap Dihasilkan</h3>
                    <p className="text-gray-600 text-sm">Mencakup metrik limbah yang dialihkan, perhitungan offset karbon, dan log pemulihan bahan baku.</p>
                    <div className="flex items-center gap-2 mt-2">
                      ✅
                      <span className="text-xs text-gray-900">Data diverifikasi oleh Smart Contracts</span>
                    </div>
                  </div>
                  <button className="group mt-6 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-14 bg-emerald-500 hover:bg-emerald-600 transition-all text-white gap-3 px-5 text-base font-bold tracking-wide shadow-lg">
                    📥
                    UNDUH LAPORAN PDF
                  </button>
                </div>
              </div>

              {/* STATS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'Total Limbah Dialihkan', value: '1.240 Ton', icon: '♻️', color: 'emerald' },
                  { label: 'Pengurangan CO2 (Est)', value: '-450 kg', icon: '🌍', color: 'emerald' },
                  { label: 'XP Keberlanjutan', value: 'Lvl 4 (85%)', icon: '⭐', color: 'emerald' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-3 rounded-lg bg-white border-2 border-gray-300 p-5 relative overflow-hidden group hover:border-emerald-500 transition-colors shadow-sm">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity text-4xl">
                      {stat.icon}
                    </div>
                    <div className="flex items-start justify-between">
                      <p className="text-gray-600 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-lg"></span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-2">
                      <p className="text-gray-900 text-3xl font-bold font-mono">{stat.value}</p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center gap-2">
                      <div className="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1 border-2 border-emerald-500">
                        📈 +12%
                      </div>
                      <span className="text-xs text-gray-600">vs bulan lalu</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* IMPACT VISUALIZER */}
              <div className="rounded-lg bg-white border-2 border-gray-300 overflow-hidden flex flex-col h-full min-h-[320px] shadow-lg">
                <div className="p-4 border-b-2 border-gray-300 flex justify-between items-center bg-gray-100">
                  <h3 className="text-gray-900 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    🌲
                    Visualisasi Dampak
                  </h3>
                  <span className="bg-emerald-100 text-emerald-600 text-[10px] px-2 py-0.5 rounded border-2 border-emerald-500">LANGSUNG</span>
                </div>
                <div className="relative flex-1 bg-gray-100 flex items-end justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARXzZVzjTOaYqUZ3_GKMNTGCXdkgTCiyc-bUPPOo0nR2RZvv_7IW5iBT6K7ZfLXaYuZcWSqzEQ50s7UFTf15-7NoQA4Ko2OKhptpX921PzsWRvFBsEvgKBkV8ijeDwa6R9xgtpZdnjrC57SIIEOSDJWJaZo4sdxZvVj8djTMUBxGo9ffiLrxcL30kO-2B4eDTi8aZQHz06zuPjUECGTq4ePM5_QozAdbrxK8938GHuh_eT2fQoCZ5MYoZlckR3RJ25ZEfW-_0f4us")', imageRendering: 'pixelated'}}>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  <div className="relative z-10 p-6 w-full">
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-300 p-4 rounded text-center shadow-lg">
                      <p className="text-gray-600 text-xs uppercase mb-1">Setara Dunia Nyata</p>
                      <p className="text-gray-900 font-bold text-lg">Pabrik Anda telah menanam <span className="text-emerald-600 text-xl">45</span> pohon virtual.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RECENT AUDITS */}
              <div className="rounded-lg bg-white border-2 border-gray-300 overflow-hidden flex flex-col shadow-lg">
                <div className="p-4 border-b-2 border-gray-300 bg-gray-100">
                  <h3 className="text-gray-900 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    📋
                    Laporan Audit Terbaru
                  </h3>
                </div>
                <div className="flex flex-col divide-y-2 divide-gray-300">
                  {[
                    { name: 'Audit_Maret_2024.pdf', size: '1.2 MB', date: '31 Mar' },
                    { name: 'Audit_Feb_2024.pdf', size: '1.1 MB', date: '28 Feb' },
                    { name: 'Sertifikat_Kepatuhan_Q1.pdf', size: '0.8 MB', date: '15 Jan' },
                  ].map((audit, idx) => (
                    <div key={idx} className="group flex items-center justify-between p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded bg-gray-200 flex items-center justify-center text-gray-600 group-hover:text-gray-900 group-hover:bg-emerald-100 transition-all">
                          📄
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-900 text-sm font-bold group-hover:text-emerald-600 transition-colors">{audit.name}</span>
                          <span className="text-gray-600 text-xs font-mono">{audit.size} • Dibuat {audit.date}</span>
                        </div>
                      </div>
                      <button className="text-gray-600 hover:text-gray-900 transition-colors">
                        📥
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t-2 border-gray-300">
                  <a className="text-xs text-emerald-600 hover:text-emerald-700 font-mono uppercase tracking-wide transition-colors" href="#">Lihat Arsip Lengkap →</a>
                </div>
              </div>
            </div>
          </div>

          {/* ESG SAAS SUBSCRIPTION SECTION */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 border-4 border-blue-800 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-3 border-2 border-blue-900">
                <ChartBarIcon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-white text-2xl font-black uppercase font-mono">Subscription ESG Premium</h2>
                <p className="text-blue-100 text-sm font-mono">Akses penuh ke fitur compliance & reporting otomatis</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-4 rounded">
                <p className="text-blue-100 text-xs font-mono uppercase mb-1">Paket Aktif</p>
                <p className="text-white text-2xl font-black font-mono">PREMIUM</p>
                <p className="text-blue-200 text-sm font-mono mt-1">Rp 1.500.000 / bulan</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-4 rounded">
                <p className="text-blue-100 text-xs font-mono uppercase mb-1">Periode Berlangganan</p>
                <p className="text-white text-2xl font-black font-mono">12 Bulan</p>
                <p className="text-blue-200 text-sm font-mono mt-1">Perpanjangan otomatis</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-4 rounded">
                <p className="text-blue-100 text-xs font-mono uppercase mb-1">Laporan Dibuat</p>
                <p className="text-white text-2xl font-black font-mono">247</p>
                <p className="text-blue-200 text-sm font-mono mt-1">Sejak berlangganan</p>
              </div>
            </div>

            <div className="bg-white border-2 border-blue-900 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 font-mono text-gray-900">✨ Fitur Premium Anda</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded border-2 border-emerald-500">
                    <span className="text-emerald-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">Laporan ESG Otomatis</p>
                    <p className="text-xs text-gray-600 font-mono">Generate laporan siap audit dalam 1 klik</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded border-2 border-emerald-500">
                    <span className="text-emerald-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">Dashboard Analisis Mendalam</p>
                    <p className="text-xs text-gray-600 font-mono">Visualisasi data limbah real-time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded border-2 border-emerald-500">
                    <span className="text-emerald-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">Verifikasi Prioritas</p>
                    <p className="text-xs text-gray-600 font-mono">Dokumen legalitas diproses lebih cepat</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded border-2 border-emerald-500">
                    <span className="text-emerald-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">Compliance Tracking</p>
                    <p className="text-xs text-gray-600 font-mono">Notifikasi regulasi & deadline otomatis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded border-2 border-emerald-500">
                    <span className="text-emerald-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">Data Historis Unlimited</p>
                    <p className="text-xs text-gray-600 font-mono">Akses semua data sejak awal berlangganan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded border-2 border-emerald-500">
                    <span className="text-emerald-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">Support Prioritas 24/7</p>
                    <p className="text-xs text-gray-600 font-mono">Tim compliance siap membantu kapan saja</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-gray-300 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 font-mono mb-1">Perpanjangan otomatis pada:</p>
                  <p className="text-gray-900 font-bold font-mono">15 Januari 2025</p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-bold font-mono uppercase border-b-4 border-r-4 border-blue-700 active:border-b-0 active:border-r-0 active:translate-y-1 transition-all">
                  Kelola Subscription
                </button>
              </div>
            </div>

            <div className="mt-4 bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg">
              <p className="text-sm text-gray-700 font-mono leading-relaxed">
                <strong className="text-yellow-800">💡 Sticky Platform:</strong> Data ESG historis Anda tersimpan aman di ArtaX. 
                Dengan 247 laporan yang sudah dibuat, semua riwayat compliance pabrik Anda ada di sini - membuat perpindahan platform menjadi sangat sulit dan tidak efisien.
              </p>
            </div>
          </div>

        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
