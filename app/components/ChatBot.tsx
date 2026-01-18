import { useState, useEffect } from 'react';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

type Message = {
  text: string;
  isBot: boolean;
};

interface ChatBotProps {
  storageKey?: string;
  systemPrompt?: string;
  initialMessages?: Message[];
}

export default function ChatBot({
  storageKey = 'arta-chat-messages',
  systemPrompt = 'Anda adalah asisten AI untuk Arta Legal Services yang membantu perusahaan dengan pengurusan dokumen limbah industri dan izin lingkungan. Anda HANYA boleh menjawab pertanyaan yang berkaitan dengan: 1) Manajemen limbah perusahaan (limbah B3, limbah non-B3, pengolahan limbah), 2) Izin dan dokumen lingkungan (AMDAL, UKL-UPL, izin limbah B3, NIB), 3) Kegunaan dan pemanfaatan limbah industri, 4) Regulasi lingkungan untuk pabrik dan industri. Jika pengguna bertanya tentang topik lain yang tidak berhubungan dengan limbah perusahaan atau dokumen lingkungan, jawab dengan sopan: "Maaf, saya hanya dapat membantu dengan pertanyaan seputar manajemen limbah perusahaan dan pengurusan dokumen lingkungan. Apakah ada yang bisa saya bantu terkait topik tersebut?" Berikan jawaban dalam Bahasa Indonesia yang profesional dan informatif.',
  initialMessages = [
    { text: "Selamat datang di Arta Legal Services. Saya dapat membantu Anda menentukan dokumen apa saja yang diperlukan untuk jenis pabrik Anda.", isBot: true },
    { text: "Apakah Anda mendaftarkan fasilitas baru atau memperpanjang izin?", isBot: true },
  ]
}: ChatBotProps) {
  const [chatOpen, setChatOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse saved messages:', e);
        }
      }
    }
    return initialMessages;
  });

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    }
  }, [messages, storageKey]);

  const clearChat = () => {
    setMessages(initialMessages);
    localStorage.setItem(storageKey, JSON.stringify(initialMessages));
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() && !isLoading) {
      const userMessage = inputValue;
      setMessages((prev: Message[]) => [...prev, { text: userMessage, isBot: false }]);
      setInputValue('');
      setIsLoading(true);

      try {
        const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

        if (!apiKey) {
          throw new Error('API key tidak ditemukan. Pastikan VITE_OPENROUTER_API_KEY sudah diset di file .env');
        }

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'https://arta.com',
            'X-Title': 'Arta Legal Services'
          },
          body: JSON.stringify({
            model: 'openai/gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: systemPrompt
              },
              ...messages.map((msg: Message) => ({
                role: msg.isBot ? 'assistant' : 'user',
                content: msg.text
              })),
              {
                role: 'user',
                content: userMessage
              }
            ]
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error Response:', errorText);
          throw new Error(`API request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log('API Response:', data);

        if (data.error) {
          throw new Error(data.error.message || 'API Error');
        }

        const botReply = data.choices[0]?.message?.content || 'Maaf, saya tidak dapat memproses permintaan Anda saat ini.';

        setMessages((prev: Message[]) => [...prev, { text: botReply, isBot: true }]);
      } catch (error: any) {
        console.error('Error calling OpenRouter API:', error);
        const errorMessage = error.message || 'Unknown error';
        setMessages((prev: Message[]) => [...prev, {
          text: `Maaf, terjadi kesalahan dalam menghubungi layanan. Error: ${errorMessage}. Silakan coba lagi.`,
          isBot: true
        }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="fixed bottom-0 right-4 sm:right-8 z-50 w-80 transform transition-transform duration-300 translate-y-0">
      <div className="bg-white border-2 border-gray-300 shadow-lg">
        <div className="bg-gray-200 p-3 border-b border-gray-300 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setChatOpen(!chatOpen)}>
            <div className="w-8 h-8 bg-emerald-500 border border-gray-400 relative">
              <div className="absolute inset-0 opacity-80"
                style={{ backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)", backgroundSize: "4px 4px", backgroundPosition: "0 0, 2px 2px" }}></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-white border border-emerald-700"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900 uppercase">Consultant</span>
              <span className="text-[10px] font-mono text-emerald-600 animate-pulse">● ONLINE</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={clearChat}
              className="text-xs font-mono text-gray-600 hover:text-emerald-600 transition-colors px-2 py-1 hover:bg-gray-300"
              title="Clear chat"
            >
              🗑️
            </button>
            <button onClick={() => setChatOpen(!chatOpen)} className="text-gray-600 hover:text-gray-900">
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {chatOpen && (
          <>
            <div className="h-64 bg-gray-100 p-4 overflow-y-auto relative">
              <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none"></div>
              <div className="flex flex-col gap-3 relative z-10">
                {messages.map((msg: Message, idx: number) => (
                  <div key={idx} className={`flex gap-2 ${msg.isBot ? '' : 'justify-end'}`}>
                    <div className={`p-2 max-w-[85%] rounded-sm ${msg.isBot
                      ? 'bg-gray-200 border border-gray-400 rounded-tl-none'
                      : 'bg-emerald-500 border border-emerald-600 rounded-tr-none text-white'
                      }`}>
                      <p className={`text-xs leading-relaxed ${msg.isBot ? 'text-gray-800' : 'text-white'}`}>{msg.text}</p>
                    </div>
                  </div>
                ))}
                <div className="text-center">
                  <span className="text-[9px] font-mono text-gray-600">TODAY 10:42 AM</span>
                </div>
              </div>
            </div>

            <div className="p-2 bg-white border-t border-gray-300">
              {isLoading && (
                <div className="mb-2 text-center">
                  <span className="text-[10px] font-mono text-emerald-600 animate-pulse">● Mengetik...</span>
                </div>
              )}
              <div className="flex gap-2">
                <input
                  className="w-full bg-gray-100 border border-gray-300 text-xs p-2 text-gray-900 focus:outline-none focus:border-emerald-500 font-mono placeholder-gray-500 disabled:opacity-50"
                  placeholder={isLoading ? "Menunggu balasan..." : "Ketik pesan..."}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                  disabled={isLoading}
                />
                <button
                  className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-600 p-2 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  type="button"
                  onClick={handleSendMessage}
                  disabled={isLoading}
                >
                  <PaperAirplaneIcon className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
