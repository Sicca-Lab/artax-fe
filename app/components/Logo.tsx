export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-emerald-500 border-2 border-white p-1 flex items-center justify-center">
        <img 
          src="/logo-arta.png" 
          alt="ARTA Logo" 
          className="h-10 w-auto"
        />
      </div>
      <span className="text-gray-900 font-display font-black text-2xl tracking-tight uppercase">ARTAX</span>
    </div>
  );
}
