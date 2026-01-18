import type { Route } from "./+types/tracking";
import { useState } from 'react';
import { 
  HomeIcon,
  ShoppingBagIcon,
  TruckIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  MapPinIcon,
  CheckCircleIcon,
  ClockIcon,
  PhoneIcon,
  UserIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import Ticker from '../components/Ticker';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ArtaX | Tracking Pengiriman" },
    { name: "description", content: "Lacak pengiriman limbah Anda secara real-time" },
  ];
}

export default function Tracking() {
  const [currentStatus, setCurrentStatus] = useState(2); // 0: Diproses, 1: Dijemput, 2: Dalam Perjalanan, 3: Terkirim

  // Mock order data
  const orderData = {
    orderId: "ORD-2024-001234",
    product: "Baterai Lithium Ion",
    volume: "50 Ton",
    seller: "PT Elektronik Nusantara",
    sellerLocation: "Tandes, Surabaya",
    buyer: "PT Recycling Indonesia",
    buyerLocation: "Rungkut Industrial, Surabaya",
    price: "Rp 123.000.000",
    platformFee: "Rp 2.460.000",
    totalPaid: "Rp 125.460.000",
    orderDate: "15 Januari 2025, 14:30",
    estimatedDelivery: "16 Januari 2025, 10:00",
  };

  const driverData = {
    name: "Budi Santoso",
    phone: "+62 812-3456-7890",
    truckCompany: "PT Logistik Arta Sejahtera",
    truckNumber: "L 1234 AB",
    truckType: "Truk Box B3 Certified",
    license: "SIM B2 Umum",
    rating: "4.9/5.0",
    trips: "1,247 pengiriman",
  };

  const trackingSteps = [
    {
      id: 0,
      title: "Pesanan Diproses",
      description: "Kontrak ditandatangani & pembayaran dikonfirmasi",
      time: "15 Jan, 14:30",
      icon: "📋",
    },
    {
      id: 1,
      title: "Limbah Dijemput",
      description: "Driver mengambil limbah dari lokasi penjual",
      time: "15 Jan, 16:45",
      icon: "📦",
    },
    {
      id: 2,
      title: "Dalam Perjalanan",
      description: "Truk sedang menuju lokasi tujuan",
      time: "15 Jan, 17:20",
      icon: "🚚",
    },
    {
      id: 3,
      title: "Terkirim",
      description: "Limbah telah diterima pembeli",
      time: "Estimasi: 16 Jan, 10:00",
      icon: "✅",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-display flex flex-col">
      <Ticker />

      {/* NAV */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-white border-b-4 border-emerald-200 backdrop-blur-sm shadow-sm">
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

      <div className="flex flex-1 w-full mt-28">
        <Sidebar
          items={[
            { id: 'dashboard', label: 'Dasbor', icon: <HomeIcon className="w-5 h-5" />, href: '/dashboard', isActive: false },
            { id: 'marketplace', label: 'Pasar', icon: <ShoppingBagIcon className="w-5 h-5" />, href: '/marketplace', isActive: false },
            { id: 'logistics', label: 'Logistik', icon: <TruckIcon className="w-5 h-5" />, href: '/estimation', isActive: true },
            { id: 'report', label: 'Laporan', icon: <ChartBarIcon className="w-5 h-5" />, href: '/report', isActive: false },
            { id: 'settings', label: 'Pengaturan', icon: <Cog6ToothIcon className="w-5 h-5" />, href: '#', isActive: false },
          ]}
          userInfo={{ initials: 'OP', name: 'Operator 7', unit: 'Logistik' }}
        />

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto bg-gray-50 ml-64">
          <div className="max-w-5xl mx-auto p-6 lg:p-12 space-y-6">
            
            {/* BACK BUTTON */}
            <a href="/marketplace" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-mono text-sm transition-colors">
              <ArrowLeftIcon className="w-4 h-4" />
              Kembali ke Pasar
            </a>

            {/* HEADER */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 border-4 border-emerald-800 p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-white text-3xl font-black uppercase font-mono mb-2">Tracking Pengiriman</h1>
                  <p className="text-emerald-100 font-mono text-sm">Order ID: {orderData.orderId}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm border-2 border-white/40 px-4 py-2">
                  <span className="text-white font-mono text-sm font-bold">DALAM PERJALANAN</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-3">
                  <p className="text-emerald-100 text-xs font-mono uppercase mb-1">Produk</p>
                  <p className="text-white font-bold font-mono text-sm">{orderData.product}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-3">
                  <p className="text-emerald-100 text-xs font-mono uppercase mb-1">Volume</p>
                  <p className="text-white font-bold font-mono text-sm">{orderData.volume}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-3">
                  <p className="text-emerald-100 text-xs font-mono uppercase mb-1">Estimasi Tiba</p>
                  <p className="text-white font-bold font-mono text-sm">{orderData.estimatedDelivery}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* LEFT COLUMN - TRACKING TIMELINE */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* TRACKING STEPS */}
                <div className="bg-white border-4 border-gray-300 p-6">
                  <h2 className="text-xl font-black uppercase font-mono mb-6 text-gray-900">Status Pengiriman</h2>
                  <div className="space-y-6">
                    {trackingSteps.map((step, index) => (
                      <div key={step.id} className="flex gap-4">
                        {/* ICON & LINE */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center text-xl ${
                            step.id <= currentStatus 
                              ? 'bg-emerald-500 border-emerald-600' 
                              : 'bg-gray-200 border-gray-300'
                          }`}>
                            {step.icon}
                          </div>
                          {index < trackingSteps.length - 1 && (
                            <div className={`w-1 h-16 ${
                              step.id < currentStatus ? 'bg-emerald-500' : 'bg-gray-300'
                            }`}></div>
                          )}
                        </div>
                        
                        {/* CONTENT */}
                        <div className="flex-1 pb-6">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className={`font-bold font-mono ${
                              step.id <= currentStatus ? 'text-gray-900' : 'text-gray-400'
                            }`}>
                              {step.title}
                            </h3>
                            {step.id <= currentStatus && (
                              <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
                            )}
                          </div>
                          <p className={`text-sm font-mono mb-2 ${
                            step.id <= currentStatus ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {step.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <ClockIcon className={`w-4 h-4 ${
                              step.id <= currentStatus ? 'text-emerald-600' : 'text-gray-400'
                            }`} />
                            <span className={`text-xs font-mono ${
                              step.id <= currentStatus ? 'text-emerald-600 font-bold' : 'text-gray-400'
                            }`}>
                              {step.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MAP PLACEHOLDER */}
                <div className="bg-white border-4 border-gray-300 p-4">
                  <h3 className="font-bold font-mono uppercase text-sm mb-4 text-gray-900">Lokasi Real-Time</h3>
                  <div className="bg-gray-200 border-2 border-gray-400 h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 opacity-50"></div>
                    <div className="relative z-10 text-center">
                      <MapPinIcon className="w-16 h-16 text-emerald-600 mx-auto mb-2 animate-bounce" />
                      <p className="text-gray-700 font-mono text-sm font-bold">Truk sedang di Jl. Raya Surabaya-Gresik</p>
                      <p className="text-gray-600 font-mono text-xs mt-1">12.5 km dari tujuan</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN - DRIVER & ORDER INFO */}
              <div className="space-y-6">
                
                {/* DRIVER INFO - GOJEK STYLE */}
                <div className="bg-white border-4 border-gray-300 overflow-hidden">
                  <div className="bg-emerald-500 p-4 border-b-4 border-emerald-600">
                    <h3 className="text-white font-black uppercase font-mono text-sm">Informasi Driver</h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {/* DRIVER PROFILE */}
                    <div className="flex items-center gap-3 pb-4 border-b-2 border-gray-200">
                      <div className="w-16 h-16 bg-gray-200 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        <UserIcon className="w-8 h-8 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-black text-lg font-mono text-gray-900">{driverData.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-yellow-500 text-sm">⭐ {driverData.rating}</span>
                          <span className="text-gray-500 text-xs font-mono">• {driverData.trips}</span>
                        </div>
                      </div>
                    </div>

                    {/* CONTACT */}
                    <a href={`tel:${driverData.phone}`} className="flex items-center gap-3 p-3 bg-emerald-50 border-2 border-emerald-300 hover:bg-emerald-100 transition-colors">
                      <PhoneIcon className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="text-xs text-gray-600 font-mono">Hubungi Driver</p>
                        <p className="font-bold text-sm font-mono text-gray-900">{driverData.phone}</p>
                      </div>
                    </a>

                    {/* TRUCK INFO */}
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Perusahaan Truk:</span>
                        <span className="text-gray-900 font-bold text-right">{driverData.truckCompany}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Nomor Polisi:</span>
                        <span className="text-gray-900 font-bold">{driverData.truckNumber}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Tipe Truk:</span>
                        <span className="text-gray-900 font-bold text-right">{driverData.truckType}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Lisensi Driver:</span>
                        <span className="text-gray-900 font-bold">{driverData.license}</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-300 p-3">
                      <p className="text-xs text-gray-700 font-mono leading-relaxed">
                        <strong className="text-blue-700">✓ Truk Tersertifikasi B3</strong><br/>
                        Truk ini memiliki izin resmi untuk mengangkut limbah berbahaya sesuai regulasi pemerintah.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ORDER DETAILS */}
                <div className="bg-white border-4 border-gray-300 overflow-hidden">
                  <div className="bg-gray-900 p-4 border-b-4 border-gray-700">
                    <h3 className="text-white font-black uppercase font-mono text-sm">Detail Pesanan</h3>
                  </div>
                  <div className="p-5 space-y-3 text-xs font-mono">
                    <div>
                      <p className="text-gray-600 mb-1">Dari (Penjual):</p>
                      <p className="font-bold text-gray-900">{orderData.seller}</p>
                      <p className="text-gray-600 text-xs">{orderData.sellerLocation}</p>
                    </div>
                    <div className="border-t-2 border-gray-200 pt-3">
                      <p className="text-gray-600 mb-1">Ke (Pembeli):</p>
                      <p className="font-bold text-gray-900">{orderData.buyer}</p>
                      <p className="text-gray-600 text-xs">{orderData.buyerLocation}</p>
                    </div>
                    <div className="border-t-2 border-gray-200 pt-3">
                      <p className="text-gray-600 mb-1">Tanggal Pemesanan:</p>
                      <p className="font-bold text-gray-900">{orderData.orderDate}</p>
                    </div>
                    <div className="border-t-2 border-gray-200 pt-3 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Harga Limbah:</span>
                        <span className="text-gray-900">{orderData.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Biaya Platform (2%):</span>
                        <span className="text-yellow-600 font-bold">{orderData.platformFee}</span>
                      </div>
                      <div className="flex justify-between text-sm pt-2 border-t border-gray-300">
                        <span className="text-gray-900 font-bold">Total Dibayar:</span>
                        <span className="text-emerald-600 font-bold">{orderData.totalPaid}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MARGIN INFO FOR ARTAX */}
                <div className="bg-purple-50 border-4 border-purple-300 p-4">
                  <h3 className="font-bold text-sm font-mono uppercase text-purple-800 mb-3">💰 Revenue ArtaX</h3>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Biaya Platform (2%):</span>
                      <span className="text-purple-600 font-bold">{orderData.platformFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Margin Logistik (8%):</span>
                      <span className="text-purple-600 font-bold">Rp 400.000</span>
                    </div>
                    <div className="border-t-2 border-purple-400 pt-2 flex justify-between">
                      <span className="text-gray-900 font-bold">Total Revenue:</span>
                      <span className="text-purple-700 font-bold text-sm">Rp 2.860.000</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-3 leading-relaxed">
                    * Dari transaksi ini, ArtaX mendapat revenue dari biaya platform 2% + margin logistik 8%
                  </p>
                </div>

              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
