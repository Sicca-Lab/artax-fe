import type { Route } from "./+types/DocumentNIB";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DocumentCheckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import Ticker from '../components/Ticker';
import Logo from '../components/Logo';
import ChatBot from '../components/ChatBot';
import { useState } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arta | NIB Document Requirements" },
    { name: "description", content: "NIB (Nomor Induk Berusaha) Document Requirements" },
  ];
}

export default function DocumentNIB() {
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    ownerName: '',
    ownerKTP: '',
    companyAddress: '',
    businessAddress: '',
    npwp: '',
    phone: '',
    email: '',
  });
  const requiredDocuments = [
    {
      name: 'Akta Pendirian Perusahaan',
      description: 'Akta notaris pendirian PT/CV/Koperasi',
      status: 'required',
      estimatedTime: '2-3 hari',
      notes: 'Harus sudah disahkan oleh Kementerian Hukum dan HAM'
    },
    {
      name: 'KTP Pemilik/Pengurus',
      description: 'Fotokopi KTP yang masih berlaku',
      status: 'required',
      estimatedTime: '1 hari',
      notes: 'Minimal 2 lembar untuk setiap pengurus'
    },
    {
      name: 'NPWP Perusahaan',
      description: 'Nomor Pokok Wajib Pajak',
      status: 'required',
      estimatedTime: '3-5 hari',
      notes: 'Dapat diurus di kantor pajak terdekat'
    },
    {
      name: 'Bukti Kepemilikan Lokasi Usaha',
      description: 'Sertifikat tanah, surat sewa, atau bukti lainnya',
      status: 'required',
      estimatedTime: '1-2 hari',
      notes: 'Fotokopi yang sudah dilegalisir'
    },
    {
      name: 'Surat Keterangan Domisili Usaha',
      description: 'Dari kelurahan/desa setempat',
      status: 'required',
      estimatedTime: '1 hari',
      notes: 'Berlaku 6 bulan sejak dikeluarkan'
    },
    {
      name: 'Rencana Tata Letak Lokasi Usaha',
      description: 'Gambar denah lokasi usaha',
      status: 'optional',
      estimatedTime: '2-3 hari',
      notes: 'Dapat dibuat sendiri atau dengan bantuan profesional'
    },
  ];

  const processingSteps = [
    { step: 1, title: 'Persiapan Dokumen', duration: '3-5 hari', description: 'Mengumpulkan dan menyiapkan semua dokumen yang diperlukan' },
    { step: 2, title: 'Verifikasi Dokumen', duration: '2-3 hari', description: 'Tim kami melakukan verifikasi kelengkapan dokumen' },
    { step: 3, title: 'Pengajuan ke OSS', duration: '1-2 hari', description: 'Pengajuan melalui sistem Online Single Submission' },
    { step: 4, title: 'Persetujuan & Penerbitan', duration: '3-5 hari', description: 'Menunggu persetujuan dan penerbitan NIB resmi' },
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
                <p className="text-sm font-bold text-emerald-600">NIB</p>
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
                <h1 className="text-3xl font-bold uppercase tracking-tight mb-1 text-gray-900">NIB (Nomor Induk Berusaha)</h1>
                <p className="text-gray-600 font-mono text-sm">Dokumen & Persyaratan yang Diperlukan</p>
              </div>
            </div>
            <div className="h-6 w-full bg-gray-200 border-2 border-gray-300 p-1 shadow-pixel-sm relative">
              <div className="h-full w-1/3 bg-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 5px, transparent 5px, transparent 10px)"}}></div>
              </div>
            </div>
          </div>

          {/* OVERVIEW */}
          <div className="bg-white border-2 border-gray-300 p-6 md:p-8 shadow-lg mb-8">
            <div className="flex items-start gap-4 mb-6">
              <DocumentCheckIcon className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Apa itu NIB?</h2>
                <p className="text-gray-700 leading-relaxed">
                  NIB (Nomor Induk Berusaha) adalah nomor identitas unik yang diberikan oleh Kementerian Investasi/BKPM kepada setiap pelaku usaha. NIB diperlukan untuk semua jenis usaha dan merupakan persyaratan utama untuk mendapatkan izin-izin lainnya seperti AMDAL, izin lingkungan, dan izin operasional.
                </p>
              </div>
            </div>
          </div>

          {/* PROCESSING TIMELINE */}
          <div className="bg-white border-2 border-gray-300 p-6 md:p-8 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ClockIcon className="w-6 h-6 text-cyan-600" />
              Tahapan Proses Permohonan NIB
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
                <p className="font-bold text-yellow-900 text-sm mb-1">Estimasi Total: 9-15 Hari Kerja</p>
                <p className="text-xs text-yellow-800">Waktu dapat bervariasi tergantung kelengkapan dokumen dan kondisi administratif perusahaan Anda.</p>
              </div>
            </div>
          </div>

          {/* INPUT FORM */}
          <div className="bg-white border-2 border-gray-300 p-6 md:p-8 shadow-lg mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DocumentCheckIcon className="w-6 h-6 text-emerald-600" />
              Isi Data Perusahaan Anda
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Nama Perusahaan *</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="PT. Nama Perusahaan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Jenis Usaha *</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="">Pilih Jenis Usaha</option>
                    <option value="manufaktur">Manufaktur</option>
                    <option value="daur-ulang">Daur Ulang</option>
                    <option value="limbah">Pengelolaan Limbah</option>
                    <option value="logistik">Logistik</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Nama Pemilik *</label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="Nama Lengkap Pemilik"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">No. KTP Pemilik *</label>
                  <input
                    type="text"
                    value={formData.ownerKTP}
                    onChange={(e) => setFormData({...formData, ownerKTP: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="3271XXXXXXXXXX"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Alamat Kantor Pusat *</label>
                  <input
                    type="text"
                    value={formData.companyAddress}
                    onChange={(e) => setFormData({...formData, companyAddress: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="Jl. Contoh No. 123, Kota, Provinsi"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Alamat Lokasi Usaha *</label>
                  <input
                    type="text"
                    value={formData.businessAddress}
                    onChange={(e) => setFormData({...formData, businessAddress: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="Jl. Lokasi Usaha No. 456, Kota, Provinsi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">NPWP (jika ada)</label>
                  <input
                    type="text"
                    value={formData.npwp}
                    onChange={(e) => setFormData({...formData, npwp: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="XX.XXX.XXX.X-XXX.XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">No. Telepon *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="+62 XXX XXXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-emerald-500 focus:outline-none"
                    placeholder="email@perusahaan.com"
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
        <ChatBot storageKey="arta-document-nib-chat-messages" />
      </main>
    </div>
  );
}
