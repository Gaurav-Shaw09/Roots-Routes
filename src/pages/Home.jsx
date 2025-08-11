import { Link } from 'react-router-dom'
import { 
  ArrowRightIcon, 
  CalendarIcon, 
  MapPinIcon, 
  BookOpenIcon, 
  ShoppingBagIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

const Home = () => {
  const featuredFestivals = [
    {
      id: 1,
      name: 'Diwali - Festival of Lights',
      date: 'November 1, 2024',
      location: 'Pan India',
      image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400&h=300&fit=crop',
      description: 'Celebrate the triumph of light over darkness'
    },
    {
      id: 2,
      name: 'Holi - Festival of Colors',
      date: 'March 25, 2024',
      location: 'Pan India',
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      description: 'The vibrant festival of colors and joy'
    },
    {
      id: 3,
      name: 'Pongal - Harvest Festival',
      date: 'January 15, 2024',
      location: 'Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      description: 'Celebrating the harvest season'
    }
  ]

  const featuredDestinations = [
    {
      id: 1,
      name: 'Varanasi',
      state: 'Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      description: 'The spiritual capital of India'
    },
    {
      id: 2,
      name: 'Jaipur',
      state: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      description: 'The Pink City of royal heritage'
    },
    {
      id: 3,
      name: 'Kerala',
      state: 'God\'s Own Country',
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      description: 'Backwaters and Ayurvedic traditions'
    }
  ]

  const stats = [
    { number: '500+', label: 'Cultural Festivals' },
    { number: '1000+', label: 'Artisan Products' },
    { number: '50+', label: 'Tour Destinations' },
    { number: '10K+', label: 'Happy Visitors' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover India's
              <span className="block text-yellow-200">Cultural Heritage</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-orange-100">
              Immerse yourself in the vibrant festivals, ancient traditions, and 
              artisanal crafts that make India truly extraordinary
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/festivals"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center"
              >
                <CalendarIcon className="w-5 h-5 mr-2" />
                Explore Festivals
              </Link>
              <Link
                to="/destinations"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center"
              >
                <MapPinIcon className="w-5 h-5 mr-2" />
                Plan Your Journey
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white opacity-20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white opacity-20 rounded-full"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 border-2 border-white opacity-20 transform rotate-45"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Festivals */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Festivals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mark your calendar for these vibrant celebrations of Indian culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredFestivals.map((festival) => (
              <div key={festival.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 relative">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{festival.date}</p>
                    <p className="text-xs opacity-90">{festival.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {festival.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {festival.description}
                  </p>
                  <Link
                    to={`/festivals/${festival.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/festivals"
              className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              View All Festivals
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cultural Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the rich heritage and traditions across India's diverse landscapes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 relative">
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.state}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm mb-2">{destination.description}</p>
                    <Link
                      to={`/destinations/${destination.id}`}
                      className="inline-flex items-center text-orange-300 hover:text-white font-medium"
                    >
                      Explore Destination
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join The Cultural Circuit
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Connect with artisans, discover hidden gems, and immerse yourself in 
            the authentic cultural experiences of India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/marketplace"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center"
            >
              <ShoppingBagIcon className="w-5 h-5 mr-2" />
              Shop Artisan Products
            </Link>
            <Link
              to="/blog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center"
            >
              <BookOpenIcon className="w-5 h-5 mr-2" />
              Read Cultural Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
