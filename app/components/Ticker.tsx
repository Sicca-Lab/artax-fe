export default function Ticker() {
  const wasteItems = [
    { name: 'LIMBAH BESI', price: 'Rp 5,200/kg', change: '+2.1%' },
    { name: 'LIMBAH PLASTIK PET', price: 'Rp 3,800/kg', change: '+1.8%' },
    { name: 'LIMBAH KARDUS', price: 'Rp 2,300/kg', change: '+0.9%' },
    { name: 'LIMBAH TEMBAGA', price: 'Rp 105,000/kg', change: '+3.2%' },
    { name: 'LIMBAH ALUMINIUM', price: 'Rp 18,500/kg', change: '+2.5%' },
    { name: 'LIMBAH ELEKTRONIK', price: 'Rp 15,000/kg', change: '+4.1%' },
    { name: 'LIMBAH KERTAS', price: 'Rp 1,800/kg', change: '+1.5%' },
    { name: 'LIMBAH KACA', price: 'Rp 900/kg', change: '+0.6%' },
  ];

  return (
    <div className="ticker-wrap font-display font-bold uppercase tracking-widest text-xs border-b-2 border-gray-300 fixed top-0 left-0 right-0 z-50 bg-emerald-500 text-white overflow-hidden h-8 flex items-center">
      <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .ticker-move {
          display: flex;
          animation: ticker-scroll 60s linear infinite;
          white-space: nowrap;
        }
        
        .ticker-move:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="ticker-move">
        {wasteItems.map((item, idx) => (
          <span key={idx} className="inline-flex items-center gap-2 mx-8 flex-shrink-0">
            <span>{item.name}: {item.price}</span>
            <span className={item.change.startsWith('+') ? 'text-white' : 'text-red-200'}>
              {item.change.startsWith('+') ? '▲' : '▼'} {item.change}
            </span>
            {idx < wasteItems.length - 1 && <span className="text-emerald-200">|</span>}
          </span>
        ))}
        {wasteItems.map((item, idx) => (
          <span key={`repeat-${idx}`} className="inline-flex items-center gap-2 mx-8 flex-shrink-0">
            <span>{item.name}: {item.price}</span>
            <span className={item.change.startsWith('+') ? 'text-white' : 'text-red-200'}>
              {item.change.startsWith('+') ? '▲' : '▼'} {item.change}
            </span>
            {idx < wasteItems.length - 1 && <span className="text-emerald-200">|</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
