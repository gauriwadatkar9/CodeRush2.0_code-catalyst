import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Planner from './pages/Planner.jsx'
import Telemetry from './pages/Telemetry.jsx'
import Anomalies from './pages/Anomalies.jsx'
import Procedures from './pages/Procedures.jsx'
import Replay from './pages/Replay.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen w-full grid-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-[1600px] w-full mx-auto animate-fade-in">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/telemetry" element={<Telemetry />} />
            <Route path="/anomalies" element={<Anomalies />} />
            <Route path="/procedures" element={<Procedures />} />
            <Route path="/replay" element={<Replay />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
