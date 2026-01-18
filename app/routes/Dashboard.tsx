import type { Route } from "./+types/Dashboard";
import { useState, useEffect } from 'react';
import {
  HomeIcon,
  ShoppingBagIcon,
  TruckIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  MapPinIcon,
  SparklesIcon,
  WalletIcon,
  ArrowTrendingUpIcon,
  ScaleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Logo from '../components/Logo';
import Ticker from '../components/Ticker';
import DashboardMap from '../components/DashboardMap';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

export function meta() {
  return [
    { title: "Arta | Command Center Dashboard" },
    { name: "description", content: "Arta Command Center - Post-Login Dashboard" },
  ];
}

export default function Dashboard() {
  const [chatOpen, setChatOpen] = useState(false);

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
                <p className="text-xs text-gray-500 font-mono">HUB PASAR</p>
                <p className="text-sm font-bold text-emerald-600">SURABAYA</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar
        items={[
          { id: 'dashboard', label: 'Dasbor', icon: <HomeIcon className="w-5 h-5" />, href: '/dashboard', isActive: false },
          { id: 'marketplace', label: 'Pasar', icon: <ShoppingBagIcon className="w-5 h-5" />, href: '/marketplace', isActive: false },
          { id: 'logistics', label: 'Logistik', icon: <TruckIcon className="w-5 h-5" />, href: '/estimation', isActive: true },
          { id: 'report', label: 'Laporan', icon: <ChartBarIcon className="w-5 h-5" />, href: '/report', isActive: false },
          { id: 'settings', label: 'Pengaturan', icon: <Cog6ToothIcon className="w-5 h-5" />, href: '#', isActive: false },
        ]}
        userInfo={{ initials: 'OP', name: 'Operator 7', unit: 'Kantor Pusat' }}
      />

      {/* MAIN CONTENT */}
      <main className="ml-64 pt-28 min-h-screen bg-gray-50">
          <div className="p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* MAIN MAP SECTION */}
              <div className="col-span-1 md:col-span-12 lg:col-span-8 flex flex-col">
                <div className="bg-white border-2 border-gray-300 p-1 shadow-lg h-full flex flex-col min-h-[500px] relative group overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b-2 border-gray-300 mb-0 z-20 relative">
                    <h3 className="text-gray-900 font-bold tracking-wide uppercase flex items-center gap-3 font-pixel text-sm">
                      <MapPinIcon className="w-5 h-5 text-emerald-600" />
                      PETA LANGSUNG SBY
                    </h3>
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-100 border-2 border-emerald-500 rounded-none">
                        <div className="size-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-emerald-600 text-[10px] font-mono font-bold tracking-wider">LANGSUNG</span>
                      </div>
                      <span className="px-2 py-1 bg-white text-gray-900 text-[10px] font-mono border-2 border-gray-300">42 TRUK AKTIF</span>
                    </div>
                  </div>
                  <div className="relative flex-1 bg-white overflow-hidden">
                    <div className="absolute inset-0">
                      <DashboardMap />
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col gap-6">
                <Link to="/dashboard">
                  <button className="w-full flex items-center justify-between p-4 bg-emerald-500 border-2 border-emerald-300 hover:bg-emerald-600 text-white shadow-lg group transition-all transform hover:-translate-y-1">
                    <div className="flex flex-col items-start">
                      <span className="font-pixel text-xs uppercase mb-1">Tindakan Diperlukan</span>
                      <span className="text-lg font-bold font-mono tracking-tight">JUAL LIMBAH SEKARANG</span>
                    </div>
                    <ShoppingBagIcon className="w-8 h-8 group-hover:rotate-45 transition-transform" />
                  </button>
                </Link>

                <Link to="/marketplace">
                  <button className="w-full flex items-center justify-between p-4 bg-white border-2 border-gray-300 hover:border-emerald-500 hover:text-emerald-600 text-gray-600 shadow-sm group transition-all transform hover:-translate-y-1">
                    <div className="flex flex-col items-start">
                      <span className="font-pixel text-xs uppercase mb-1">Data Pasar</span>
                      <span className="text-sm font-bold font-mono tracking-tight uppercase">Periksa Indeks Harga Terperinci</span>
                    </div>
                    <ChartBarIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <div className="bg-white border-2 border-gray-300 p-5 shadow-lg flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-dashed border-gray-300">
                    <h3 className="text-gray-900 font-bold tracking-wide uppercase flex items-center gap-2 font-pixel text-xs">
                      <SparklesIcon className="w-4 h-4 text-emerald-600" />
                      Ringkasan Dampak
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-600 border-2 border-emerald-600 px-2 py-0.5">BULANAN</span>
                  </div>
                  <div className="space-y-6 flex-1">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 font-mono uppercase">CO2 Dihindari</span>
                        <span className="text-gray-900 font-bold font-mono">2.450 KG</span>
                      </div>
                      <div className="w-full bg-gray-200 h-4 border-2 border-gray-300 p-[2px]">
                        <div className="bg-emerald-500 h-full w-[75%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 font-mono uppercase">Pohon Diselamatkan</span>
                        <span className="text-gray-900 font-bold font-mono">142 POHON</span>
                      </div>
                      <div className="w-full bg-gray-200 h-4 border-2 border-gray-300 p-[2px]">
                        <div className="bg-emerald-500 h-full w-[45%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 font-mono uppercase">Air Dilestarikan</span>
                        <span className="text-gray-900 font-bold font-mono">15K LITER</span>
                      </div>
                      <div className="w-full bg-gray-200 h-4 border-2 border-gray-300 p-[2px]">
                        <div className="bg-cyan-500 h-full w-[60%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-300 text-center">
                    <p className="text-[10px] text-gray-600 font-mono uppercase">Kontribusi Anda setara dengan energi <span className="text-gray-900 font-bold">45 rumah tangga</span>.</p>
                  </div>
                </div>
              </div>

              {/* BOTTOM STATS */}
              <div className="col-span-1 md:col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-300 p-5 shadow-lg flex flex-col justify-between min-h-[180px]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mb-1 font-pixel">Total Nilai Dipulihkan</p>
                      <h4 className="text-4xl text-gray-900 font-mono font-bold tracking-tight">IDR 45.2<span className="text-xl text-gray-600">jt</span></h4>
                    </div>
                    <div className="bg-emerald-100 p-2 border-2 border-emerald-500">
                      <WalletIcon className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowTrendingUpIcon className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 text-xs font-bold font-mono">+12% vs bulan lalu</span>
                    </div>
                    <div className="bg-gray-100 border-2 border-gray-300 p-3 font-mono text-xs text-gray-600 grid grid-cols-2 gap-y-2 gap-x-4">
                      <div className="flex justify-between border-b border-dashed border-gray-400 pb-1">
                        <span>PLASTIC</span> <span className="text-gray-900">IDR 12.1jt</span>
                      </div>
                      <div className="flex justify-between border-b border-dashed border-gray-400 pb-1">
                        <span>METAL</span> <span className="text-gray-900">IDR 28.5jt</span>
                      </div>
                      <div className="flex justify-between">
                        <span>PAPER</span> <span className="text-gray-900">IDR 4.6jt</span>
                      </div>
                      <div className="flex justify-between">
                        <span>OTHER</span> <span className="text-gray-900">IDR 0.0jt</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-300 p-5 shadow-lg flex flex-col justify-between min-h-[180px]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mb-1 font-pixel">Total Limbah Diproses</p>
                      <h4 className="text-4xl text-gray-900 font-mono font-bold tracking-tight">8.240 <span className="text-xl text-gray-600">kg</span></h4>
                    </div>
                    <div className="bg-cyan-100 p-2 border-2 border-cyan-500">
                      <ScaleIcon className="w-6 h-6 text-cyan-600" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-end gap-2 h-16 w-full px-2 pt-2 border-b-2 border-l-2 border-gray-300 bg-gray-100">
                      <div className="w-1/6 bg-gray-300 hover:bg-emerald-500 h-[20%] transition-all relative group"></div>
                      <div className="w-1/6 bg-gray-300 hover:bg-emerald-500 h-[40%] transition-all relative group"></div>
                      <div className="w-1/6 bg-gray-300 hover:bg-emerald-500 h-[30%] transition-all relative group"></div>
                      <div className="w-1/6 bg-gray-300 hover:bg-emerald-500 h-[60%] transition-all relative group"></div>
                      <div className="w-1/6 bg-gray-300 hover:bg-emerald-500 h-[50%] transition-all relative group"></div>
                      <div className="w-1/6 bg-emerald-500 border-t-2 border-emerald-600 h-[85%] relative group"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TRANSACTION LOG */}
              <div className="col-span-1 md:col-span-12 lg:col-span-4 bg-white border-2 border-gray-300 p-0 shadow-lg flex flex-col">
                <div className="p-4 border-b-2 border-gray-300 bg-gray-100">
                  <h3 className="text-gray-900 font-bold tracking-wide uppercase flex items-center gap-2 text-xs font-pixel">
                    <ClockIcon className="w-4 h-4 text-gray-600" />
                    Log Transaksi
                  </h3>
                </div>
                <div className="flex-1 p-4 space-y-4 max-h-[200px] overflow-y-auto">
                  <div className="flex gap-3 items-start group">
                    <div className="mt-1 size-2 bg-emerald-500 rounded-none shadow-lg"></div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-mono mb-0.5">10:42 AM <span className="ml-2 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">DIKONFIRMASI</span></p>
                      <p className="text-sm text-gray-900 leading-tight font-mono">Terjual <span className="text-emerald-600">500kg Besi</span> ke PT. Baja Sakti.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start group">
                    <div className="mt-1 size-2 bg-gray-400 rounded-none"></div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-mono mb-0.5">09:15 AM</p>
                      <p className="text-sm text-gray-900 leading-tight font-mono">Pengambilan dijadwalkan untuk <span className="text-cyan-600">Zona B (Gresik)</span>.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start group">
                    <div className="mt-1 size-2 bg-yellow-500 rounded-none"></div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-mono mb-0.5">08:30 AM</p>
                      <p className="text-sm text-gray-900 leading-tight font-mono">Pencapaian: <span className="text-yellow-600 font-bold">Prajurit Plastik</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}
