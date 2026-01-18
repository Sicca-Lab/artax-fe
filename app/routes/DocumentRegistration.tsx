import type { Route } from "./+types/DocumentRegistration";
import {
  BuildingOfficeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Ticker from '../components/Ticker';
import Logo from '../components/Logo';
import ChatBot from '../components/ChatBot';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Arta | Document Service Center" },
    { name: "description", content: "Streamlined legal compliance for industrial operations." },
  ];
}

export default function DocumentRegistration() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const services = [
    {
      id: 'nib',
      title: 'NIB Creation',
      description: 'Registration of Business Identification Number. Essential for all new factories.',
      timeline: '1-2 Working Days',
      icon: '🏢',
      bgColor: 'bg-blue-900/50',
      borderColor: 'border-blue-700',
      textColor: 'text-blue-400',
      link: '/document-register-nib',
    },
    {
      id: 'amdal',
      title: 'AMDAL / UKL-UPL',
      description: 'Environmental Impact Analysis document processing. Includes site survey.',
      timeline: '14-30 Working Days',
      icon: '🌱',
      bgColor: 'bg-green-900/30',
      borderColor: 'border-green-700',
      textColor: 'text-green-400',
      link: '/document-register-amdal',
    },
    {
      id: 'b3',
      title: 'Izin Limbah B3',
      description: 'Hazardous Waste Management Permit. Required for specific industrial zones.',
      timeline: '30-60 Working Days',
      icon: '⚠️',
      bgColor: 'bg-red-900/30',
      borderColor: 'border-red-700',
      textColor: 'text-red-400',
      link: '/document-register-pricing',
    },
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
                <p className="text-xs text-gray-500 font-mono">LAYANAN</p>
                <p className="text-sm font-bold text-cyan-600">DOKUMEN LEGAL</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow relative bg-gray-50">
        <div className="absolute inset-0 scanlines bg-scanlines opacity-20 pointer-events-none z-10 h-full w-full fixed"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
          {/* HEADER */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
              <div>
                <div className="inline-block px-2 py-1 bg-cyan-100 border border-cyan-300 text-cyan-700 text-[10px] font-mono mb-2 tracking-widest">
                  ARTA LEGAL SERVICES
                </div>
                <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2 text-gray-900">
                  Document Service Center
                </h1>
                <p className="text-gray-600 font-mono text-sm max-w-2xl">
                  Streamlined legal compliance for industrial operations. Select your service package below.
                </p>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <CheckBadgeIcon className="w-5 h-5" />
                <span className="font-mono font-bold text-sm">OFFICIAL PARTNER</span>
              </div>
            </div>

            {/* PROGRESS STEPS */}
            <div className="bg-white border-2 border-gray-300 p-6 md:p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-2 bg-gray-300"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-gray-300"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-gray-300"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-gray-300"></div>

              <div className="flex flex-col md:flex-row justify-between relative z-10">
                <div className="hidden md:block absolute top-[22px] left-0 w-full h-1 bg-gray-300 -z-10"></div>

                {[
                  { step: '01', label: 'Consultation', icon: '💬', active: true },
                  { step: '02', label: 'Submission', icon: '📤', active: false },
                  { step: '03', label: 'Verification', icon: '🔍', active: false },
                  { step: '04', label: 'Approval', icon: '✅', active: false },
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-row md:flex-col items-center gap-4 md:gap-3 flex-1 ${idx > 0 ? 'mt-4 md:mt-0' : ''} ${!item.active ? 'opacity-50' : ''}`}>
                    <div className={`w-12 h-12 flex items-center justify-center shadow-lg z-10 relative border-2 ${item.active ? 'bg-emerald-500 border-white' : 'bg-gray-200 border-gray-400'
                      }`}>
                      <span className="text-xl">{item.icon}</span>
                      {item.active && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border border-emerald-600 animate-pulse"></div>}
                    </div>
                    <div className={item.active ? 'text-left md:text-center' : 'text-left md:text-center'}>
                      <div className={`text-xs font-mono font-bold tracking-wider ${item.active ? 'text-emerald-600' : 'text-gray-500'}`}>
                        STEP {item.step}
                      </div>
                      <div className={`text-sm font-bold ${item.active ? 'text-gray-900' : 'text-gray-600'}`}>
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SERVICE CARDS */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <a key={service.id} href={service.link} className="cursor-pointer group relative">
                  <div className={`bg-white border-2 p-6 h-full flex flex-col transition-all hover:border-emerald-500 shadow-sm hover:shadow-md hover:-translate-y-1 border-gray-300 hover:bg-emerald-50`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 border flex items-center justify-center text-2xl ${service.bgColor} ${service.borderColor}`}>
                        {service.icon}
                      </div>
                      <div className={`w-6 h-6 border-2 flex items-center justify-center transition-all ${selectedServices.includes(service.id)
                        ? 'bg-emerald-500 border-emerald-600'
                        : 'border-gray-400'
                        }`}>
                        {selectedServices.includes(service.id) && (
                          <CheckCircleIcon className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>
                    <h3 className={`text-lg font-bold mb-2 transition-colors ${selectedServices.includes(service.id) ? 'text-gray-900 group-hover:text-emerald-600' : 'text-gray-900'
                      }`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="border-t border-gray-300 pt-4 mt-auto">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-600 text-xs">⏱️</span>
                        <span className="text-xs font-mono text-gray-600">EST. TIMELINE</span>
                      </div>
                      <p className="text-cyan-600 font-mono font-bold">{service.timeline}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* FOOTER SECTION */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-gray-300 pt-8">
              <div className="mt-8 flex justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 border border-gray-400 rounded-sm text-[10px] text-gray-700 font-mono">
                  <LockClosedIcon className="w-3 h-3" />
                  ENCRYPTED CONNECTION (SSL) • ISO 27001 SECURE
                </div>
              </div>
              <a
                href="/document-register-pricing"
                className="btn-retro bg-emerald-500 border-2 border-emerald-300 text-white font-bold text-lg uppercase px-12 py-4 shadow-lg flex items-center gap-3 hover:bg-emerald-600 w-full sm:w-auto justify-center group transition-colors"
              >
                <span>Lihat Paket Pricing</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* CHAT WIDGET */}
        <ChatBot storageKey="arta-document-chat-messages" />
      </main>
    </div>
  );
}
