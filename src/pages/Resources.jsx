import { useState } from 'react'
import { 
  AcademicCapIcon, 
  DocumentTextIcon, 
  LinkIcon, 
  BookOpenIcon,
  DownloadIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'books', name: 'Books & Literature' },
    { id: 'videos', name: 'Videos & Documentaries' },
    { id: 'research', name: 'Research Papers' },
    { id: 'guides', name: 'Travel Guides' },
    { id: 'art', name: 'Art & Crafts' }
  ]

  const resources = [
    {
      id: 1,
      title: 'The Art of Indian Textiles: A Comprehensive Guide',
      type: 'books',
      category: 'books',
      description: 'Explore the rich history and techniques of Indian textile traditions from ancient times to modern practices.',
      format: 'PDF',
      size: '15.2 MB',
      downloads: 1247,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Festivals of India: Cultural Significance and Traditions',
      type: 'videos',
      category: 'videos',
      description: 'A documentary series exploring the deep cultural significance of major Indian festivals.',
      format: 'Video Series',
      duration: '2h 15m',
      views: 8923,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Traditional Indian Architecture: From Temples to Palaces',
      type: 'research',
      category: 'research',
      description: 'Academic research on the evolution of Indian architectural styles and their cultural context.',
      format: 'Research Paper',
      pages: 45,
      citations: 156,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Cultural Heritage Sites of India: Travel Guide',
      type: 'guides',
      category: 'guides',
      description: 'A comprehensive guide to UNESCO World Heritage sites and cultural landmarks across India.',
      format: 'Interactive Guide',
      locations: 38,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Traditional Indian Art Forms: Techniques and History',
      type: 'art',
      category: 'art',
      description: 'Learn about various traditional art forms including Madhubani, Warli, and Tanjore painting.',
      format: 'Tutorial Series',
      lessons: 12,
      duration: '8h 30m',
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Indian Classical Music: Theory and Practice',
      type: 'books',
      category: 'books',
      description: 'A detailed exploration of Indian classical music traditions, ragas, and instruments.',
      format: 'E-Book',
      pages: 320,
      audio: 'Included',
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop'
    }
  ]

  const externalLinks = [
    {
      id: 1,
      title: 'Ministry of Culture, Government of India',
      url: 'https://indiaculture.gov.in',
      description: 'Official portal for Indian cultural heritage and initiatives',
      category: 'Government'
    },
    {
      id: 2,
      title: 'UNESCO World Heritage Sites in India',
      url: 'https://whc.unesco.org/en/statesparties/in',
      description: 'Complete list of UNESCO World Heritage sites in India',
      category: 'International'
    },
    {
      id: 3,
      title: 'National Museum, New Delhi',
      url: 'https://nationalmuseumindia.gov.in',
      description: 'Explore India\'s largest museum with extensive cultural collections',
      category: 'Museum'
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cultural Resources
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Access curated educational materials, research papers, and resources to deepen your understanding of Indian culture
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {categories.find(cat => cat.id === resource.category)?.name}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {resource.format}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <DownloadIcon className="w-4 h-4 mr-1" />
                    {resource.downloads || resource.views || resource.citations} {resource.downloads ? 'downloads' : resource.views ? 'views' : 'citations'}
                  </div>
                  <div className="flex items-center">
                    {resource.size && (
                      <span>{resource.size}</span>
                    )}
                    {resource.duration && (
                      <span>{resource.duration}</span>
                    )}
                    {resource.pages && (
                      <span>{resource.pages} pages</span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Access Resource
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* External Links */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <LinkIcon className="w-6 h-6 mr-2 text-orange-600" />
            External Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {externalLinks.map((link) => (
              <div key={link.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{link.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                    {link.category}
                  </span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Visit Site →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
