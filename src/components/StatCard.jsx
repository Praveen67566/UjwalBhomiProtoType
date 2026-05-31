export default function StatCard({ icon: Icon, label, value, sub, color = 'text-brand-400' }) {
  return (
    <div className="bg-dark-800 gold-border rounded-xl p-5 flex items-start gap-4 hover:border-brand-500/50 transition-colors">
      <div className={`p-2.5 rounded-lg bg-dark-700 ${color}`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <p className="text-2xl font-display text-gray-100">{value}</p>
        {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}