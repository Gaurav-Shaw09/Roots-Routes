import { useState } from 'react'
import { 
  MagnifyingGlassIcon, 
  CalendarIcon, 
  UserIcon, 
  TagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'festivals', name: 'Festivals' },
    { id: 'traditions', name: 'Traditions' },
    { id: 'artisans', name: 'Artisans' },
    { id: 'destinations', name: 'Destinations' },
    { id: 'food', name: 'Food & Cuisine' }
  ]

  const articles = [
    {
      id: 1,
      title: 'The Sacred Rituals of Diwali: A Deep Dive into India\'s Festival of Lights',
      excerpt: 'Explore the ancient traditions and spiritual significance behind one of India\'s most beloved festivals...',
      author: 'Dr. Priya Sharma',
      date: 'November 1, 2024',
      category: 'festivals',
      tags: ['Diwali', 'Festivals', 'Spirituality'],
      image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400&h=250&fit=crop',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Handloom Weaving: The Art of Creating Magic with Threads',
      excerpt: 'Discover the intricate world of handloom weaving and meet the master artisans keeping this ancient craft alive...',
      author: 'Rajesh Kumar',
      date: 'October 28, 2024',
      category: 'artisans',
      tags: ['Handloom', 'Weaving', 'Artisans'],
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Varanasi: Where Time Stands Still in the Eternal City',
      excerpt: 'Journey through the spiritual heart of India and experience the timeless traditions of Varanasi...',
      author: 'Meera Patel',
      date: 'October 25, 2024',
      category: 'destinations',
      tags: ['Varanasi', 'Spirituality', 'Travel'],
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'The Art of Ayurvedic Cooking: Nourishing Body and Soul',
      excerpt: 'Learn about the ancient wisdom of Ayurvedic cooking and its role in maintaining health and wellness...',
      author: 'Chef Anjali Desai',
      date: 'October 22, 2024',
      category: 'food',
      tags: ['Ayurveda', 'Cooking', 'Wellness'],
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Holi: Beyond Colors - The Cultural Significance of Spring\'s Festival',
      excerpt: 'Uncover the deeper meaning and historical roots of Holi, India\'s most colorful celebration...',
      author: 'Prof. Amit Singh',
      date: 'October 20, 2024',
      category: 'festivals',
      tags: ['Holi', 'Spring', 'Celebration'],
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Traditional Pottery: Shaping Clay into Cultural Heritage',
      excerpt: 'Meet the potters who continue to create beautiful vessels using techniques passed down through generations...',
      author: 'Lakshmi Devi',
      date: 'October 18, 2024',
      category: 'artisans',
      tags: ['Pottery', 'Crafts', 'Heritage'],
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=250&fit=crop',
      readTime: '5 min read'
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cultural Blog
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Discover stories, traditions, and insights that celebrate India's rich cultural heritage
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
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
          
          <div className="text-sm text-gray-600">
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Article Image */}
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {categories.find(cat => cat.id === article.category)?.name}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>

                {/* Read More Button */}
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center">
                  Read Article
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors">
              Load More Articles
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MagnifyingGlassIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
