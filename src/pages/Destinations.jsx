import { useState } from 'react'
import { 
  MapPinIcon, 
  StarIcon, 
  MagnifyingGlassIcon,
  HeartIcon,
  ArrowRightIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'north', name: 'North India' },
    { id: 'south', name: 'South India' },
    { id: 'east', name: 'East India' },
    { id: 'west', name: 'West India' },
    { id: 'northeast', name: 'Northeast India' },
    { id: 'central', name: 'Central India' }
  ]

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'spiritual', name: 'Spiritual' },
    { id: 'heritage', name: 'Heritage' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'artisan', name: 'Artisan Villages' },
    { id: 'festival', name: 'Festival Destinations' }
  ]

  const destinations = [
    {
      id: 1,
      name: 'Varanasi',
      state: 'Uttar Pradesh',
      region: 'north',
      type: 'spiritual',
      description: 'The spiritual capital of India, where the sacred Ganges flows and ancient traditions come alive.',
      highlights: ['Ganga Aarti', 'Ancient Temples', 'Ghats', 'Spiritual Ceremonies'],
      bestTime: 'October to March',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      name: 'Jaipur',
      state: 'Rajasthan',
      region: 'north',
      type: 'heritage',
      description: 'The Pink City, a magnificent blend of royal heritage, stunning architecture, and vibrant culture.',
      highlights: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Traditional Markets'],
      bestTime: 'October to March',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 3,
      name: 'Kerala Backwaters',
      state: 'Kerala',
      region: 'south',
      type: 'cultural',
      description: 'Experience the serene backwaters and traditional houseboat cruises in God\'s Own Country.',
      highlights: ['Houseboat Cruises', 'Ayurvedic Treatments', 'Traditional Dance', 'Spice Plantations'],
      bestTime: 'September to March',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 4,
      name: 'Kolkata',
      state: 'West Bengal',
      region: 'east',
      type: 'cultural',
      description: 'The cultural capital of India, known for its intellectual heritage, literature, and artistic traditions.',
      highlights: ['Durga Puja', 'Literary Heritage', 'Colonial Architecture', 'Street Food'],
      bestTime: 'October to March',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 5,
      name: 'Mumbai',
      state: 'Maharashtra',
      region: 'west',
      type: 'cultural',
      description: 'The city of dreams, where tradition meets modernity in a vibrant cultural melting pot.',
      highlights: ['Ganesh Chaturthi', 'Bollywood', 'Street Food', 'Marine Drive'],
      bestTime: 'October to February',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 6,
      name: 'Kaziranga',
      state: 'Assam',
      region: 'northeast',
      type: 'cultural',
      description: 'A UNESCO World Heritage site known for its one-horned rhinoceros and rich biodiversity.',
      highlights: ['Wildlife Safari', 'Tea Gardens', 'Bihu Festival', 'Tribal Culture'],
      bestTime: 'November to April',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: false
    }
  ]

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.highlights.some(highlight => highlight.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesRegion = selectedRegion === 'all' || destination.region === selectedRegion
    const matchesType = selectedType === 'all' || destination.type === selectedType
    return matchesSearch && matchesRegion && matchesType
  })

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cultural Destinations
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Explore the diverse cultural landscapes and heritage sites that make India truly extraordinary
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              {regions.map(region => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              {types.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center text-sm text-gray-600">
              {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Featured Destinations */}
        {filteredDestinations.filter(d => d.featured).length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Destinations</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredDestinations.filter(d => d.featured).map((destination) => (
                <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 relative">
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {destination.state}
                        </div>
                        <div className="flex items-center">
                          <StarIcon className="w-4 h-4 mr-1 text-yellow-300" />
                          {destination.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <GlobeAltIcon className="w-4 h-4 mr-1" />
                        Best Time: {destination.bestTime}
                      </div>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Destination Image */}
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                {destination.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <button className="text-white hover:text-red-400 transition-colors">
                    <HeartIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{destination.name}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {destination.state}
                    </div>
                    <div className="flex items-center">
                      <StarIcon className="w-4 h-4 mr-1 text-yellow-300" />
                      {destination.rating}
                    </div>
                  </div>
                </div>
              </div>

              {/* Destination Details */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {destination.description}
                </p>

                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Highlights
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{destination.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Best Time to Visit
                  </span>
                  <p className="text-sm text-gray-700">{destination.bestTime}</p>
                </div>

                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center">
                  Explore Destination
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MapPinIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No destinations found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Destinations
