import { useState } from 'react'
import { 
  ShoppingBagIcon, 
  StarIcon, 
  HeartIcon,
  MagnifyingGlassIcon,
  FilterIcon
} from '@heroicons/react/24/outline'

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'textiles', name: 'Textiles & Fabrics' },
    { id: 'jewelry', name: 'Jewelry & Accessories' },
    { id: 'pottery', name: 'Pottery & Ceramics' },
    { id: 'art', name: 'Art & Paintings' },
    { id: 'home', name: 'Home Decor' }
  ]

  const products = [
    {
      id: 1,
      name: 'Handwoven Silk Saree',
      artisan: 'Meera Textiles',
      category: 'textiles',
      price: 2500,
      originalPrice: 3000,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=400&fit=crop',
      description: 'Traditional handwoven silk saree with intricate zari work'
    },
    {
      id: 2,
      name: 'Silver Filigree Necklace',
      artisan: 'Rajasthan Crafts',
      category: 'jewelry',
      price: 1800,
      originalPrice: 2200,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=400&fit=crop',
      description: 'Delicate silver filigree necklace with traditional motifs'
    },
    {
      id: 3,
      name: 'Blue Pottery Vase',
      artisan: 'Jaipur Pottery',
      category: 'pottery',
      price: 1200,
      originalPrice: 1500,
      rating: 4.7,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=400&fit=crop',
      description: 'Handcrafted blue pottery vase with traditional designs'
    },
    {
      id: 4,
      name: 'Madhubani Painting',
      artisan: 'Bihar Artisans',
      category: 'art',
      price: 3500,
      originalPrice: 4000,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=400&fit=crop',
      description: 'Authentic Madhubani painting on handmade paper'
    },
    {
      id: 5,
      name: 'Brass Diya Set',
      artisan: 'Moradabad Brass',
      category: 'home',
      price: 800,
      originalPrice: 1000,
      rating: 4.5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=400&fit=crop',
      description: 'Traditional brass diya set for spiritual ceremonies'
    },
    {
      id: 6,
      name: 'Handloom Cotton Kurta',
      artisan: 'Kerala Weavers',
      category: 'textiles',
      price: 1500,
      originalPrice: 1800,
      rating: 4.4,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1580477662796-5c5c0c8b0b0b?w=400&h=400&fit=crop',
      description: 'Comfortable handloom cotton kurta with natural dyes'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Artisan Marketplace
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Discover authentic handcrafted products directly from skilled artisans across India
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
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

            <div className="flex items-center justify-center text-sm text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Product Image */}
              <div className="relative">
                <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500">
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="text-white hover:text-red-400 transition-colors">
                    <HeartIcon className="w-5 h-5" />
                  </button>
                </div>
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.artisan}</p>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center">
                  <ShoppingBagIcon className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <ShoppingBagIcon className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
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

export default Marketplace
