import { Map, Users, TrendingUp, IndianRupee, Activity } from 'lucide-react'
import StatCard from '../components/StatCard'
import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid
} from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 420000 },
  { month: 'Feb', revenue: 580000 },
  { month: 'Mar', revenue: 510000 },
  { month: 'Apr', revenue: 740000 },
  { month: 'May', revenue: 690000 },
  { month: 'Jun', revenue: 920000 },
]

const recentLeads = [
  { name: 'Ramesh Verma',    source: 'Facebook',  status: 'Hot',  date: '30 May' },
  { name: 'Priya Sharma',    source: 'Walk-in',   status: 'Warm', date: '29 May' },
  { name: 'Anil Gupta',      source: 'LinkedIn',  status: 'Cold', date: '28 May' },
  { name: 'Sunita Singh',    source: 'Instagram', status: 'Hot',  date: '27 May' },
]

const statusColor = {
  Hot:  'bg-red-500/20 text-red-400',
  Warm: 'bg-brand-500/20 text-brand-300',
  Cold: 'bg-blue-500/20 text-blue-400',
}

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="font-display text-2xl text-gray-100">Dashboard Overview</h2>
        <p className="text-sm text-gray-500 mt-1">Welcome back, Admin. Here's today's summary.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard icon={Map}          label="Total Plots"     value="342"     sub="18 sold this month" />
        <StatCard icon={Users}        label="Active Leads"    value="87"      sub="12 new today"       color="text-blue-400" />
        <StatCard icon={TrendingUp}   label="Bookings"        value="24"      sub="This month"         color="text-green-400" />
        <StatCard icon={IndianRupee}  label="Revenue (Jun)"   value="₹9.2L"   sub="+18% vs last month" color="text-emerald-400" />
      </div>

      {/* Chart + Leads */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Revenue Chart */}
        <div className="xl:col-span-2 bg-dark-800 gold-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-gray-300">Revenue Trend</p>
            <span className="text-xs text-brand-400 bg-brand-500/10 px-2 py-1 rounded">2026</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#c98a12" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#c98a12" stopOpacity={0}   />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#252a3a" />
              <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false}
                tickFormatter={v => `₹${(v/100000).toFixed(1)}L`} />
              <Tooltip
                contentStyle={{ background: '#141720', border: '1px solid #c98a1230', borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: '#e8e4d9' }}
                formatter={v => [`₹${(v/100000).toFixed(2)}L`, 'Revenue']}
              />
              <Area type="monotone" dataKey="revenue" stroke="#c98a12" strokeWidth={2} fill="url(#rev)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Leads */}
        <div className="bg-dark-800 gold-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity size={15} className="text-brand-400" />
            <p className="text-sm font-semibold text-gray-300">Recent Leads</p>
          </div>
          <div className="space-y-3">
            {recentLeads.map((l, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-dark-600 last:border-0">
                <div>
                  <p className="text-sm text-gray-200 font-medium">{l.name}</p>
                  <p className="text-xs text-gray-500">{l.source} · {l.date}</p>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${statusColor[l.status]}`}>
                  {l.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}