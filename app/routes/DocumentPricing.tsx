import type { Route } from "./+types/DocumentPricing";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Ticker from '../components/Ticker';
import Logo from '../components/Logo';
import ChatBot from '../components/ChatBot';
import { useState } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arta | Document Services Pricing" },
    { name: "description", content: "Pricing for NIB, AMDAL, and other document services" },
  ];
}

export default function DocumentPricing() {
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const packages = [
    {
      id: 'basic',
      name: 'Paket Basic',
      price: 'Rp 15.000.000',
      duration: '25-35 hari',
      description: 'Untuk usaha kecil dengan dampak lingkungan minimal',
      includes: [
        'Konsultasi awal dengan tim legal',
        'Persiapan dokumen NIB',
        'Pengajuan NIB ke OSS',
        'Dukungan hingga NIB diterbitkan',
        'Chat support 24/7',
      ],
      notIncluded: [
        'Penyusunan AMDAL',
        'Konsultasi lingkungan mendalam',
        'Pendampingan ke instansi',
      ],
      color: 'gray',
      recommended: false,
    },
    {
      id: 'standard',
      name: 'Paket Standard',
      price: 'Rp 45.000.000',
      duration: '50-70 hari',
      description: 'Paket lengkap untuk industri limbah & daur ulang',
      includes: [
        'Semua layanan Paket Basic',
        'Konsultasi lingkungan mendalam',
        'Penyusunan AMDAL lengkap oleh konsultan bersertifikat',
        'Penyusunan RKL & RPL',
        'Pengajuan ke Dinas Lingkungan Hidup',
        'Pendampingan hingga keputusan kelayakan diterbitkan',
        'Revisi dokumen jika diperlukan (hingga 3x)',
        'Chat support 24/7 + dedicated account manager',
      ],
      notIncluded: [
        'Izin operasional dari dinas terkait',
        'Sertifikasi ISO atau standar lainnya',
      ],
      color: 'emerald',
      recommended: true,
    },
    {
      id: 'premium',
      name: 'Paket Premium',
      price: 'Rp 75.000.000',
      duration: '40-60 hari',
      description: 'Paket premium dengan layanan lengkap & prioritas tinggi',
      includes: [
        'Semua layanan Paket Standard',
        'Prioritas penanganan (fast-track)',
        'Konsultasi dengan expert senior',
        'Penyusunan dokumen tambahan (UKL-UPL, izin lingkungan)',
        'Pendampingan ke semua instansi terkait',
        'Revisi dokumen unlimited',
        'Asuransi dokumen (jika ada penolakan, kami revisi gratis)',
        'Dedicated account manager + legal consultant',
        'Priority support (response time < 2 jam)',
      ],
      notIncluded: [
        'Sertifikasi ISO atau standar lainnya',
      ],
      color: 'cyan',
      recommended: false,
    },
  ];

  const additionalServices = [
    { name: 'Konsultasi Tambahan (per jam)', price: 'Rp 500.000', description: 'Konsultasi dengan expert kami' },
    { name: 'Revisi Dokumen (per revisi)', price: 'Rp 2.000.000', description: 'Revisi dokumen di luar paket' },
    { name: 'Penyusunan UKL-UPL', price: 'Rp 8.000.000', description: 'Untuk usaha yang tidak memerlukan AMDAL' },
    { name: 'Izin Lingkungan', price: 'Rp 5.000.000', description: 'Permohonan izin lingkungan' },
    { name: 'Izin Operasional', price: 'Rp 10.000.000', description: 'Permohonan izin operasional dari dinas' },
    { name: 'Pendampingan Inspeksi', price: 'Rp 3.000.000', description: 'Pendampingan saat inspeksi dari dinas' },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string; button: string }> = {
      gray: {
        border: 'border-gray-300',
        bg: 'bg-gray-50',
        text: 'text-gray-600',
        button: 'bg-gray-500 hover:bg-gray-600 border-gray-300',
      },
      emerald: {
        border: 'border-emerald-500',
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        button: 'bg-emerald-500 hover:bg-emerald-600 border-emerald-300',
      },
      cyan: {
        border: 'border-cyan-500',
        bg: 'bg-cyan-50',
        text: 'text-cyan-600',
        button: 'bg-cyan-500 hover:bg-cyan-600 border-cyan-300',
      },
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-display">
      <Ticker />

      {/* NAV */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-white border-b-4 border-emerald-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-gray-500 font-mono">LAYANAN</p>
                <p className="text-sm font-bold text-emerald-600">PRICING</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-28 min-h-screen relative bg-gray-50">
        <div className="absolute inset-0 scanlines bg-scanlines opacity-20 pointer-events-none z-10 h-full w-full fixed"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
          <div className="mb-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold uppercase tracking-tight mb-2 text-gray-900">Paket Layanan Dokumen</h1>
              <p className="text-gray-600 font-mono text-sm">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
            </div>
          </div>

          {/* PRICING CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg) => {
              const colors = getColorClasses(pkg.color);
              return (
                <div
                  key={pkg.id}
                  className={`border-2 ${colors.border} ${colors.bg} p-6 shadow-lg relative ${pkg.recommended ? 'ring-2 ring-yellow-400 transform md:scale-105' : ''}`}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 text-xs font-bold uppercase border-2 border-yellow-600 shadow-lg">
                      Rekomendasi
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className={`text-2xl font-bold ${colors.text} mb-2`}>{pkg.name}</h2>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-gray-900 mb-1">{pkg.price}</div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 font-mono">
                        <ClockIcon className="w-4 h-4" />
                        {pkg.duration}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full btn-retro border-2 text-white font-bold text-sm uppercase px-4 py-3 shadow-lg mb-6 ${colors.button} transition-all`}
                  >
                    Pilih Paket
                  </button>

                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Termasuk:</div>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircleIcon className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.notIncluded.length > 0 && (
                    <div className="space-y-2 pt-4 border-t-2 border-gray-300">
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Tidak termasuk:</div>
                      {pkg.notIncluded.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ADDITIONAL SERVICES */}
          <div className="bg-white border-2 border-gray-300 p-6 md:p-8 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-emerald-600" />
              Layanan Tambahan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalServices.map((service, idx) => (
                <div key={idx} className="border-2 border-gray-300 p-4 hover:border-emerald-500 hover:bg-emerald-50 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{service.name}</h3>
                    <span className="text-emerald-600 font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BENEFITS */}
          <div className="bg-white border-2 border-gray-300 p-6 md:p-8 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ShieldCheckIcon className="w-6 h-6 text-cyan-600" />
              Mengapa Memilih Arta?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Tim Expert Berpengalaman</h3>
                  <p className="text-sm text-gray-600">Tim kami memiliki pengalaman lebih dari 10 tahun dalam pengurusan dokumen legal dan lingkungan.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Proses Transparan</h3>
                  <p className="text-sm text-gray-600">Anda dapat memantau progress pengurusan dokumen secara real-time melalui dashboard kami.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Garansi Kepuasan</h3>
                  <p className="text-sm text-gray-600">Jika dokumen ditolak, kami akan merevisi dan mengajukan ulang tanpa biaya tambahan.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Support 24/7</h3>
                  <p className="text-sm text-gray-600">Tim support kami siap membantu Anda kapan saja melalui chat, email, atau telepon.</p>
                </div>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-300">
            <a href="/document-amdal" className="text-gray-600 hover:text-gray-900 font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors">
              <ArrowLeftIcon className="w-4 h-4" />
              Kembali ke AMDAL
            </a>
            <a href="/dashboard" className="btn-retro bg-emerald-500 border-2 border-emerald-300 text-white font-bold text-sm uppercase px-8 py-4 shadow-lg flex items-center gap-2 hover:bg-emerald-600 w-full sm:w-auto justify-center">
              Mulai Sekarang
              <SparklesIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* CHAT WIDGET */}
        <ChatBot storageKey="arta-document-pricing-chat-messages" />
      </main>
    </div>
  );
}
