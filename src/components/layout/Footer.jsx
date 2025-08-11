import { Link } from 'react-router-dom'
import { 
  HeartIcon, 
  GlobeAltIcon, 
  EnvelopeIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-800 via-red-800 to-yellow-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-orange-600 font-bold text-2xl">CC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">The Cultural Circuit</h3>
                <p className="text-orange-200">Preserving India's Heritage</p>
              </div>
            </div>
            <p className="text-orange-100 mb-4 max-w-md">
              Connecting people with India's rich cultural heritage through festivals, 
              destinations, stories, and artisanal products. Join us in celebrating 
              the diversity and beauty of Indian culture.
            </p>
            <div className="flex items-center text-orange-200">
              <HeartIcon className="w-5 h-5 mr-2" />
              <span>Made with love for Indian culture</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-orange-100 hover:text-white transition-colors">
                  Cultural Blog
                </Link>
              </li>
              <li>
                <Link to="/festivals" className="text-orange-100 hover:text-white transition-colors">
                  Festivals
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-orange-100 hover:text-white transition-colors">
                  Tour Destinations
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-orange-100 hover:text-white transition-colors">
                  Artisan Marketplace
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-orange-100 hover:text-white transition-colors">
                  Cultural Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-200">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-orange-100">
                <GlobeAltIcon className="w-5 h-5 mr-2" />
                <span>culturalcircuit.in</span>
              </div>
              <div className="flex items-center text-orange-100">
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                <span>hello@culturalcircuit.in</span>
              </div>
              <div className="flex items-center text-orange-100">
                <PhoneIcon className="w-5 h-5 mr-2" />
                <span>+91 98765 43210</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2 text-orange-200">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-orange-100 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-orange-100 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                  </svg>
                </a>
                <a href="#" className="text-orange-100 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-200 text-sm">
              © 2024 The Cultural Circuit. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-orange-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-orange-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/about" className="text-orange-200 hover:text-white text-sm transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
