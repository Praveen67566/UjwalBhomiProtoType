import { useState } from 'react'
import { Phone, Mail, MessageSquare, Plus } from 'lucide-react'

const leads = [
  { name: 'Ramesh Verma',    phone: '9876543210', email: 'ramesh@email.com', source: 'Facebook',  interest: 'Sector A – 200 sq.yd', status: 'Hot',      assigned: 'Rajiv K.'  },
  { name: 'Priya Sharma',    phone: '9123456789', email: 'priya@email.com',  source: 'Walk-in',   interest: 'Sector B – 100 sq.yd', status: 'Warm',     assigned: 'Meena S.'  },
  { name: 'Anil Gupta',      phone: '9988776655', email: 'anil@email.com',   source: 'LinkedIn',  interest: 'Sector C – 300 sq.yd', status: 'Cold',     assigned: 'Rajiv K.'  },
  { name: 'Sunita Singh',    phone: '9871234560', email: 'sunita@email.com', source: 'Instagram', interest: 'Sector A – 150 sq.yd', status: 'Hot',      assigned: 'Meena S.'  },
  { name: 'Vikram Tiwari',   phone: '9765432109', email: 'vikram@email.com', source: 'Google',    interest: 'Sector D – 100 sq.yd', status: 'Converted', assigned: 'Rajiv K.' },
]

const statusStyle = {
  Hot:       'bg-red-500/20 text-red-400',
  Warm:      'bg-amber-500/20 text-amber-400',
  Cold:      'bg-blue-500/20 text-blue-400',
  Converted: 'bg-green-500/20 text-green-400',
}

export default function LeadManagement() {
  const [active, setActive] = useState(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl text-gray-100">Lead Management</h2>
          <p className="text-sm text-gray-500 mt-1">Track and nurture all incoming leads</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-sm text-white px-4 py-2 rounded-lg transition-colors">
          <Plus size={15} /> Add Lead
        </button>
      </div>

      <div className="grid gap-3">
        {leads.map((lead, i) => (
          <div
            key={i}
            onClick={() => setActive(active === i ? null : i)}
            className="bg-dark-800 gold-border rounded-xl p-4 cursor-pointer hover:border-brand-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-700/30 flex items-center justify-center text-brand-300 font-display text-sm">
                  {lead.name[0]}
                </div>
                <div>
                  <p className="font-medium text-gray-200 text-sm">{lead.name}</p>
                  <p className="text-xs text-gray-500">{lead.interest}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500">{lead.source}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyle[lead.status]}`}>
                  {lead.status}
                </span>
              </div>
            </div>

            {active === i && (
              <div className="mt-4 pt-4 border-t border-dark-600 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Contact</p>
                  <p className="text-sm text-gray-300 flex items-center gap-1"><Phone size={12} /> {lead.phone}</p>
                  <p className="text-sm text-gray-300 flex items-center gap-1 mt-1"><Mail size={12} /> {lead.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Assigned To</p>
                  <p className="text-sm text-gray-300">{lead.assigned}</p>
                </div>
                <div className="flex items-end gap-2">
                  <button className="flex items-center gap-1 text-xs bg-brand-600/30 hover:bg-brand-600 text-brand-300 px-3 py-1.5 rounded-lg transition-colors">
                    <MessageSquare size={12} /> Follow Up
                  </button>
                  <button className="text-xs bg-green-600/20 hover:bg-green-600 text-green-400 px-3 py-1.5 rounded-lg transition-colors">
                    Convert
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}