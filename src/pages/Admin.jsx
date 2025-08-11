import { useState } from 'react'
import { 
  UsersIcon, 
  DocumentTextIcon, 
  ShoppingBagIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline'

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const stats = [
    { name: 'Total Users', value: '2,847', change: '+12%', changeType: 'positive' },
    { name: 'Active Vendors', value: '156', change: '+8%', changeType: 'positive' },
    { name: 'Total Products', value: '1,234', change: '+15%', changeType: 'positive' },
    { name: 'Monthly Revenue', value: '₹45,678', change: '+23%', changeType: 'positive' }
  ]

  const recentUsers = [
    { id: 1, name: 'Priya Sharma', email: 'priya@example.com', role: 'User', status: 'Active', date: '2024-01-15' },
    { id: 2, name: 'Rajesh Kumar', email: 'rajesh@example.com', role: 'Vendor', status: 'Pending', date: '2024-01-14' },
    { id: 3, name: 'Meera Patel', email: 'meera@example.com', role: 'User', status: 'Active', date: '2024-01-13' },
    { id: 4, name: 'Amit Singh', email: 'amit@example.com', role: 'Vendor', status: 'Approved', date: '2024-01-12' }
  ]

  const pendingVendors = [
    { id: 1, name: 'Rajasthan Crafts', email: 'contact@rajasthancrafts.com', products: 45, status: 'Pending Review' },
    { id: 2, name: 'Kerala Weavers', email: 'info@keralaweavers.com', products: 23, status: 'Documents Required' },
    { id: 3, name: 'Bihar Artisans', email: 'hello@biharartisans.com', products: 67, status: 'Pending Review' }
  ]

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: ChartBarIcon },
    { id: 'users', name: 'Users', icon: UsersIcon },
    { id: 'vendors', name: 'Vendors', icon: ShoppingBagIcon },
    { id: 'content', name: 'Content', icon: DocumentTextIcon },
    { id: 'events', name: 'Events', icon: CalendarIcon },
    { id: 'settings', name: 'Settings', icon: CogIcon }
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    user.status === 'Active' ? 'bg-green-100 text-green-800' :
                    user.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {user.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{user.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Vendor Approvals</h3>
          <div className="space-y-4">
            {pendingVendors.map((vendor) => (
              <div key={vendor.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{vendor.name}</h4>
                  <span className="text-sm text-gray-600">{vendor.products} products</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{vendor.email}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    {vendor.status}
                  </span>
                  <div className="space-x-2">
                    <button className="text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                      Approve
                    </button>
                    <button className="text-xs bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderUsers = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">{user.role}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    user.status === 'Active' ? 'bg-green-100 text-green-800' :
                    user.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-orange-600 hover:text-orange-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderContent = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Management</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Blog Posts</h4>
          <p className="text-2xl font-bold text-orange-600">24</p>
          <p className="text-sm text-gray-600">Published articles</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Festivals</h4>
          <p className="text-2xl font-bold text-orange-600">156</p>
          <p className="text-sm text-gray-600">Listed festivals</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Resources</h4>
          <p className="text-2xl font-bold text-orange-600">89</p>
          <p className="text-sm text-gray-600">Available resources</p>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'users':
        return renderUsers()
      case 'content':
        return renderContent()
      default:
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{tabs.find(tab => tab.id === activeTab)?.name}</h3>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Manage users, content, vendors, and platform settings
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  )
}

export default Admin
