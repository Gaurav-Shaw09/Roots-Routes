import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Festivals from './pages/Festivals'
import Destinations from './pages/Destinations'
import Resources from './pages/Resources'
import Calendar from './pages/Calendar'
import Marketplace from './pages/Marketplace'
import Auth from './pages/Auth'
import Admin from './pages/Admin'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-orange-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
