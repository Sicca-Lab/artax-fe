import type { Route } from "./+types/EstimationPrice";
import { useState } from 'react';
import { 
  HomeIcon, 
  Cog6ToothIcon,
  MicrophoneIcon,
  CameraIcon,
  ScaleIcon,
  SparklesIcon,
  ShoppingBagIcon,
  TruckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import Ticker from '../components/Ticker';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arta - Input Limbah Pintar & Jurnal Suara" },
    { name: "description", content: "Input Limbah Pintar & Jurnal Suara" },
  ];
}

export default function EstimationPrice() {
  const [weight, setWeight] = useState('45.5');
  const [selectedCategory, setSelectedCategory] = useState('plastic');
  const [wasteName, setWasteName] = useState('');

  return (
    <div className="bg-white text-gray-900 font-display min-h-screen flex flex-col overflow-x-hidden">
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
            { id: 'dashboard', label: 'Dasbor', icon: <HomeIcon className="w-5 h-5" />, href: '/dashboard', isActive: true },
            { id: 'marketplace', label: 'Pasar', icon: <ShoppingBagIcon className="w-5 h-5" />, href: '/marketplace', isActive: false },
            { id: 'logistics', label: 'Logistik', icon: <TruckIcon className="w-5 h-5" />, href: '/estimation', isActive: false },
            { id: 'report', label: 'Laporan', icon: <ChartBarIcon className="w-5 h-5" />, href: '/report', isActive: false },
            { id: 'settings', label: 'Pengaturan', icon: <Cog6ToothIcon className="w-5 h-5" />, href: '#', isActive: false },
          ]}
          userInfo={{ initials: 'OP', name: 'Operator 7', unit: 'Kantor Pusat' }}
        />

      <main className="flex-1 flex flex-col relative overflow-hidden bg-white">
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 bg-gray-50">
          <div className="mx-auto max-w-7xl h-full flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 uppercase tracking-wide">
                    <SparklesIcon className="w-5 h-5 text-emerald-500" />
                    Konsol Input Pintar
                  </h3>
                  <div className="px-3 py-1 bg-emerald-100 border-2 border-emerald-500 text-emerald-600 text-xs font-mono uppercase tracking-widest animate-pulse">
                    Visi AI: Aktif
                  </div>
                </div>

                <div className="bg-white border-4 border-gray-300 shadow-lg flex-1 p-6 flex flex-col gap-6 relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-[300px]">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-gray-600 uppercase tracking-wider flex items-center gap-2 font-bold">
                        <span className="w-2 h-2 bg-emerald-500 inline-block"></span> Pemindaian Visual
                      </label>
                      <div className="relative flex-1 bg-gray-900 border-4 border-gray-400 overflow-hidden group">
                        <div className="absolute inset-0 bg-gray-800 opacity-80 z-0"></div>
                        <div className="absolute inset-0 z-10 opacity-20" style={{backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
                        <div className="absolute top-[40%] left-0 right-0 h-0.5 bg-emerald-500/60 shadow-[0_0_10px_#10b981] z-20"></div>
                        <div className="absolute inset-8 border-2 border-dashed border-emerald-500/30 z-10 flex items-center justify-center">
                          <div className="w-6 h-6 border-t-[3px] border-l-[3px] border-emerald-500 absolute top-0 left-0"></div>
                          <div className="w-6 h-6 border-t-[3px] border-r-[3px] border-emerald-500 absolute top-0 right-0"></div>
                          <div className="w-6 h-6 border-b-[3px] border-l-[3px] border-emerald-500 absolute bottom-0 left-0"></div>
                          <div className="w-6 h-6 border-b-[3px] border-r-[3px] border-emerald-500 absolute bottom-0 right-0"></div>
                          <span className="text-xs font-mono text-emerald-500 bg-black/70 px-2 py-1 border border-emerald-500/30">MENDETEKSI OBJEK...</span>
                        </div>
                        <div className="absolute top-3 left-3 z-30 flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-red-900"></div>
                          <span className="text-[10px] font-mono text-red-400 font-bold bg-black/60 px-1">REC</span>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-3 bg-black/80 border-t-2 border-gray-700 z-30 flex justify-center">
                          <button className="flex items-center gap-2 text-xs font-bold text-white hover:text-emerald-500 transition-colors uppercase font-mono">
                            <CameraIcon className="w-5 h-5" />
                            Ketuk untuk Menangkap
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 h-full">
                      <label className="text-xs font-mono text-gray-600 uppercase tracking-wider flex items-center gap-2 font-bold">
                        <span className="w-2 h-2 bg-yellow-500 inline-block"></span> Log Suara
                      </label>
                      <div className="bg-gray-900 border-4 border-gray-400 p-3 flex-1 font-mono text-base text-gray-300 overflow-hidden relative shadow-inner">
                        <p className="mb-2 text-xs text-gray-500 border-b border-gray-800 pb-1">ENTRI TERAKHIR: 10:42 AM</p>
                        <p className="mb-2"><span className="text-emerald-500">&gt;</span> Menginisialisasi modul suara...</p>
                        <p className="mb-2"><span className="text-emerald-500">&gt;</span> Mendengarkan...</p>
                        <p className="text-white">"Terdaftar <span className="text-yellow-500 font-bold border-b border-yellow-500 border-dashed">45kg</span> dari <span className="text-emerald-500 font-bold border-b border-emerald-500 border-dashed">Polietilena Kepadatan Tinggi</span> dari Unit 4..."</p>
                        <span className="animate-pulse text-emerald-500 block mt-1 font-bold text-xl">_</span>
                      </div>
                      <button className="h-28 bg-gray-200 hover:bg-gray-300 border-b-[6px] border-r-[6px] border-gray-900 active:border-b-0 active:border-r-0 active:translate-y-1 active:translate-x-1 border-t-2 border-l-2 border-gray-100 flex items-center justify-center gap-4 transition-all group relative overflow-hidden shadow-lg mt-2">
                        <div className="p-4 bg-gray-900 border-2 border-gray-400 group-hover:border-emerald-500 group-hover:shadow-[0_0_20px_#10b981] transition-all relative">
                          <MicrophoneIcon className="w-8 h-8 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-2xl font-black text-gray-900 tracking-wide font-display uppercase">Input Suara</span>
                          <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-widest bg-emerald-100 px-1 border border-emerald-500">Transkripsi Otomatis</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-gray-600 uppercase tracking-wider flex items-center gap-2 border-t-2 border-gray-300 pt-4 font-bold">
                      <span className="w-2 h-2 bg-emerald-500 inline-block"></span> Pilih Kategori Cepat
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button onClick={() => setSelectedCategory('plastic')} className={`${selectedCategory === 'plastic' ? 'bg-emerald-500 border-emerald-600 text-white' : 'bg-gray-200 border-gray-400 text-gray-600 hover:text-gray-900 hover:border-gray-500'} border-4 font-bold text-xl py-6 shadow-[4px_4px_0_#111] active:shadow-none active:translate-y-1 active:translate-x-1 transition-all flex flex-col items-center gap-2 group relative overflow-hidden`}>
                        <ScaleIcon className="w-12 h-12 group-hover:scale-110 transition-transform" />
                        PLASTIK (HDPE)
                        {selectedCategory === 'plastic' && <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>}
                      </button>
                      <button onClick={() => setSelectedCategory('metal')} className={`${selectedCategory === 'metal' ? 'bg-emerald-500 border-emerald-600 text-white' : 'bg-gray-200 border-gray-400 text-gray-600 hover:text-gray-900 hover:border-gray-500'} border-4 font-bold text-xl py-6 shadow-[4px_4px_0_#111] active:shadow-none active:translate-y-1 active:translate-x-1 transition-all flex flex-col items-center gap-2 group`}>
                        <ScaleIcon className="w-12 h-12 group-hover:scale-110 transition-transform" />
                        LIMBAH LOGAM
                      </button>
                      <button onClick={() => setSelectedCategory('chemical')} className={`${selectedCategory === 'chemical' ? 'bg-emerald-500 border-emerald-600 text-white' : 'bg-gray-200 border-gray-400 text-gray-600 hover:text-gray-900 hover:border-gray-500'} border-4 font-bold text-xl py-6 shadow-[4px_4px_0_#111] active:shadow-none active:translate-y-1 active:translate-x-1 transition-all flex flex-col items-center gap-2 group`}>
                        <SparklesIcon className="w-12 h-12 group-hover:scale-110 transition-transform" />
                        KIMIA
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-white border-2 border-gray-300 p-4 flex items-center gap-4">
                      <div className="bg-gray-200 p-3 border-2 border-gray-400">
                        <ScaleIcon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex flex-col w-full">
                        <span className="text-[10px] uppercase text-gray-500 font-mono font-bold tracking-widest">Berat Bersih</span>
                        <div className="flex items-baseline gap-2 border-b-2 border-gray-300">
                          <input className="bg-transparent text-3xl font-bold text-gray-900 w-full border-none focus:ring-0 p-0 font-mono placeholder-gray-400" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                          <span className="text-lg font-bold text-gray-500 font-mono">KG</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-gray-300 p-4 flex flex-col">
                      <span className="text-[10px] uppercase text-gray-500 font-mono font-bold tracking-widest mb-2">Nama Limbah</span>
                      <input 
                        className="bg-transparent text-lg font-bold text-gray-900 w-full border-b-2 border-gray-300 focus:border-emerald-500 focus:ring-0 p-0 font-mono placeholder-gray-400" 
                        type="text" 
                        placeholder="Contoh: Plastik HDPE Bekas" 
                        value={wasteName} 
                        onChange={(e) => setWasteName(e.target.value)} 
                      />
                    </div>
                  </div>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base py-3 shadow-[4px_4px_0_#b7791f] active:shadow-none active:translate-y-1 active:translate-x-1 border-4 border-yellow-600 transition-all flex items-center justify-center gap-2 uppercase tracking-wide mt-4">
                    <SparklesIcon className="w-5 h-5" />
                    SIMPAN LISTING
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col h-full">
                <div className="bg-gray-900 border-4 border-gray-700 shadow-lg h-full flex flex-col relative overflow-hidden">
                  <div className="p-6 flex flex-col h-full bg-gray-900 text-emerald-500 font-mono relative z-10">
                    <div className="flex justify-between items-end border-b-2 border-emerald-900/50 pb-2 mb-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-emerald-500 animate-pulse"></div>
                        <div className="w-2 h-2 bg-emerald-900"></div>
                        <div className="w-2 h-2 bg-emerald-900"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-6 bg-gray-800 border-2 border-emerald-900/30 mb-6 relative group">
                      <div className="absolute top-2 left-2 text-[10px] uppercase text-emerald-700">Est. Nilai Pasar</div>
                      <div className="text-5xl font-bold text-yellow-400 tracking-tighter drop-shadow-[0_0_8px_rgba(236,201,75,0.5)]">
                        Rp 6,75jt
                      </div>
                      <div className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                        <span>▲</span>
                        +4.2% vs minggu lalu
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm text-emerald-400">
                          <span>Kepercayaan AI</span>
                          <span>92%</span>
                        </div>
                        <div className="h-3 w-full bg-gray-800 overflow-hidden flex gap-[2px]">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-[10%] bg-emerald-500 h-full"></div>
                          ))}
                          <div className="w-[10%] bg-emerald-900 h-full"></div>
                        </div>
                      </div>
                      <div className="bg-gray-800 p-3 border-2 border-emerald-900/50">
                        <div className="text-[10px] uppercase text-emerald-700 mb-1">Material Terdeteksi</div>
                        <div className="text-lg text-white font-bold leading-none">Limbah Plastik HDPE</div>
                        <div className="text-xs text-emerald-400/70 mt-1">Kepadatan: Tinggi // Kontaminasi: &lt; 5%</div>
                      </div>
                      <div className="bg-blue-900/50 border-2 border-blue-500/30 p-3">
                        <div className="text-[10px] uppercase text-blue-400 mb-2 flex items-center gap-1">
                          <span>✓</span> Verifikasi AI Selesai
                        </div>
                        <div className="space-y-1.5 text-xs text-blue-200">
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            <span>Kategori: Plastik HDPE (Kode: 02)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            <span>Status: Non-B3 (Tidak Berbahaya)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            <span>Estimasi Harga: Rp 6.750.000</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-yellow-900/30 border-2 border-yellow-500/30 p-3">
                        <div className="text-[10px] uppercase text-yellow-400 mb-2">📄 Dokumen Diperlukan</div>
                        <div className="space-y-1 text-[10px] text-yellow-200">
                          <div className="flex items-start gap-1.5">
                            <span className="text-yellow-400">✓</span>
                            <span>NIB (Nomor Induk Berusaha)</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-yellow-400">✓</span>
                            <span>Dokumen AMDAL/UKL-UPL</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <span className="text-yellow-400">✓</span>
                            <span>Surat Pernyataan Kualitas</span>
                          </div>
                        </div>
                        <div className="mt-2 pt-2 border-t border-yellow-500/20 text-[9px] text-yellow-300/70">
                          Upload dokumen di menu Registrasi
                        </div>
                      </div>
                      <div className="flex-1 min-h-[100px] border-2 border-emerald-900/30 bg-gray-800 p-2 relative flex items-end gap-1">
                        <div className="absolute top-2 left-2 text-[10px] text-emerald-700 uppercase">Tren 30 Hari</div>
                        <div className="w-1/6 bg-emerald-900/40 h-[40%]"></div>
                        <div className="w-1/6 bg-emerald-900/50 h-[30%]"></div>
                        <div className="w-1/6 bg-emerald-900/60 h-[50%]"></div>
                        <div className="w-1/6 bg-emerald-900/70 h-[45%]"></div>
                        <div className="w-1/6 bg-emerald-900/80 h-[65%]"></div>
                        <div className="w-1/6 bg-emerald-500 h-[80%] shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t-2 border-emerald-900/50 text-[10px] text-emerald-800 flex justify-between font-mono">
                      <span>MEM: 64KB OK</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
