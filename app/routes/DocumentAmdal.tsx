import type { Route } from "./+types/DocumentAmdal";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DocumentCheckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import Ticker from '../components/Ticker';
import Logo from '../components/Logo';
import ChatBot from '../components/ChatBot';
import { useState } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arta | AMDAL Document Requirements" },
    { name: "description", content: "AMDAL (Environmental Impact Assessment) Document Requirements" },
  ];
}

export default function DocumentAMDAL() {
  const [formData, setFormData] = useState({
    wasteType: '',
    wasteVolume: '',
    wasteVolumeUnit: 'ton/bulan',
    wasteManagement: '',
    environmentalImpact: '',
    mitigationPlan: '',
    staffCount: '',
    operatingHours: '',
    notes: '',
  });
  const amdal_requirements = [
    {
      category: 'Dokumen Lingkungan',
      items: [
        { name: 'Dokumen AMDAL Lengkap', description: 'Analisis Mengenai Dampak Lingkungan yang sudah disusun oleh konsultan lingkungan bersertifikat', required: true },
        { name: 'Ringkasan Eksekutif (Executive Summary)', description: 'Ringkasan AMDAL dalam bahasa Indonesia yang mudah dipahami', required: true },
        { name: 'Rencana Pengelolaan Lingkungan (RKL)', description: 'Rencana untuk mengelola dampak positif dan negatif', required: true },
        { name: 'Rencana Pemantauan Lingkungan (RPL)', description: 'Rencana untuk memantau kualitas lingkungan secara berkala', required: true },
      ]
    },
    {
      category: 'Dokumen Teknis & Operasional',
      items: [
        { name: 'Gambar Teknis Lokasi Usaha', description: 'Denah lokasi dengan skala yang jelas dan terukur', required: true },
        { name: 'Rencana Tata Letak Fasilitas', description: 'Layout penempatan mesin, gudang, dan area operasional', required: true },
        { name: 'Spesifikasi Peralatan Produksi', description: 'Data teknis mesin dan peralatan yang digunakan', required: true },
        { name: 'Rencana Pengelolaan Limbah', description: 'Sistem penanganan limbah padat, cair, dan gas', required: true },
      ]
    },
    {
      category: 'Dokumen Pendukung',
      items: [
        { name: 'Surat Pernyataan Komitmen Lingkungan', description: 'Pernyataan komitmen dari pimpinan perusahaan', required: true },
        { name: 'Izin Prinsip dari Pemerintah Daerah', description: 'Izin awal dari Bupati/Walikota setempat', required: false },
        { name: 'Sertifikat Konsultan Lingkungan', description: 'Sertifikat keahlian konsultan yang menyusun AMDAL', required: true },
        { name: 'Laporan Uji Coba Operasional', description: 'Hasil uji coba operasional jika sudah ada fasilitas', required: false },
      ]
    },
  ];

  const processingSteps = [
    { step: 1, title: 'Konsultasi Awal', duration: '2-3 hari', description: 'Diskusi dengan tim kami untuk menentukan ruang lingkup AMDAL' },
    { step: 2, title: 'Penyusunan AMDAL', duration: '15-30 hari', description: 'Konsultan lingkungan menyusun dokumen AMDAL lengkap' },
    { step: 3, title: 'Review & Revisi', duration: '3-5 hari', description: 'Tim kami melakukan review dan perbaikan jika diperlukan' },
    { step: 4, title: 'Pengajuan ke Instansi', duration: '5-10 hari', description: 'Pengajuan ke Dinas Lingkungan Hidup setempat' },
    { step: 5, title: 'Komisi Penilai AMDAL', duration: '10-15 hari', description: 'Proses penilaian oleh komisi independen' },
    { step: 6, title: 'Penerbitan Keputusan', duration: '3-5 hari', description: 'Penerbitan keputusan kelayakan lingkungan' },
  ];

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
                <p className="text-xs text-gray-500 font-mono">DOKUMEN</p>
                <p className="text-sm font-bold text-emerald-600">AMDAL</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow relative bg-gray-50">
        <div className="absolute inset-0 scanlines bg-scanlines opacity-20 pointer-events-none z-10 h-full w-full fixed"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
          <div className="mb-10">
            <div className="flex justify-between items-end mb-2">
              <div>
                <h1 className="text-3xl font-bold uppercase tracking-tight mb-1 text-gray-900">AMDAL (Analisis Mengenai Dampak Lingkungan)</h1>
                <p className="text-gray-600 font-mono text-sm">Dokumen & Persyaratan yang Diperlukan</p>
              </div>
            </div>
            <div className="h-6 w-full bg-gray-200 border-2 border-gray-300 p-1 shadow-pixel-sm relative">
              <div className="h-full w-2/3 bg-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 5px, transparent 5px, transparent 10px)"}}></div>
              </div>
            </div>
          </div>

          {/* OVERVIEW */}
          <div className="bg-white border-2 border-gray-300 p-6 md:p-8 shadow-lg mb-8">
            <div className="flex items-start gap-4 mb-6">
              <ShieldCheckIcon className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Apa itu AMDAL?</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  AMDAL adalah studi komprehensif untuk mengidentifikasi dan mengevaluasi dampak lingkungan dari suatu proyek atau usaha. AMDAL diperlukan untuk industri tertentu yang berpotensi menimbulkan dampak lingkungan signifikan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Untuk industri limbah dan daur ulang, AMDAL adalah persyaratan wajib sebelum mendapatkan izin operasional dari pemerintah daerah.
                </p>
              </div>
            </div>
          </div>

          {/* PROCESSING TIMELINE */}
          <div className="bg-white border-2 border-gray-300 p-6 md:p-8 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ClockIcon className="w-6 h-6 text-cyan-600" />
              Tahapan Proses Permohonan AMDAL
            </h2>
            <div className="space-y-4">
              {processingSteps.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    {idx < processingSteps.length - 1 && (
                      <div className="w-0.5 h-12 bg-gray-300 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-grow pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <span className="text-xs font-mono bg-gray-100 px-2 py-1 border border-gray-300 text-gray-600">{item.duration}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 flex items-start gap-3">
              <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-yellow-900 text-sm mb-1">Estimasi Total: 38-68 Hari Kerja</p>
                <p className="text-xs text-yellow-800">Waktu dapat bervariasi tergantung kompleksitas usaha dan respons dari komisi penilai AMDAL.</p>
              </div>
            </div>
          </div>

          {/* INPUT FORM */}
          <div className="bg-white border-2 border-gray-300 p-6 md:p-8 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DocumentCheckIcon className="w-6 h-6 text-emerald-600" />
              Isi Data Limbah & Operasional Anda
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Jenis Limbah Utama *</label>
                  <select
                    value={formData.wasteType}
                    onChange={(e) => setFormData({...formData, wasteType: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="">Pilih Jenis Limbah</option>
                    <option value="plastik">Plastik</option>
                    <option value="logam">Logam</option>
                    <option value="kertas">Kertas & Kardus</option>
                    <option value="organik">Organik</option>
                    <option value="elektronik">Elektronik</option>
                    <option value="campuran">Campuran</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Volume Limbah per Bulan *</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={formData.wasteVolume}
                      onChange={(e) => setFormData({...formData, wasteVolume: e.target.value})}
                      className="flex-grow border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                      placeholder="100"
                    />
                    <select
                      value={formData.wasteVolumeUnit}
                      onChange={(e) => setFormData({...formData, wasteVolumeUnit: e.target.value})}
                      className="border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="ton/bulan">ton/bulan</option>
                      <option value="kg/bulan">kg/bulan</option>
                      <option value="m3/bulan">m³/bulan</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Metode Pengelolaan Limbah *</label>
                  <textarea
                    value={formData.wasteManagement}
                    onChange={(e) => setFormData({...formData, wasteManagement: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    rows={3}
                    placeholder="Jelaskan metode pengelolaan limbah (pemilahan, daur ulang, pengolahan, dll)"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Potensi Dampak Lingkungan *</label>
                  <textarea
                    value={formData.environmentalImpact}
                    onChange={(e) => setFormData({...formData, environmentalImpact: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    rows={3}
                    placeholder="Jelaskan potensi dampak lingkungan dari operasional Anda (air, udara, tanah, dll)"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Rencana Mitigasi Dampak *</label>
                  <textarea
                    value={formData.mitigationPlan}
                    onChange={(e) => setFormData({...formData, mitigationPlan: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    rows={3}
                    placeholder="Jelaskan rencana untuk mengurangi/menghilangkan dampak lingkungan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Jumlah Karyawan *</label>
                  <input
                    type="number"
                    value={formData.staffCount}
                    onChange={(e) => setFormData({...formData, staffCount: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Jam Operasional *</label>
                  <input
                    type="text"
                    value={formData.operatingHours}
                    onChange={(e) => setFormData({...formData, operatingHours: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="08:00 - 17:00 (Senin-Jumat)"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Catatan Tambahan</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    rows={3}
                    placeholder="Informasi tambahan yang ingin Anda sampaikan"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-300">
            <a href="/document-register" className="text-gray-600 hover:text-gray-900 font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors">
              <ArrowLeftIcon className="w-4 h-4" />
              Kembali ke Dokumen
            </a>
            <a href="/document-register-pricing" className="btn-retro bg-emerald-500 border-2 border-emerald-300 text-white font-bold text-sm uppercase px-8 py-4 shadow-lg flex items-center gap-2 hover:bg-emerald-600 w-full sm:w-auto justify-center">
              Lanjut ke Pricing
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* CHAT WIDGET */}
        <ChatBot storageKey="arta-document-amdal-chat-messages" />
      </main>
    </div>
  );
}
