import type { Route } from "./+types/Register";
import {
  BuildingOfficeIcon,
  DocumentArrowUpIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  LockClosedIcon,

  ChevronDownIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Ticker from '../components/Ticker';
import Logo from '../components/Logo';
import ChatBot from '../components/ChatBot';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arta | Factory Registration Step 1" },
    { name: "description", content: "Register your factory on Arta's industrial waste-to-value exchange." },
  ];
}

export default function Register() {
  const [showDocHelp, setShowDocHelp] = useState(false);

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
                <p className="text-xs text-gray-500 font-mono">STEP</p>
                <p className="text-sm font-bold text-emerald-600">1 OF 2</p>
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
                <h1 className="text-3xl font-bold uppercase tracking-tight mb-1 text-gray-900">Registrasi Pabrik</h1>
                <p className="text-gray-600 font-mono text-sm">Create your digital twin in the Surabaya Industrial Zone.</p>
              </div>
              <div className="text-right">
                <span className="text-emerald-600 font-mono font-bold text-lg">STEP 1/2</span>
              </div>
            </div>
            <div className="h-6 w-full bg-gray-200 border-2 border-gray-300 p-1 shadow-pixel-sm relative">
              <div className="h-full w-1/2 bg-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 5px, transparent 5px, transparent 10px)"}}></div>
              </div>
            </div>
          </div>

          <form className="bg-white border-2 border-gray-300 p-6 md:p-10 shadow-lg relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-border-light"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-border-light"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-border-light"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-border-light"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
              {/* LEFT COLUMN - BASIC PROFILE */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b border-gray-300 pb-3 mb-6">
                  <BuildingOfficeIcon className="w-5 h-5 text-cyan-600" />
                  <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900">Basic Profile</h2>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono text-gray-600 uppercase tracking-widest">
                    Nama Resmi Perusahaan <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="form-input-retro w-full text-sm py-3 px-4 bg-white border-2 border-gray-300 text-gray-900 focus:border-emerald-500 outline-none"
                    placeholder="PT. Jaya Abadi Sentosa"
                    type="text"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono text-gray-600 uppercase tracking-widest">
                    Alamat Lengkap <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="form-input-retro w-full text-sm py-3 px-4 bg-white border-2 border-gray-300 text-gray-900 focus:border-emerald-500 outline-none resize-none"
                    placeholder="Jl. Rungkut Industri Raya No. 12..."
                    rows={3}
                  ></textarea>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono text-gray-600 uppercase tracking-widest">
                    Jenis Industri <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="form-input-retro w-full text-sm py-3 px-4 bg-white border-2 border-gray-300 text-gray-900 focus:border-emerald-500 outline-none appearance-none cursor-pointer">
                      <option disabled selected value="">Pilih Kategori Industri</option>
                      <option value="manufaktur">Manufaktur (General)</option>
                      <option value="tekstil">Tekstil & Garment</option>
                      <option value="plastik">Plastik & Polimer</option>
                      <option value="fnb">Food & Beverage</option>
                      <option value="kimia">Kimia & Farmasi</option>
                      <option value="elektronik">Elektronik & Komponen</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600">
                      <ChevronDownIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono text-gray-600 uppercase tracking-widest">
                    Nama Penanggung Jawab <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="form-input-retro w-full text-sm py-3 px-4 bg-white border-2 border-gray-300 text-gray-900 focus:border-emerald-500 outline-none"
                    placeholder="Budi Santoso (Direktur Ops)"
                    type="text"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN - KYB DOCUMENTS */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b border-gray-300 pb-3 mb-6">
                  <ShieldCheckIcon className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900">KYB Documents</h2>
                </div>

                {!showDocHelp ? (
                  <div className="space-y-6">
                    <a href="/document-register"
                      type="button"
                      onClick={() => setShowDocHelp(true)}
                      className="group cursor-pointer block w-full"
                    >
                      <div className="border-2 border-dashed border-cyan-300 bg-cyan-50 p-4 flex items-center gap-4 hover:bg-cyan-100 hover:border-cyan-500 transition-all relative overflow-hidden group-hover:shadow-lg">
                        <div className="bg-cyan-200 border border-cyan-500 text-cyan-600 p-2 rounded-sm shrink-0 flex items-center justify-center">
                          <SparklesIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                          <span className="block text-cyan-700 font-bold uppercase text-sm tracking-wider">Belum Punya Dokumen?</span>
                          <span className="block text-cyan-600 text-xs font-mono mt-1 group-hover:text-cyan-700">Kami Siap Bantu Pengurusan →</span>
                        </div>
                      </div>
                    </a>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-gray-600 uppercase tracking-widest">
                        NIB (Nomor Induk Berusaha)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 bg-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-colors group cursor-pointer relative p-6 flex flex-col items-center justify-center text-center rounded-sm">
                        <input accept=".pdf,.jpg,.png" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file" />
                        <div className="bg-white p-2 rounded-sm border border-gray-300 shadow-sm mb-3 group-hover:scale-110 transition-transform">
                          <DocumentArrowUpIcon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <p className="text-sm font-bold text-gray-700">Drag & Drop or Click to Upload</p>
                        <p className="text-[10px] text-gray-500 font-mono mt-1">PDF, JPG up to 5MB</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-gray-600 uppercase tracking-widest">
                        Dokumen AMDAL / UKL-UPL
                      </label>
                      <div className="border-2 border-dashed border-gray-300 bg-gray-100 hover:border-cyan-500 hover:bg-cyan-50 transition-colors group cursor-pointer relative p-6 flex flex-col items-center justify-center text-center rounded-sm">
                        <input accept=".pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file" />
                        <div className="bg-white p-2 rounded-sm border border-gray-300 shadow-sm mb-3 group-hover:scale-110 transition-transform">
                          <DocumentArrowUpIcon className="w-6 h-6 text-cyan-600" />
                        </div>
                        <p className="text-sm font-bold text-gray-700">Drag & Drop or Click to Upload</p>
                        <p className="text-[10px] text-gray-500 font-mono mt-1">PDF ONLY</p>
                      </div>
                    </div>

                    <div className="bg-gray-100 border border-gray-300 p-4 flex items-center justify-between shadow-sm">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">Izin Limbah B3</span>
                        <span className="text-[10px] text-gray-600 font-mono">HAZARDOUS WASTE PERMIT</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer group">
                        <input className="sr-only peer" type="checkbox" />
                        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none border-2 border-gray-400 rounded-sm peer-checked:bg-emerald-500 peer-checked:border-emerald-600 transition-colors"></div>
                        <div className="absolute left-1 top-1 bg-white border border-gray-400 h-6 w-6 transition-all peer-checked:translate-x-6 shadow-sm flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-300 border border-gray-400"></div>
                        </div>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <button
                      type="button"
                      onClick={() => setShowDocHelp(false)}
                      className="cursor-pointer text-gray-600 hover:text-gray-900 flex items-center gap-2 text-xs font-mono mb-4 w-fit transition-colors uppercase tracking-widest"
                    >
                      <ArrowLeftIcon className="w-4 h-4" />
                      Sudah punya dokumen? Upload Manual
                    </button>

                    <div className="bg-cyan-50 border-2 border-cyan-500 p-6 relative shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-cyan-100/30 pointer-events-none"></div>
                      <div className="absolute -top-4 -right-4 text-cyan-200 pointer-events-none">
                        <BuildingOfficeIcon className="w-36 h-36" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-2 w-2 bg-cyan-600 animate-pulse"></div>
                          <span className="text-cyan-700 font-bold font-mono text-xs uppercase tracking-widest">
                            Layanan Prioritas Arta
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">Kami Bantu Urus Legalitas</h3>
                        <p className="text-gray-700 text-sm mb-6 leading-relaxed border-l-2 border-cyan-400 pl-3">
                          Arta akan menangani seluruh proses pembuatan NIB, AMDAL, dan perizinan pabrik Anda secara resmi dan transparan.
                        </p>
                        <div className="bg-white border border-cyan-300 p-4 mb-6 space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Pembuatan NIB (Nomor Induk Berusaha)</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Penyusunan Dokumen AMDAL / UKL-UPL</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Verifikasi Izin Lingkungan & B3</span>
                          </div>
                        </div>
                        <button className="btn-retro w-full bg-cyan-600 border-2 border-cyan-400 text-white font-bold text-sm uppercase px-4 py-4 shadow-lg flex items-center justify-center gap-2 hover:bg-cyan-700 group">
                          Lanjutkan ke Pengurusan Dokumen
                          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-4">
              <a href="/" className="text-gray-600 hover:text-gray-900 font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors" type="button">
                <ArrowLeftIcon className="w-4 h-4" />
                Kembali ke Beranda
              </a>
              <a href="/factory-register" className="btn-retro bg-emerald-500 border-2 border-emerald-300 text-white font-bold text-sm uppercase px-8 py-4 shadow-lg flex items-center gap-2 hover:bg-emerald-600 w-full sm:w-auto justify-center" type="submit">
                Lanjut ke Langkah 2
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>
          </form>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 border border-gray-400 rounded-sm text-[10px] text-gray-700 font-mono">
              <LockClosedIcon className="w-3 h-3" />
              ENCRYPTED CONNECTION (SSL) • ISO 27001 SECURE
            </div>
          </div>
        </div>

        {/* CHAT WIDGET */}
        <ChatBot storageKey="arta-register-chat-messages" />
      </main>
    </div>
  );
}
