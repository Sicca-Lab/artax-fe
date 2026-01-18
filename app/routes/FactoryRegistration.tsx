import type { Route } from "./+types/FactoryRegistration";
import {
  BuildingOfficeIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  SparklesIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Ticker from '../components/Ticker';
import Logo from '../components/Logo';
import ChatBot from '../components/ChatBot';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Arta | Factory Registration Step 2" },
    { name: "description", content: "Complete your factory registration on Arta." },
  ];
}

export default function FactoryRegistration() {
  const [selectedWaste, setSelectedWaste] = useState(['plastic']);
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  const wasteCategories = [
    { id: 'metal', label: 'Scrap Metal', icon: '⚙️', desc: 'Besi, Tembaga, Aluminium' },
    { id: 'plastic', label: 'Plastic', icon: '♻️', desc: 'HDPE, PET, LDPE' },
    { id: 'paper', label: 'Paper / OCC', icon: '📰', desc: 'Kardus, Kertas Arsip' },
  ];

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
                <p className="text-xs text-gray-500 font-mono">STEP</p>
                <p className="text-sm font-bold text-emerald-600">2 OF 2</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-28 min-h-screen relative bg-gray-50">
        <div className="absolute inset-0 scanlines bg-scanlines opacity-20 pointer-events-none z-10 h-full w-full fixed"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
          <div className="mb-10">
            <div className="flex justify-between items-end mb-2">
              <div>
                <h1 className="text-3xl font-bold uppercase tracking-tight mb-1 text-gray-900">Factory Registration</h1>
                <p className="text-gray-600 font-mono text-sm">Initialize factory profile for trading.</p>
              </div>
              <div className="text-right">
                <span className="text-emerald-600 font-mono font-bold text-lg">STEP 2/2</span>
              </div>
            </div>
            <div className="h-6 w-full bg-gray-200 border-2 border-gray-300 p-1 shadow-pixel-sm relative">
              <div className="h-full w-full bg-emerald-500 relative overflow-hidden">
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
              {/* LEFT COLUMN - INVENTORY CONFIG */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b border-gray-300 pb-3 mb-6">
                  <BuildingOfficeIcon className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900">Inventory Config</h2>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono text-gray-600 uppercase tracking-widest">
                    Kategori Limbah <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {wasteCategories.map((category) => (
                      <label key={category.id} className="cursor-pointer group flex items-center gap-3 p-3 border-2 border-gray-300 hover:border-emerald-500 hover:bg-emerald-50 transition-all">
                        <input
                          className="sr-only"
                          type="checkbox"
                          name="waste_category"
                          value={category.id}
                          checked={selectedWaste.includes(category.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedWaste([...selectedWaste, category.id]);
                            } else {
                              setSelectedWaste(selectedWaste.filter(w => w !== category.id));
                            }
                          }}
                        />
                        <div className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selectedWaste.includes(category.id)
                          ? 'border-emerald-500 bg-emerald-500'
                          : 'border-gray-400 bg-white'
                        }`}>
                          {selectedWaste.includes(category.id) && (
                            <div className="w-2 h-2 bg-white"></div>
                          )}
                        </div>
                        <div className="flex-grow">
                          <span className="text-sm font-bold text-gray-900">{category.label}</span>
                          <span className="text-xs text-gray-600 font-mono block">{category.desc}</span>
                        </div>
                        <span className="text-2xl">{category.icon}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono text-gray-600 uppercase tracking-widest">
                    Estimasi Volume Produksi <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      className="form-input-retro w-full text-sm py-3 px-4 bg-white border-2 border-gray-300 text-gray-900 focus:border-emerald-500 outline-none"
                      id="volume"
                      name="volume"
                      placeholder="0"
                      type="number"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-gray-700 font-mono text-xs bg-gray-100 px-2 py-1 border border-gray-300">TONS/MONTH</span>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-gray-600 font-mono">* Can be adjusted later in dashboard.</p>
                </div>
              </div>

              {/* RIGHT COLUMN - COMMUNICATIONS */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b border-gray-300 pb-3 mb-6">
                  <SparklesIcon className="w-5 h-5 text-cyan-600" />
                  <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900">Communications</h2>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono text-gray-600 uppercase tracking-widest">
                    PIC Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="form-input-retro w-full text-sm py-3 px-4 bg-white border-2 border-gray-300 text-gray-900 focus:border-emerald-500 outline-none"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@perusahaan.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono text-gray-600 uppercase tracking-widest">
                    Mobile / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="form-input-retro w-full text-sm py-3 px-4 bg-white border-2 border-gray-300 text-gray-900 focus:border-emerald-500 outline-none"
                    id="phone"
                    name="phone"
                    placeholder="+62 8..."
                    type="text"
                  />
                </div>

                <div className="bg-gray-100 border border-dashed border-gray-400 p-4 flex items-start gap-4">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      className="w-5 h-5 border-2 border-gray-400 bg-white cursor-pointer accent-emerald-600"
                      id="voice-feature"
                      name="voice-feature"
                      type="checkbox"
                      checked={voiceEnabled}
                      onChange={(e) => setVoiceEnabled(e.target.checked)}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="font-bold text-gray-900 text-sm cursor-pointer select-none flex items-center gap-2" htmlFor="voice-feature">
                      Enable "Voice-to-Listing" Beta
                      <span className="bg-yellow-400 text-gray-900 text-[9px] px-1 py-0.5 font-bold uppercase rounded-sm">New</span>
                    </label>
                    <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                      Allow Arta to process listings via WhatsApp voice notes. Our AI will automatically categorize and list your inventory based on voice descriptions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-4">
              <a href="/register" className="text-gray-600 hover:text-gray-900 font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors" type="button">
                <ArrowLeftIcon className="w-4 h-4" />
                Kembali ke Langkah 1
              </a>
              <a href="/dashboard" className="btn-retro bg-emerald-500 border-2 border-emerald-300 text-white font-bold text-sm uppercase px-8 py-4 shadow-lg flex items-center gap-2 hover:bg-emerald-600 w-full sm:w-auto justify-center" type="submit">
                Selesaikan Pendaftaran
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
        <ChatBot storageKey="arta-factory-chat-messages" />
      </main>
    </div>
  );
}
