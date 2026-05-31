import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import PlotManagement from './pages/PlotManagement'
import LeadManagement from './pages/LeadManagement'
import CustomerManagement from './pages/CustomerManagement'
import Finance from './pages/Finance'

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-dark-900">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/plots" element={<PlotManagement />} />
            <Route path="/leads" element={<LeadManagement />} />
            <Route path="/customers" element={<CustomerManagement />} />
            <Route path="/finance" element={<Finance />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}