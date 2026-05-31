import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Map, Users, UserCheck,
  IndianRupee, ChevronRight
} from 'lucide-react'

const nav = [
  { to: '/dashboard',  icon: LayoutDashboard, label: 'Dashboard'   },
  { to: '/plots',      icon: Map,             label: 'Plot Management' },
  { to: '/leads',      icon: ChevronRight,    label: 'Lead Management' },
  { to: '/customers',  icon: Users,           label: 'Customers'   },
  { to: '/finance',    icon: IndianRupee,     label: 'Finance'     },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-dark-800 border-r border-brand-700/20 flex flex-col py-6 px-4 shrink-0">
      {/* Logo */}
      <div className="mb-10 px-2">
        <p className="text-brand-400 text-xs tracking-widest uppercase mb-1 font-sans">
          Management Suite
        </p>
        <h1 className="font-display text-2xl text-brand-300 leading-tight">
          Ujjwal<br />Bhoomi
        </h1>
        <div className="h-0.5 w-10 bg-brand-500 mt-3 rounded-full" />
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {nav.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group
              ${isActive
                ? 'bg-brand-600/20 text-brand-300 border border-brand-600/30'
                : 'text-gray-400 hover:text-brand-300 hover:bg-dark-700'
              }`
            }
          >
            <Icon size={17} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom badge */}
      <div className="mt-auto px-3 py-3 rounded-lg bg-dark-700 gold-border">
        <p className="text-[11px] text-gray-500">Powered by</p>
        <p className="text-xs text-brand-400 font-semibold">AUKS Technologies</p>
      </div>
    </aside>
  )
}