import type { Route } from "./+types/Marketplace";
import { useState } from 'react';
import { 
  ShoppingBagIcon,
  ChartBarIcon,
  BellIcon,
  WalletIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  XMarkIcon,
  HomeIcon,
  Cog6ToothIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import Ticker from '../components/Ticker';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arta | Pasar & Indeks Perdagangan" },
    { name: "description", content: "Arta Pasar & Indeks Perdagangan Hub" },
  ];
}

export default function Marketplace() {
  const [selectedFilter, setSelectedFilter] = useState('plastic');
  const [showPurchasePanel, setShowPurchasePanel] = useState(false);
  const [showContractModal, setShowContractModal] = useState(false);
  const [selectedListing, setSelectedListing] = useState<any>(null);

  const listings = [
    {
      id: 1,
      title: 'Bal PET (Bersih)',
      location: 'Rungkut, Surabaya',
      volume: '500 Ton',
      price: 'Rp 18.000.000',
      pricePerTon: 'Rp 36.000',
      category: 'PLASTIK',
      seller: 'PT Maju Jaya Tekstil',
      categoryColor: 'blue',
      verified: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASdzGQlh3swCqbWvupvTuWPqipRpNGeaI3d29Ih-QDcwC9WS8nmOKSi_4RlucYcVirnCSBOOWzBj35oxL4Tw37PPERaiEpNbdNuyVgz27E5_tWLSRy_wvUCNI01MoojozuTvKu9HuAMPvRpl4Bjn56aBHsxu4hCdZLza0RRsMBEC_GRaviFSbGAM0Lzl1S89EQMZ3qFpTA28HQuX2QDaTmXx5JkndgZGefXHG8Phuh1BsyXcbbSaVMjEWdz2WPkTDKtTgtGxnDzYg'
    },
    {
      id: 2,
      title: 'Kabel Tembaga Bekas',
      location: 'Gresik Ind.',
      volume: '120 Ton',
      price: 'Rp 72.750.000',
      pricePerTon: 'Rp 606.250',
      category: 'LOGAM',
      seller: 'PT Gresik Steel Industries',
      categoryColor: 'green',
      verified: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3CSxNGvP1enmAUZl0L854bLceQXpD9Eo5XYMGYPFIb-TzIi-xcHia0ENPR5dM0ZXmTcDHh8lXSlyz9VIUYUf1bdp7SW1hMJeQ-pLiBRGvrdncnC7ruT7OAGGO4yXGH1rV-_Jkr7hsabOqK4aucs6Nfg-N72OpNp0R0Zc-iPcpZnZ9tINkIH0jrQP_DXEel1bqkHP9Vn-8ieNuaGT_8fokdTUXPxq16vdzRksAqqRQuFLswf3IMZ4xHp1QfRb6f96TMGMJRncGomE'
    },
    {
      id: 3,
      title: 'Baterai Lithium Ion',
      location: 'Tandes, Sby',
      volume: '50 Ton',
      price: 'Rp 123.000.000',
      pricePerTon: 'Rp 2.460.000',
      category: 'BERBAHAYA',
      seller: 'PT Elektronik Nusantara',
      categoryColor: 'red',
      verified: false,
      hotDeal: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0xZpCUnik1-KC-xsrT-DUSanjLq08QX6cvGSXTlaZZFC5IkVkyzCqjFigDs0fKcc6Fcw0SHbHU8g86uKCiHGfkNz7F_nZciNDqfmOkUM_eGV8I5GKHFkJjtfpOAa0xrmNxIGFSbrpT5Wqo7L9YQiLdWiHKVaEEs2lpK0hm8WTZlR7FNO2JdPv_4094KomS703mGkkPs2fkLYzzljA08VH9qzUyPHy6UPemQCmXtPUvlNAuik78vEbjReeTKPZbYv5UX34dTa6txc'
    },
    {
      id: 4,
      title: 'Kompos Industri',
      location: 'Margomulyo',
      volume: '200 Ton',
      price: 'Rp 4.800.000',
      pricePerTon: 'Rp 24.000',
      category: 'KOMPOS',
      seller: 'PT Agro Organik Surabaya',
      categoryColor: 'yellow',
      verified: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCim1DyPUYXZx8A3wzxeQgli3RXDIn0T0I9_MzLo2WeNsemog7g_kogfsft8RxdfBcGEiUJAdk5ZAmIwXFRVYJOQixVJnIaOEYRodpqlGz6SWIU6K0Jcry5Rng25vuUVzVS_FxzAKSrOiBljOWD61iBa-6_2LarKdQiNzQc2dWXI8_P5zBphNkm0zXq9GOqEJsOEEaGjj-sEdB5MvfUAIbTuT4jrc0SiaPnCmWg1O3_54ew9aKEvZdhB5H-OkgGkvm8HA2_pLr7Lb4'
    }
  ];

  return (
    <div className="bg-white text-gray-900 font-display min-h-screen flex flex-col overflow-x-hidden">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
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

      <div className="flex flex-1 relative mt-28">
        <Sidebar
          items={[
            { id: 'dashboard', label: 'Dasbor', icon: <HomeIcon className="w-5 h-5" />, href: '/dashboard', isActive: false },
            { id: 'marketplace', label: 'Pasar', icon: <ShoppingBagIcon className="w-5 h-5" />, href: '/marketplace', isActive: true },
            { id: 'logistics', label: 'Logistik', icon: <TruckIcon className="w-5 h-5" />, href: '/estimation', isActive: false },
            { id: 'report', label: 'Laporan', icon: <ChartBarIcon className="w-5 h-5" />, href: '/report', isActive: false },
            { id: 'settings', label: 'Pengaturan', icon: <Cog6ToothIcon className="w-5 h-5" />, href: '#', isActive: false },
          ]}
          userInfo={{ initials: 'OP', name: 'Operator 7', unit: 'Pasar Surabaya' }}
        />

        <main className="flex-1 flex overflow-hidden ml-64">
          <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 relative">
            <div className="max-w-6xl mx-auto flex flex-col gap-8 relative z-10">
              <section className="w-full bg-white border-2 border-gray-300 shadow-lg relative group overflow-hidden">
                <div className="p-4 border-b-2 border-gray-300 bg-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <ChartBarIcon className="w-5 h-5 text-yellow-600 animate-pulse" />
                      <h3 className="text-yellow-600 text-xl font-bold tracking-widest font-mono uppercase">INDEKS ARTA: Tren 30 Hari</h3>
                    </div>
                    <p className="text-xs text-gray-600 font-mono">Indeks valuasi limbah real-time di pasar Surabaya.</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 border-2 border-emerald-500 bg-emerald-100 text-emerald-600 font-mono text-sm font-bold flex items-center gap-2">
                      <span className="size-2 bg-emerald-500"></span> LOGAM
                    </div>
                    <div className="px-3 py-1 border-2 border-blue-500 bg-blue-100 text-blue-600 font-mono text-sm font-bold flex items-center gap-2">
                      <span className="size-2 bg-blue-500"></span> PLASTIK
                    </div>
                    <div className="px-3 py-1 border-2 border-yellow-500 bg-yellow-100 text-yellow-600 font-mono text-sm font-bold flex items-center gap-2">
                      <span className="size-2 bg-yellow-500"></span> KARDUS
                    </div>
                  </div>
                </div>
                <div className="h-64 w-full p-4 relative bg-white">
                  <div className="absolute inset-4 border-l-2 border-b-2 border-gray-400 z-0">
                    <div className="h-full w-full flex flex-col justify-between">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-full border-t-2 border-gray-200 border-dashed h-0"></div>
                      ))}
                    </div>
                  </div>
                  <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] z-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polyline fill="none" points="0,60 10,55 20,58 30,45 40,50 50,35 60,38 70,25 80,30 90,15 100,20" stroke="#10b981" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" vectorEffect="non-scaling-stroke"></polyline>
                    <polyline fill="none" points="0,80 10,75 20,78 30,70 40,65 50,72 60,60 70,65 80,50 90,55 100,45" stroke="#3b82f6" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" vectorEffect="non-scaling-stroke"></polyline>
                    <polyline fill="none" points="0,90 10,88 20,85 30,82 40,86 50,80 60,82 70,78 80,75 90,72 100,70" stroke="#eab308" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" vectorEffect="non-scaling-stroke"></polyline>
                  </svg>
                </div>
              </section>

              <div className="flex items-end justify-between border-b-2 border-gray-300 pb-2">
                <div>
                  <h2 className="text-gray-900 text-xl font-bold tracking-tight uppercase font-mono">Daftar Pasar</h2>
                  <span className="text-gray-600 text-sm font-mono">Tawaran Aktif di Wilayah Surabaya</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 text-xs font-mono uppercase hidden sm:inline">Urutkan:</span>
                  <select className="bg-white border-2 border-gray-300 text-gray-900 text-sm font-mono focus:ring-emerald-500 focus:border-emerald-500 py-1 pl-3 pr-8">
                    <option>Harga Terendah</option>
                    <option>Harga Tertinggi</option>
                    <option>Terbaru</option>
                    <option>Jarak</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                {listings.map((listing) => (
                  <div key={listing.id} className={`group bg-white border-2 ${listing.hotDeal ? 'border-emerald-500 ring-2 ring-emerald-200' : 'border-gray-300'} shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer relative`}>
                    {listing.verified && (
                      <div className="absolute top-2 right-2 z-10 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 border-2 border-emerald-600 font-mono uppercase tracking-wider">
                        Terverifikasi
                      </div>
                    )}
                    {listing.hotDeal && (
                      <div className="absolute top-2 right-2 z-10 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 border-2 border-yellow-600 font-mono uppercase tracking-wider animate-pulse">
                        Penawaran Panas
                      </div>
                    )}
                    <div className="h-40 bg-gray-100 border-b-2 border-gray-300 flex items-center justify-center relative overflow-hidden p-4">
                      <div className="size-20 bg-center bg-no-repeat drop-shadow-md group-hover:scale-110 transition-transform duration-300" style={{backgroundImage: `url("${listing.image}")`, backgroundSize: 'contain'}}></div>
                      <div className="absolute bottom-2 left-2 flex gap-1">
                        <div className={`bg-${listing.categoryColor}-100 border-2 border-${listing.categoryColor}-500 px-1.5 py-0.5`}>
                          <span className={`text-${listing.categoryColor}-600 text-xs font-mono`}>{listing.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      <div>
                        <h3 className="text-gray-900 font-bold text-lg leading-tight font-mono group-hover:text-emerald-500 transition-colors">
                          {listing.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPinIcon className="w-4 h-4 text-gray-500" />
                          <p className="text-gray-600 text-xs font-mono">{listing.location}</p>
                        </div>
                        <div className="mt-2 pt-2 border-t border-gray-200">
                          <p className="text-[10px] text-gray-500 font-mono uppercase mb-0.5">Penjual</p>
                          <p className="text-gray-900 font-bold text-xs font-mono">{listing.seller}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 bg-gray-100 p-2 border-2 border-gray-300">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-500 uppercase font-mono">Volume</span>
                          <span className="text-gray-900 text-sm font-mono">{listing.volume}</span>
                        </div>
                        <div className="flex flex-col text-right">
                          <span className="text-[10px] text-gray-500 uppercase font-mono">Harga Total</span>
                          <span className="text-emerald-600 text-lg font-mono font-bold">{listing.price}</span>
                        </div>
                      </div>
                      <button onClick={() => { setSelectedListing(listing); setShowPurchasePanel(true); }} className={`w-full ${listing.hotDeal ? 'bg-emerald-500 hover:bg-emerald-600 border-emerald-600 font-bold' : 'bg-gray-200 hover:bg-emerald-500 border-gray-400 hover:border-emerald-600'} text-white font-mono uppercase text-sm py-2 border-2 transition-colors shadow-sm`}>
                        {listing.hotDeal ? 'Beli Sekarang' : 'Lihat Detail'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {showPurchasePanel && selectedListing && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white border-4 border-emerald-500 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="bg-emerald-500 p-6 border-b-4 border-emerald-600 relative">
                  <button onClick={() => { setShowPurchasePanel(false); setSelectedListing(null); }} className="absolute top-4 right-4 text-white hover:text-emerald-100 transition-colors">
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                  <h2 className="text-white text-3xl font-black font-mono uppercase">DETAIL PRODUK LIMBAH</h2>
                  <p className="text-emerald-100 text-sm font-mono mt-1">ArtaX Platform - Marketplace</p>
                </div>
                
                <div className="p-8 space-y-6">
                  {/* PRODUCT INFO */}
                  <div className="bg-gray-50 border-2 border-gray-300 p-6">
                    <h3 className="font-bold text-lg font-mono uppercase mb-4 border-b-2 border-gray-300 pb-2">INFORMASI PRODUK</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 flex items-center gap-4 mb-4">
                        <div className="w-24 h-24 bg-gray-200 border-2 border-gray-400 flex items-center justify-center flex-shrink-0">
                          <div className="w-20 h-20 bg-center bg-no-repeat" style={{backgroundImage: `url("${selectedListing.image}")`, backgroundSize: 'contain'}}></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-black text-gray-900 font-mono mb-1">{selectedListing.title}</h4>
                          <div className="flex items-center gap-2">
                            <span className={`bg-${selectedListing.categoryColor}-100 border-2 border-${selectedListing.categoryColor}-500 px-2 py-1 text-${selectedListing.categoryColor}-600 text-xs font-mono font-bold`}>
                              {selectedListing.category}
                            </span>
                            {selectedListing.verified && (
                              <span className="bg-emerald-100 text-emerald-600 text-xs font-mono font-bold px-2 py-1 border-2 border-emerald-500">✓ TERVERIFIKASI</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Produk:</span>
                          <span className="text-gray-900 font-bold text-right">{selectedListing.title}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Volume:</span>
                          <span className="text-gray-900 font-bold text-right">{selectedListing.volume}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lokasi Pickup:</span>
                          <span className="text-gray-900 font-bold text-right">{selectedListing.location}</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Penjual:</span>
                          <span className="text-gray-900 font-bold text-right">{selectedListing.seller}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Pembeli:</span>
                          <span className="text-gray-900 font-bold text-right">PT Recycling Indonesia</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Kondisi:</span>
                          <span className="text-emerald-600 font-bold text-right">Siap Kirim</span>
                        </div>
                      </div>
                    </div>
                  </div>

                <div className="bg-emerald-50 border-2 border-emerald-300 p-4">
                  <p className="text-xs text-gray-600 font-mono uppercase mb-1">Harga Jual</p>
                  <p className="text-3xl font-bold text-emerald-600 font-mono">{selectedListing.price}</p>
                  <p className="text-sm text-gray-600 font-mono mt-1">{selectedListing.pricePerTon} / ton</p>
                </div>
                
                <div className="bg-white border-2 border-gray-300 p-4 space-y-3">
                  <h3 className="text-sm font-bold text-gray-900 font-mono uppercase">Detail Produk</h3>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Volume:</span>
                      <span className="text-gray-900 font-bold">{selectedListing.volume}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kategori:</span>
                      <span className="text-gray-900 font-bold">{selectedListing.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lokasi Pickup:</span>
                      <span className="text-gray-900 font-bold">{selectedListing.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kondisi:</span>
                      <span className="text-emerald-600 font-bold">Siap Kirim</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-300 p-4">
                  <h3 className="text-sm font-bold text-yellow-800 font-mono uppercase mb-2">⚠️ Biaya Transaksi</h3>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Harga Limbah:</span>
                      <span className="text-gray-900">{selectedListing.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Biaya Platform (2%):</span>
                      <span className="text-yellow-600 font-bold">Rp {(parseInt(selectedListing.price.replace(/[^0-9]/g, '')) * 0.02).toLocaleString('id-ID')}</span>
                    </div>
                    <div className="border-t-2 border-yellow-400 pt-2 flex justify-between">
                      <span className="text-gray-900 font-bold">Total Pembayaran:</span>
                      <span className="text-emerald-600 font-bold">Rp {(parseInt(selectedListing.price.replace(/[^0-9]/g, '')) * 1.02).toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-3 leading-relaxed">* Biaya platform 2% digunakan untuk pemeliharaan sistem, verifikasi transaksi, dan dukungan ESG compliance.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <input className="bg-white border-2 border-gray-400 text-emerald-500 focus:ring-0 size-4 mt-0.5" type="checkbox" id="agree-terms" />
                    <label htmlFor="agree-terms" className="text-xs text-gray-600 font-mono leading-relaxed">
                      Saya setuju dengan <span className="text-emerald-600 font-bold">Syarat & Ketentuan</span> termasuk biaya platform 2% dari nilai transaksi
                    </label>
                  </div>
                  <button 
                    onClick={() => { setShowPurchasePanel(false); setShowContractModal(true); }}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold font-mono text-lg py-3 border-b-4 border-r-4 border-emerald-700 active:border-b-0 active:border-r-0 active:translate-y-1 transition-all shadow-lg"
                  >
                    LANJUT KE KONTRAK
                  </button>
                </div>

                <div className="bg-blue-50 border-2 border-blue-300 p-4">
                  <h3 className="text-sm font-bold text-blue-800 font-mono uppercase mb-3">📄 Dokumen yang Diperlukan</h3>
                  <div className="space-y-2 text-xs font-mono text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>NIB (Nomor Induk Berusaha) - Wajib</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Dokumen AMDAL/UKL-UPL - Wajib</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Sertifikat Izin Lingkungan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Manifest Limbah B3 (jika berbahaya)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Surat Pernyataan Kualitas Limbah</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-3 leading-relaxed border-t border-blue-200 pt-2">
                    * Dokumen akan diverifikasi oleh sistem ArtaX sebelum transaksi disetujui. Proses verifikasi memakan waktu 1-2 hari kerja.
                  </p>
                </div>

                <div className="border-t-2 border-gray-300 pt-4">
                  <p className="text-xs text-gray-600 font-mono uppercase mb-3">📋 Proses Selanjutnya</p>
                  <ol className="space-y-2 text-xs font-mono text-gray-600">
                    <li>1. Upload dokumen persyaratan</li>
                    <li>2. Verifikasi dokumen oleh ArtaX</li>
                    <li>3. Tanda tangan kontrak digital</li>
                    <li>4. Transfer pembayaran</li>
                    <li>5. Koordinasi pengiriman</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          )}
        </main>
      </div>

      {/* CONTRACT SIGNING MODAL */}
      {showContractModal && selectedListing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-emerald-500 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="bg-emerald-500 p-4 border-b-4 border-emerald-600">
              <h2 className="text-white text-2xl font-black font-mono uppercase">Kontrak Pembelian Limbah</h2>
              <p className="text-emerald-100 text-xs font-mono mt-1">ArtaX Platform Agreement</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="bg-gray-50 border-2 border-gray-300 p-4">
                <h3 className="font-bold text-sm font-mono uppercase mb-3">Detail Transaksi</h3>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Produk:</span>
                    <span className="text-gray-900 font-bold">{selectedListing.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Volume:</span>
                    <span className="text-gray-900 font-bold">{selectedListing.volume}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Penjual:</span>
                    <span className="text-gray-900 font-bold">{selectedListing.seller}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pembeli:</span>
                    <span className="text-gray-900 font-bold">PT Recycling Indonesia</span>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-2 mt-2"></div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Harga Limbah:</span>
                    <span className="text-gray-900">{selectedListing.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Biaya Platform (2%):</span>
                    <span className="text-yellow-600 font-bold">Rp {(parseInt(selectedListing.price.replace(/[^0-9]/g, '')) * 0.02).toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-900 font-bold">Total:</span>
                    <span className="text-emerald-600 font-bold">Rp {(parseInt(selectedListing.price.replace(/[^0-9]/g, '')) * 1.02).toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4">
                <h3 className="font-bold text-sm font-mono uppercase mb-3 text-yellow-800">📜 Syarat & Ketentuan</h3>
                <div className="text-xs font-mono space-y-2 text-gray-700 max-h-40 overflow-y-auto">
                  <p><strong>1. Biaya Platform:</strong> Pembeli setuju membayar biaya platform sebesar 2% dari nilai transaksi kepada ArtaX sebagai biaya administrasi, verifikasi, dan layanan platform.</p>
                  <p><strong>2. Pembayaran:</strong> Total pembayaran harus dilakukan dalam 3 hari kerja setelah penandatanganan kontrak ini.</p>
                  <p><strong>3. Pengiriman:</strong> Penjual bertanggung jawab mengatur pengiriman atau pembeli dapat menggunakan layanan Arta-Truck dengan biaya terpisah.</p>
                  <p><strong>4. Verifikasi:</strong> ArtaX akan memverifikasi kualitas dan kuantitas limbah sesuai deskripsi sebelum transfer dana ke penjual.</p>
                  <p><strong>5. Compliance ESG:</strong> Kedua belah pihak setuju bahwa transaksi ini akan dicatat dalam sistem ESG compliance ArtaX untuk pelaporan audit.</p>
                  <p><strong>6. Pembatalan:</strong> Pembatalan sepihak akan dikenakan denda 5% dari nilai transaksi.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <input className="bg-white border-2 border-gray-400 text-emerald-500 focus:ring-0 size-4 mt-0.5" type="checkbox" id="agree-contract" />
                  <label htmlFor="agree-contract" className="text-xs text-gray-600 font-mono leading-relaxed">
                    Saya telah membaca dan menyetujui seluruh syarat dan ketentuan di atas, termasuk <strong>biaya platform 2%</strong> yang akan dibayarkan kepada ArtaX.
                  </label>
                </div>

                <div className="bg-gray-50 border-2 border-gray-300 p-4">
                  <label className="block text-xs text-gray-600 font-mono uppercase mb-2">Tanda Tangan Digital</label>
                  <input 
                    type="text" 
                    placeholder="Ketik nama lengkap Anda sebagai tanda tangan"
                    className="w-full bg-white border-2 border-gray-400 text-gray-900 font-mono px-3 py-2 focus:border-emerald-500 focus:ring-0"
                  />
                  <p className="text-[10px] text-gray-500 font-mono mt-2">Dengan mengetik nama Anda, Anda setuju bahwa ini merupakan tanda tangan digital yang sah.</p>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => { setShowContractModal(false); setSelectedListing(null); }}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold font-mono text-sm py-3 border-2 border-gray-400 transition-all"
                  >
                    BATAL
                  </button>
                  <a 
                    href="/tracking"
                    onClick={() => { 
                      alert('✅ Kontrak berhasil ditandatangani!\n\nPembayaran dikonfirmasi. Truk sedang dijadwalkan untuk pickup.\n\nAnda akan diarahkan ke halaman tracking untuk memantau pengiriman secara real-time.');
                    }}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold font-mono text-sm py-3 border-b-4 border-r-4 border-emerald-700 active:border-b-0 active:border-r-0 active:translate-y-1 transition-all shadow-lg text-center"
                  >
                    TANDA TANGAN & KIRIM
                  </a>
                </div>
              </div>

              <div className="bg-emerald-50 border-2 border-emerald-300 p-4">
                <p className="text-xs text-gray-600 font-mono leading-relaxed">
                  <strong className="text-emerald-700">✓ Keamanan Terjamin:</strong> Kontrak ini disimpan secara terenkripsi dan dapat diakses kapan saja melalui dashboard Anda. Biaya platform 2% memastikan transaksi Anda terverifikasi dan tercatat dalam sistem compliance ESG.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
