import { IndianRupee, TrendingUp, TrendingDown, FileText } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const transactions = [
  { id: 'TXN-001', customer: 'Vikram Tiwari',  type: 'Installment', amount: '₹4,10,000', date: '20 May 2026', mode: 'NEFT'  },
  { id: 'TXN-002', customer: 'Kavita Rani',    type: 'Full Payment', amount: '₹15,00,000', date: '10 May 2026', mode: 'Cheque'},
  { id: 'TXN-003', customer: 'Suresh Mishra',  type: 'Installment', amount: '₹8,00,000',  date: '28 Apr 2026', mode: 'UPI'   },
  { id: 'TXN-004', customer: 'Priya Sharma',   type: 'Booking Amt', amount: '₹1,00,000',  date: '15 Apr 2026', mode: 'Cash'  },
]

const monthly = [
  { m: 'Jan', col: 12 }, { m: 'Feb', col: 18 }, { m: 'Mar', col: 15 },
  { m: 'Apr', col: 22 }, { m: 'May', col: 28 }, { m: 'Jun', col: 9  },
]

export default function Finance() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl text-gray-100">Finance & Accounts</h2>
        <p className="text-sm text-gray-500 mt-1">Track collections, payments and revenue</p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: IndianRupee,  label: 'Total Collection',  value: '₹27.1L', color: 'text-brand-400'  },
          { icon: TrendingUp,   label: 'This Month',        value: '₹9.2L',  color: 'text-green-400'  },
          { icon: TrendingDown, label: 'Pending Dues',      value: '₹12.1L', color: 'text-red-400'    },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="bg-dark-800 gold-border rounded-xl p-4 flex items-center gap-4">
            <div className={`${color} p-2.5 bg-dark-700 rounded-lg`}><Icon size={20} /></div>
            <div>
              <p className="text-xs text-gray-500">{label}</p>
              <p className="text-xl font-display text-gray-100">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-dark-800 gold-border rounded-xl p-5">
        <p className="text-sm font-semibold text-gray-300 mb-4">Monthly Collections (₹ Lakhs)</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={monthly} barSize={28}>
            <CartesianGrid strokeDasharray="3 3" stroke="#252a3a" vertical={false} />
            <XAxis dataKey="m" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `₹${v}L`} />
            <Tooltip
              contentStyle={{ background: '#141720', border: '1px solid #c98a1230', borderRadius: 8, fontSize: 12 }}
              formatter={v => [`₹${v}L`, 'Collection']}
            />
            <Bar dataKey="col" fill="#c98a12" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Transactions */}
      <div className="bg-dark-800 gold-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-dark-600">
          <FileText size={15} className="text-brand-400" />
          <p className="text-sm font-semibold text-gray-300">Recent Transactions</p>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs uppercase text-gray-500 border-b border-dark-600">
              {['Txn ID', 'Customer', 'Type', 'Amount', 'Mode', 'Date'].map(h => (
                <th key={h} className="text-left px-5 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i} className="border-b border-dark-700 hover:bg-dark-700/40 transition-colors">
                <td className="px-5 py-3 text-brand-400 font-mono text-xs">{t.id}</td>
                <td className="px-5 py-3 text-gray-300">{t.customer}</td>
                <td className="px-5 py-3 text-gray-400">{t.type}</td>
                <td className="px-5 py-3 text-green-400 font-medium">{t.amount}</td>
                <td className="px-5 py-3">
                  <span className="text-xs bg-dark-600 text-gray-400 px-2 py-0.5 rounded">{t.mode}</span>
                </td>
                <td className="px-5 py-3 text-gray-500 text-xs">{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}