import { useState } from 'react'
import { Map, CheckCircle, Clock, XCircle, Filter } from 'lucide-react'

const allPlots = [
  { id: 'UB-001', sector: 'Sector A', size: '100 sq.yd', facing: 'East',  price: '₹8,50,000',  status: 'Available' },
  { id: 'UB-002', sector: 'Sector A', size: '200 sq.yd', facing: 'North', price: '₹15,00,000', status: 'Booked'    },
  { id: 'UB-003', sector: 'Sector B', size: '150 sq.yd', facing: 'West',  price: '₹11,00,000', status: 'Available' },
  { id: 'UB-004', sector: 'Sector B', size: '100 sq.yd', facing: 'South', price: '₹8,20,000',  status: 'Sold'      },
  { id: 'UB-005', sector: 'Sector C', size: '300 sq.yd', facing: 'East',  price: '₹22,50,000', status: 'Booked'    },
  { id: 'UB-006', sector: 'Sector C', size: '100 sq.yd', facing: 'North', price: '₹9,00,000',  status: 'Available' },
  { id: 'UB-007', sector: 'Sector A', size: '200 sq.yd', facing: 'East',  price: '₹16,00,000', status: 'Sold'      },
  { id: 'UB-008', sector: 'Sector D', size: '150 sq.yd', facing: 'West',  price: '₹12,50,000', status: 'Available' },
]

const statusMeta = {
  Available: { color: 'bg-green-500/15 text-green-400 border-green-500/20',  icon: CheckCircle },
  Booked:    { color: 'bg-brand-500/15 text-brand-300 border-brand-500/20', icon: Clock       },
  Sold:      { color: 'bg-red-500/15 text-red-400 border-red-500/20',       icon: XCircle     },
}

export default function PlotManagement() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Available', 'Booked', 'Sold']
  const plots = filter === 'All' ? allPlots : allPlots.filter(p => p.status === filter)

  const counts = {
    Available: allPlots.filter(p => p.status === 'Available').length,
    Booked:    allPlots.filter(p => p.status === 'Booked').length,
    Sold:      allPlots.filter(p => p.status === 'Sold').length,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl text-gray-100">Plot Management</h2>
          <p className="text-sm text-gray-500 mt-1">Manage all plots across sectors</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-sm px-4 py-2 rounded-lg transition-colors">
          <Map size={15} /> Add Plot
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(counts).map(([status, count]) => {
          const { color } = statusMeta[status]
          return (
            <div key={status} className={`rounded-xl p-4 border ${color} bg-opacity-10`}>
              <p className="text-xs opacity-70 mb-1">{status} Plots</p>
              <p className="text-3xl font-display">{count}</p>
            </div>
          )
        })}
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2">
        <Filter size={14} className="text-gray-500" />
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors
              ${filter === f
                ? 'bg-brand-600 border-brand-500 text-white'
                : 'border-dark-500 text-gray-400 hover:border-brand-600 hover:text-brand-300'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-dark-800 gold-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-600 text-gray-500 text-xs uppercase tracking-wider">
              {['Plot ID', 'Sector', 'Size', 'Facing', 'Price', 'Status', 'Action'].map(h => (
                <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plots.map((plot, i) => {
              const { color, icon: Icon } = statusMeta[plot.status]
              return (
                <tr key={i} className="border-b border-dark-700 hover:bg-dark-700/50 transition-colors">
                  <td className="px-5 py-3.5 text-brand-300 font-mono font-medium">{plot.id}</td>
                  <td className="px-5 py-3.5 text-gray-300">{plot.sector}</td>
                  <td className="px-5 py-3.5 text-gray-400">{plot.size}</td>
                  <td className="px-5 py-3.5 text-gray-400">{plot.facing}</td>
                  <td className="px-5 py-3.5 text-gray-200 font-medium">{plot.price}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border ${color}`}>
                      <Icon size={11} /> {plot.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <button className="text-xs text-brand-400 hover:text-brand-300 border border-brand-700/40 hover:border-brand-500 px-3 py-1 rounded-md transition-all">
                      View
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}