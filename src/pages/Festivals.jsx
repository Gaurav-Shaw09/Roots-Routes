import { useState } from 'react'
import { 
  CalendarIcon, 
  MapPinIcon, 
  ClockIcon, 
  StarIcon,
  FilterIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const Festivals = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedMonth, setSelectedMonth] = useState('all')

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'north', name: 'North India' },
    { id: 'south', name: 'South India' },
    { id: 'east', name: 'East India' },
    { id: 'west', name: 'West India' },
    { id: 'northeast', name: 'Northeast India' },
    { id: 'pan-india', name: 'Pan India' }
  ]

  const months = [
    { id: 'all', name: 'All Months' },
    { id: 'january', name: 'January' },
    { id: 'february', name: 'February' },
    { id: 'march', name: 'March' },
    { id: 'april', name: 'April' },
    { id: 'may', name: 'May' },
    { id: 'june', name: 'June' },
    { id: 'july', name: 'July' },
    { id: 'august', name: 'August' },
    { id: 'september', name: 'September' },
    { id: 'october', name: 'October' },
    { id: 'november', name: 'November' },
    { id: 'december', name: 'December' }
  ]

  const festivals = [
    {
      id: 1,
      name: 'Diwali - Festival of Lights',
      date: 'November 1, 2024',
      month: 'november',
      region: 'pan-india',
      location: 'Pan India',
      duration: '5 days',
      description: 'The most significant festival in India, celebrating the victory of light over darkness and good over evil.',
      significance: 'Spiritual, Cultural',
      highlights: ['Lighting diyas', 'Fireworks', 'Family gatherings', 'Sweets exchange'],
      image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      name: 'Holi - Festival of Colors',
      date: 'March 25, 2024',
      month: 'march',
      region: 'pan-india',
      location: 'Pan India',
      duration: '2 days',
      description: 'A vibrant celebration of spring, love, and the triumph of good over evil through colors and joy.',
      significance: 'Cultural, Social',
      highlights: ['Color throwing', 'Bonfire (Holika Dahan)', 'Traditional sweets', 'Music and dance'],
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 3,
      name: 'Pongal - Harvest Festival',
      date: 'January 15, 2024',
      month: 'january',
      region: 'south',
      location: 'Tamil Nadu',
      duration: '4 days',
      description: 'A four-day harvest festival celebrated in Tamil Nadu to thank the Sun God for agricultural abundance.',
      significance: 'Agricultural, Cultural',
      highlights: ['Pongal cooking', 'Cattle decoration', 'Kolam designs', 'Traditional games'],
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 4,
      name: 'Durga Puja',
      date: 'October 20, 2024',
      month: 'october',
      region: 'east',
      location: 'West Bengal',
      duration: '10 days',
      description: 'A grand celebration honoring Goddess Durga and her victory over the demon Mahishasura.',
      significance: 'Religious, Cultural',
      highlights: ['Pandal decorations', 'Cultural programs', 'Traditional food', 'Immersion ceremony'],
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 5,
      name: 'Ganesh Chaturthi',
      date: 'September 7, 2024',
      month: 'september',
      region: 'west',
      location: 'Maharashtra',
      duration: '11 days',
      description: 'Celebration of Lord Ganesha\'s birth with elaborate decorations and cultural performances.',
      significance: 'Religious, Cultural',
      highlights: ['Ganesh idol installation', 'Modak preparation', 'Cultural events', 'Immersion procession'],
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 6,
      name: 'Bihu',
      date: 'April 14, 2024',
      month: 'april',
      region: 'northeast',
      location: 'Assam',
      duration: '7 days',
      description: 'Three Bihu festivals celebrate the agricultural cycle and cultural heritage of Assam.',
      significance: 'Agricultural, Cultural',
      highlights: ['Bihu dance', 'Traditional music', 'Feast preparation', 'Community celebrations'],
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=300&fit=crop',
      featured: false
    }
  ]

  const filteredFestivals = festivals.filter(festival => {
    const matchesSearch = festival.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         festival.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === 'all' || festival.region === selectedRegion
    const matchesMonth = selectedMonth === 'all' || festival.month === selectedMonth
    return matchesSearch && matchesRegion && matchesMonth
  })

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Indian Festivals
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Discover the vibrant celebrations that bring India's diverse cultures to life throughout the year
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
                placeholder="Search festivals..."
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

            {/* Month Filter */}
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              {months.map(month => (
                <option key={month.id} value={month.id}>
                  {month.name}
                </option>
              ))}
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center text-sm text-gray-600">
              {filteredFestivals.length} festival{filteredFestivals.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Featured Festivals */}
        {filteredFestivals.filter(f => f.featured).length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Festivals</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredFestivals.filter(f => f.featured).map((festival) => (
                <div key={festival.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 relative">
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{festival.name}</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {festival.date}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {festival.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{festival.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {festival.duration}
                      </div>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFestivals.map((festival) => (
            <div key={festival.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Festival Image */}
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                {festival.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{festival.name}</h3>
                  <div className="flex items-center text-sm">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {festival.location}
                  </div>
                </div>
              </div>

              {/* Festival Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {festival.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {festival.duration}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {festival.description}
                </p>

                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Significance
                  </span>
                  <p className="text-sm text-gray-700">{festival.significance}</p>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Highlights
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {festival.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                    {festival.highlights.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{festival.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFestivals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <CalendarIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No festivals found
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

export default Festivals
