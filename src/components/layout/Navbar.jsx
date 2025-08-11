import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  HomeIcon, 
  BookOpenIcon, 
  CalendarIcon, 
  MapPinIcon, 
  AcademicCapIcon, 
  ShoppingBagIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Blog', href: '/blog', icon: BookOpenIcon },
    { name: 'Festivals', href: '/festivals', icon: CalendarIcon },
    { name: 'Destinations', href: '/destinations', icon: MapPinIcon },
    { name: 'Resources', href: '/resources', icon: AcademicCapIcon },
    { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingBagIcon },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-orange-600 font-bold text-xl">CC</span>
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">The Cultural Circuit</h1>
                <p className="text-xs text-orange-100">Preserving India's Heritage</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-white hover:bg-orange-500 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4 mr-1" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/auth"
              className="bg-white text-orange-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-50 transition-colors flex items-center"
            >
              <UserIcon className="w-4 h-4 mr-1" />
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-200 focus:outline-none focus:text-orange-200"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-orange-700">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-white text-orange-600'
                    : 'text-white hover:bg-orange-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.name}
              </Link>
            ))}
            <Link
              to="/auth"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-orange-600"
              onClick={() => setIsOpen(false)}
            >
              <UserIcon className="w-5 h-5 mr-2" />
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
