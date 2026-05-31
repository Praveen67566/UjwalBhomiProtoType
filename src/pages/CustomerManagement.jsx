import { User, Home, CreditCard } from 'lucide-react'

const customers = [
  { name: 'Vikram Tiwari',  plot: 'UB-004', sector: 'Sector B', amount: '₹8,20,000',  paid: '₹4,10,000',  due: '₹4,10,000',  date: '15 Apr 2026' },
  { name: 'Kavita Rani',    plot: 'UB-002', sector: 'Sector A', amount: '₹15,00,000', paid: '₹15,00,000', due: '₹0',          date: '02 Mar 2026' },
  { name: 'Suresh Mishra',  plot: 'UB-007', sector: 'Sector A', amount: '₹16,00,000', paid: '₹8,00,000',  due: '₹8,00,000',  date: '20 Feb 2026' },
]

export default function CustomerManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl text-gray-100">Customer Management</h2>
        <p className="text-sm text-gray-500 mt-1">All registered buyers & payment status</p>
      </div>

      <div className="grid gap-4">
        {customers.map((c, i) => {
          const paidPct = Math.round(
            (parseInt(c.paid.replace(/[₹,]/g, '')) / parseInt(c.amount.replace(/[₹,]/g, ''))) * 100
          )
          const isDue = c.due !== '₹0'

          return (
            <div key={i} className="bg-dark-800 gold-border rounded-xl p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-700/30 flex items-center justify-center">
                    <User size={18} className="text-brand-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">{c.name}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Home size={11} /> Plot {c.plot} · {c.sector}
                    </p>
                  </div>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full ${isDue ? 'bg-red-500/15 text-red-400' : 'bg-green-500/15 text-green-400'}`}>
                  {isDue ? 'Due Pending' : 'Fully Paid'}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Total Amount</p>
                  <p className="text-gray-200 font-medium">{c.amount}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Amount Paid</p>
                  <p className="text-green-400 font-medium">{c.paid}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Balance Due</p>
                  <p className={`font-medium ${isDue ? 'text-red-400' : 'text-gray-400'}`}>{c.due}</p>
                </div>
              </div>

              {/* Progress */}
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Payment Progress</span>
                  <span>{paidPct}%</span>
                </div>
                <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full transition-all"
                    style={{ width: `${paidPct}%` }}
                  />
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <CreditCard size={11} /> Booking Date: {c.date}
                </p>
                <button className="text-xs text-brand-400 hover:text-brand-300 border border-brand-700/40 hover:border-brand-500 px-3 py-1 rounded-md transition-all">
                  View Details
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}