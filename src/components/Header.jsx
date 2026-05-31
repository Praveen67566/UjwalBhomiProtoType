import { Bell, Search, UserCircle } from 'lucide-react'

export default function Header() {
  return (
    <header className="h-16 bg-dark-800 border-b border-brand-700/20 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-3 bg-dark-700 px-4 py-2 rounded-lg w-72 gold-border">
        <Search size={15} className="text-gray-500" />
        <input
          className="bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none w-full"
          placeholder="Search plots, leads, customers..."
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative text-gray-400 hover:text-brand-300 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-500" />
        </button>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <UserCircle size={28} className="text-brand-400" />
          <div>
            <p className="font-medium text-xs text-brand-300">Admin</p>
            <p className="text-[10px] text-gray-500">Ujjwal Bhoomi</p>
          </div>
        </div>
      </div>
    </header>
  )
}