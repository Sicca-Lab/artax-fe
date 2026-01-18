import type { Route } from "./+types/Landing";
import {
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  MapIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  CommandLineIcon,
  ChartBarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Ticker from '../components/Ticker';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Arta | Pertukaran Limbah Industri Menjadi Nilai" },
    { name: "description", content: "Pertukaran limbah industri terkemuka di Surabaya. Mendukung logistik sirkular untuk zona manufaktur Gresik dan SIER." },
  ];
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-display">
      <Ticker />

      {/* NAV */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-white border-b-4 border-emerald-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
              <nav className="flex items-center gap-8 uppercase text-xs font-bold tracking-widest">
                <a className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary" href="#">Pasar</a>
                <a className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary" href="#">Alat ESG</a>
                <a className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary" href="#">Zona Surabaya</a>
                <a className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary" href="#">Terminal</a>
              </nav>
              <div className="flex gap-4">
                <a href="/login" className="bg-gray-100 text-gray-900 px-6 py-2 font-bold uppercase text-sm border-b-4 border-r-4 border-gray-300 active:border-0 active:translate-y-1 hover:bg-gray-200 transition-colors">
                  Masuk
                </a>
                <button className="bg-emerald-500 text-white px-6 py-2 font-bold uppercase text-sm border-b-4 border-r-4 border-emerald-700 active:border-0 active:translate-y-1 hover:bg-emerald-600 transition-colors">
                  Hubungi
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-28">
          {/* HERO SECTION */}
          <section className="px-6 md:px-20 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                <div className="inline-block bg-emerald-100 border-l-4 border-emerald-500 px-4 py-1">
                  <span className="text-emerald-700 font-display font-bold text-xs uppercase tracking-[0.2em]">
                    Protokol Industri Jawa Timur
                  </span>
                </div>
                <h1 className="text-gray-900 text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase font-display">
                  DAGANG LIMBAH.<br />
                  <span className="text-emerald-500 italic">BANGUN NILAI.</span>
                </h1>
                <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-lg border-l-2 border-emerald-200 pl-6">
                  Pertukaran limbah industri terkemuka di Surabaya. Mendukung logistik sirkular untuk zona manufaktur{" "}
                  <span className="text-gray-900 underline decoration-emerald-500 underline-offset-4">Gresik</span> dan{" "}
                  <span className="text-gray-900 underline decoration-emerald-500 underline-offset-4">SIER</span>.
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <a href="/register" className="bg-emerald-500 text-white text-xl font-black uppercase px-8 py-5 hard-shadow hard-shadow-hover transition-all flex items-center gap-3 hover:bg-emerald-600 shadow-lg">
                    <BuildingOfficeIcon className="w-6 h-6" />
                    Daftarkan Pabrik Anda
                  </a>
                  <button className="border-4 border-emerald-500 text-emerald-600 text-xl font-black uppercase px-8 py-5 hover:bg-emerald-50 transition-all font-bold">
                    Lihat Pasar
                  </button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="scanline"></div>
                <div className="border-8 border-primary/30 p-2">
                  <div
                    className="w-full aspect-video bg-cover bg-center border-4 border-white"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBu4DQXqNJJ67VTAtM1SQWv9EeZSX3hJ-kcfi6ePw5XK7xfoGnaefufKfFuzcwFipZjkNtjL2aYnNNq5i9z-EtH4hJEV-KGQYly6KyF-8h0-HPyrnho05oZ0q6c6C8cdzoMCS0HJlbkLuRoD4b7DCevUSZugOOlPlRGxoabuc_j_LU8NQZDHu7OCiXhb-BhrmM7Rx2UZiWTebHs8as1hE2HOXzBRClgl2yYdm7dXA35W9ONmFvC04u9GAtqcVGmAj7Y0bziX3SvzpVC")'
                    }}
                  >
                    <div className="w-full h-full bg-black/40 flex flex-col justify-end p-6">
                      <div className="bg-black/80 p-4 border-t-2 border-primary">
                        <div className="flex justify-between items-center text-[10px] font-mono uppercase text-primary mb-2">
                          <span>Zona: SIER_SURABAYA</span>
                          <span className="animate-pulse">● SIARAN_LANGSUNG</span>
                        </div>
                        <div className="h-1 bg-white/20 w-full mb-1">
                          <div className="h-full bg-primary w-[65%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Stat Box */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 border-4 border-black text-black font-bold uppercase text-xs z-20">
                  <div className="flex items-center gap-2">
                    Total Offset Karbon: 12.4K Ton
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS BLOCK */}
          <section className="bg-emerald-500 px-6 md:px-20 py-12 flex flex-wrap gap-8 justify-between items-center border-y-4 border-emerald-700">
            <div className="flex flex-col">
              <span className="text-white font-black text-4xl leading-none">45.2K</span>
              <span className="text-emerald-100 font-display font-bold uppercase text-xs">Ton Limbah Diperdagangkan</span>
            </div>
            <div className="w-px h-12 bg-emerald-400 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-white font-black text-4xl leading-none">120+</span>
              <span className="text-emerald-100 font-display font-bold uppercase text-xs">Pabrik Aktif</span>
            </div>
            <div className="w-px h-12 bg-emerald-400 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-white font-black text-4xl leading-none">$12.5M</span>
              <span className="text-emerald-100 font-display font-bold uppercase text-xs">Nilai Dihasilkan</span>
            </div>
            <div className="w-px h-12 bg-emerald-400 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-white font-black text-4xl leading-none">98.2%</span>
              <span className="text-emerald-100 font-display font-bold uppercase text-xs">Tingkat Kelulusan Audit ESG</span>
            </div>
          </section>

          {/* FEATURE SECTION */}
          <section className="px-6 md:px-20 py-24 bg-gray-50">
            <div className="flex flex-col gap-12">
              <div className="max-w-2xl">
                <h2 className="text-gray-900 text-5xl font-black uppercase font-display leading-none mb-4">
                  KEUNGGULAN <span className="text-cyan-500 italic">ARTA</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Presisi industri bertemu keberlanjutan lingkungan. Kami menjembatani kesenjangan antara pembuatan limbah dan permintaan komoditas.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-gray-200">
                {/* Card 1 */}
                <div className="p-10 border-r-4 border-gray-200 hover:bg-emerald-50 group transition-all">
                  <div className="size-16 bg-emerald-100 flex items-center justify-center mb-8 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-all">
                    <CurrencyDollarIcon className="w-8 h-8 text-emerald-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-gray-900 text-2xl font-black uppercase mb-4">Limbah Menjadi Nilai</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Ubah produk sampingan produksi Anda menjadi aliran pendapatan terverifikasi dengan harga komoditas transparan real-time.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-tighter cursor-pointer hover:gap-3 transition-all">
                    PELAJARI LEBIH LANJUT <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
                {/* Card 2 */}
                <div className="p-10 border-r-4 border-gray-200 hover:bg-emerald-50 group transition-all">
                  <div className="size-16 bg-emerald-100 flex items-center justify-center mb-8 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-all">
                    <ShieldCheckIcon className="w-8 h-8 text-emerald-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-gray-900 text-2xl font-black uppercase mb-4">Kepatuhan ESG</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Pelacakan otomatis untuk standar lingkungan industri. Laporan siap audit instan untuk pemangku kepentingan Anda.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-tighter cursor-pointer hover:gap-3 transition-all">
                    DOKUMEN KEPATUHAN <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
                {/* Card 3 */}
                <div className="p-10 hover:bg-emerald-50 group transition-all">
                  <div className="size-16 bg-emerald-100 flex items-center justify-center mb-8 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-all">
                    <MapIcon className="w-8 h-8 text-emerald-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-gray-900 text-2xl font-black uppercase mb-4">Hub Regional</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Konektivitas logistik langsung antara Gresik, SIER, dan Ngoro. Transport dioptimalkan untuk limbah skala industri.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-tighter cursor-pointer hover:gap-3 transition-all">
                    PETA HUB <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PRICING SECTION */}
          <section className="px-6 md:px-20 py-24 bg-white">
            <div className="flex flex-col gap-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-gray-900 text-5xl font-black uppercase font-display leading-none mb-4">
                  PAKET <span className="text-emerald-500 italic">LAYANAN</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Dari pengurusan NIB hingga AMDAL lengkap.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* BASIC PACKAGE */}
                <div className="border-4 border-gray-300 bg-white p-8 hover:border-gray-400 transition-all group">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black uppercase text-gray-900 mb-2">PAKET BASIC</h3>
                    <p className="text-gray-600 text-sm mb-4">Untuk usaha kecil dengan dampak lingkungan minimal</p>
                    <div className="mb-4">
                      <div className="text-4xl font-black text-gray-900 mb-1">Rp 15JT</div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 font-mono uppercase">
                        <ClockIcon className="w-4 h-4" />
                        25-35 Hari
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Konsultasi awal dengan tim legal</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Persiapan & pengajuan NIB</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Dukungan hingga NIB diterbitkan</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Chat support 24/7</span>
                    </div>
                  </div>

                  <button className="w-full bg-gray-500 text-white font-black uppercase text-sm px-6 py-4 border-b-4 border-r-4 border-gray-700 active:border-0 active:translate-y-1 hover:bg-gray-600 transition-all">
                    PILIH PAKET
                  </button>
                </div>

                {/* STANDARD PACKAGE - RECOMMENDED */}
                <div className="border-4 border-emerald-500 bg-emerald-50 p-8 transform md:scale-105 relative shadow-xl">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 text-xs font-black uppercase border-2 border-yellow-600 shadow-lg">
                    REKOMENDASI
                  </div>

                  <div className="mb-6 mt-2">
                    <h3 className="text-2xl font-black uppercase text-emerald-600 mb-2">PAKET STANDARD</h3>
                    <p className="text-gray-700 text-sm mb-4">Paket lengkap untuk industri limbah & daur ulang</p>
                    <div className="mb-4">
                      <div className="text-4xl font-black text-gray-900 mb-1">Rp 45JT</div>
                      <div className="flex items-center gap-2 text-xs text-gray-700 font-mono uppercase">
                        <ClockIcon className="w-4 h-4" />
                        50-70 Hari
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900 font-medium">Semua layanan Paket Basic</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900 font-medium">Penyusunan AMDAL lengkap</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900 font-medium">Penyusunan RKL & RPL</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900 font-medium">Pendampingan hingga keputusan kelayakan</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900 font-medium">Revisi dokumen (hingga 3x)</span>
                    </div>
                  </div>

                  <button className="w-full bg-emerald-500 text-white font-black uppercase text-sm px-6 py-4 border-b-4 border-r-4 border-emerald-700 active:border-0 active:translate-y-1 hover:bg-emerald-600 transition-all">
                    PILIH PAKET
                  </button>
                </div>

                {/* PREMIUM PACKAGE */}
                <div className="border-4 border-cyan-500 bg-white p-8 hover:border-cyan-600 transition-all group">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black uppercase text-cyan-600 mb-2">PAKET PREMIUM</h3>
                    <p className="text-gray-600 text-sm mb-4">Paket premium dengan layanan lengkap & prioritas tinggi</p>
                    <div className="mb-4">
                      <div className="text-4xl font-black text-gray-900 mb-1">Rp 75JT</div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 font-mono uppercase">
                        <ClockIcon className="w-4 h-4" />
                        40-60 Hari
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Semua layanan Paket Standard</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Prioritas penanganan (fast-track)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Konsultasi dengan expert senior</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Revisi dokumen unlimited</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Asuransi dokumen & priority support</span>
                    </div>
                  </div>

                  <button className="w-full bg-cyan-500 text-white font-black uppercase text-sm px-6 py-4 border-b-4 border-r-4 border-cyan-700 active:border-0 active:translate-y-1 hover:bg-cyan-600 transition-all">
                    PILIH PAKET
                  </button>
                </div>
              </div>

              <div className="text-center pt-8">
                <a href="/document-register-pricing" className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase text-sm tracking-wider hover:gap-3 transition-all">
                  LIHAT DETAIL LENGKAP <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          {/* CALL TO ACTION TERMINAL */}
          <section className="px-6 md:px-20 py-20 bg-white">
            <div className="bg-gray-900 border-4 border-emerald-500 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CommandLineIcon className="w-40 h-40 text-emerald-500" />
              </div>
              <div className="z-10 flex flex-col gap-6">
                <h2 className="text-white text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
                  SIAP <br />MENGOPTIMALKAN?
                </h2>
                <p className="text-emerald-300 text-lg max-w-md uppercase font-bold italic">
                  Bergabung dengan 120+ pabrik Surabaya yang sudah memperdagangkan limbah untuk nilai.
                </p>
              </div>
              <div className="z-10 flex flex-col gap-4 w-full md:w-auto">
                <Link to="/register">
                  <button type="button" className="bg-emerald-500 text-white text-2xl font-black uppercase px-12 py-6 border-b-8 border-r-8 border-emerald-700 active:border-0 active:translate-y-2 transition-all hover:bg-emerald-600">
                    MULAI ONBOARDING
                  </button>
                </Link>
              </div>
            </div>
          </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 border-t-8 border-emerald-500 px-6 md:px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="/logo-arta.png"
                  alt="ARTA Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 text-xs font-bold leading-relaxed uppercase">
                Protokol Manajemen Limbah Industri <br />
                Surabaya, Jawa Timur, Indonesia <br />
                Est. 2026
              </p>
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-6">Direktori</h4>
              <ul className="text-gray-300 text-xs font-bold uppercase flex flex-col gap-3">
                <li><a className="hover:text-emerald-400 transition-colors" href="#">Data Pasar</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#">Zona Gresik</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#">Terminal SIER</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#">Kebijakan Harga</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-6">Hukum</h4>
              <ul className="text-gray-300 text-xs font-bold uppercase flex flex-col gap-3">
                <li><a className="hover:text-emerald-400 transition-colors" href="#">Standar ESG</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#">Syarat Perdagangan</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#">Keamanan Data</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#">Regulasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-6">Buletin</h4>
              <div className="flex">
                <input
                  className="bg-gray-800 border-2 border-gray-700 px-3 py-2 text-xs font-mono focus:border-emerald-500 outline-none text-white w-full"
                  type="text"
                  placeholder="Email Anda"
                />
                <button className="bg-emerald-500 text-white px-4 font-black uppercase text-xs border-y-2 border-r-2 border-emerald-700 hover:bg-emerald-600 transition-colors">
                  KIRIM
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-gray-500 font-mono">© ARTAX 2026. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 text-gray-500 hover:text-emerald-400 transition-colors">
              <GlobeAltIcon className="w-5 h-5 cursor-pointer hover:text-emerald-400" />
              <CommandLineIcon className="w-5 h-5 cursor-pointer hover:text-emerald-400" />
              <ChartBarIcon className="w-5 h-5 cursor-pointer hover:text-emerald-400" />
            </div>
          </div>
      </footer>
    </div>
  );
}
