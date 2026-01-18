import { HomeIcon, Cog6ToothIcon, ScaleIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  isActive: boolean;
}

interface SidebarProps {
  items: SidebarItem[];
  userInfo?: {
    initials: string;
    name: string;
    unit: string;
  };
}

export default function Sidebar({ items, userInfo }: SidebarProps) {
  return (
    <aside className="hidden w-64 flex-col border-r-2 border-gray-300 bg-white p-4 md:flex shadow-lg">
      <nav className="flex flex-1 flex-col gap-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`group flex items-center gap-3 px-3 py-3 text-sm font-medium transition-all border-2 ${
              item.isActive
                ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 border-transparent hover:border-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 ${
                item.isActive
                  ? 'text-white'
                  : 'text-gray-600 group-hover:text-emerald-500 transition-colors'
              }`}
            >
              {item.icon}
            </div>
            {item.label}
          </a>
        ))}
      </nav>

      {userInfo && (
        <div className="mt-auto border-t-2 border-gray-300 pt-4">
          <div className="flex items-center gap-3 bg-gray-100 p-3 border-2 border-gray-300">
            <div className="h-8 w-8 bg-emerald-500 flex items-center justify-center text-xs font-bold text-white border-2 border-white">
              {userInfo.initials}
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-medium text-gray-900">{userInfo.name}</p>
              <p className="text-[10px] text-gray-600">Unit: {userInfo.unit}</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
