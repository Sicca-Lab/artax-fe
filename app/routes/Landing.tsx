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

      <div className="layout-container flex h-full grow flex-col">
        {/* TOP NAV BAR */}
        <header className="flex items-center justify-between px-6 md:px-20 py-6 border-b-4 border-emerald-200 bg-white shadow-sm">
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
        </header>

        <main className="flex-1">
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
    </div>
  );
}
