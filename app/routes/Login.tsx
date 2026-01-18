import type { Route } from "./+types/Login";
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Logo from '../components/Logo';
import Ticker from '../components/Ticker';
import { Link } from 'react-router-dom';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Arta | Login" },
    { name: "description", content: "Login ke Arta Platform" },
  ];
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 font-display flex flex-col">
      <Ticker />

      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-white border-b-4 border-emerald-200 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-gray-500 font-mono">STATUS</p>
                <p className="text-sm font-bold text-emerald-600">BELUM LOGIN</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow relative bg-gray-50">
        <div className="absolute inset-0 scanlines bg-scanlines opacity-20 pointer-events-none z-10 h-full w-full fixed"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full">
            {/* LOGIN CARD */}
            <div className="bg-white border-2 border-gray-300 shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-tight">Masuk</h2>
                <p className="text-gray-600 text-sm">Akses platform manajemen limbah Arta Anda</p>
              </div>

              {/* FORM */}
              <form className="space-y-6">
                {/* EMAIL INPUT */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-emerald-500 focus:ring-0 font-mono text-sm transition-colors"
                  />
                </div>

                {/* PASSWORD INPUT */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">Kata Sandi</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-emerald-500 focus:ring-0 font-mono text-sm transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* REMEMBER ME & FORGOT PASSWORD */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-2 border-gray-300 bg-white cursor-pointer" />
                    <span className="text-gray-600 font-mono">Ingat saya</span>
                  </label>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 font-mono font-bold transition-colors">
                    Lupa kata sandi?
                  </a>
                </div>

                {/* LOGIN BUTTON */}
                <Link to="/dashboard" className="block w-full">
                  <button
                    type="button"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 border-2 border-emerald-600 shadow-lg transition-all transform hover:-translate-y-1 uppercase tracking-wide font-mono text-sm"
                  >
                    Masuk Sekarang
                  </button>
                </Link>
              </form>

              {/* DIVIDER */}
              <div className="my-6 flex items-center gap-4">
                <div className="flex-1 border-t-2 border-gray-300"></div>
                <span className="text-gray-600 text-xs font-mono uppercase">atau</span>
                <div className="flex-1 border-t-2 border-gray-300"></div>
              </div>

              {/* SOCIAL LOGIN */}
              <div className="space-y-3">
                <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-3 px-4 border-2 border-gray-300 shadow-sm transition-all flex items-center justify-center gap-2 uppercase tracking-wide font-mono text-sm">
                  🔐 Masuk dengan Google
                </button>
              </div>

              {/* SIGNUP LINK */}
              <div className="mt-8 pt-6 border-t-2 border-gray-300 text-center">
                <p className="text-gray-600 text-sm">
                  Belum punya akun?{' '}
                  <a href="/register" className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors">
                    Daftar di sini
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 border border-gray-400 rounded-sm text-[10px] text-gray-700 font-mono">
                <LockClosedIcon className="w-3 h-3" />
                ENCRYPTED CONNECTION (SSL) • ISO 27001 SECURE
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
