import { useState } from 'react'
import { 
  CalendarIcon, 
  MapPinIcon, 
  ClockIcon, 
  StarIcon,
  PlusIcon
} from '@heroicons/react/24/outline'

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const events = [
    {
      id: 1,
      title: 'Diwali - Festival of Lights',
      date: '2024-11-01',
      time: 'All Day',
      location: 'Pan India',
      type: 'festival',
      description: 'The most significant festival in India, celebrating the victory of light over darkness.'
    },
    {
      id: 2,
      title: 'Holi - Festival of Colors',
      date: '2024-03-25',
      time: 'All Day',
      location: 'Pan India',
      type: 'festival',
      description: 'A vibrant celebration of spring, love, and the triumph of good over evil.'
    },
    {
      id: 3,
      title: 'Durga Puja',
      date: '2024-10-20',
      time: 'All Day',
      location: 'West Bengal',
      type: 'festival',
      description: 'A grand celebration honoring Goddess Durga and her victory over the demon Mahishasura.'
    },
    {
      id: 4,
      title: 'Traditional Art Workshop',
      date: '2024-12-15',
      time: '10:00 AM - 2:00 PM',
      location: 'Delhi',
      type: 'workshop',
      description: 'Learn traditional Indian art forms from master artisans.'
    }
  ]

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay()
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear)
    const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      const dayEvents = events.filter(event => event.date === dateString)
      
      days.push(
        <div key={day} className="p-2 border border-gray-200 min-h-[80px]">
          <div className="text-sm font-medium text-gray-900">{day}</div>
          {dayEvents.map(event => (
            <div key={event.id} className="mt-1">
              <div className="text-xs bg-orange-100 text-orange-700 px-1 py-0.5 rounded truncate">
                {event.title}
              </div>
            </div>
          ))}
        </div>
      )
    }

    return days
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cultural Calendar
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Stay updated with upcoming cultural events, festivals, and workshops throughout the year
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {months[selectedMonth]} {selectedYear}
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      if (selectedMonth === 0) {
                        setSelectedMonth(11)
                        setSelectedYear(selectedYear - 1)
                      } else {
                        setSelectedMonth(selectedMonth - 1)
                      }
                    }}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => {
                      if (selectedMonth === 11) {
                        setSelectedMonth(0)
                        setSelectedYear(selectedYear + 1)
                      } else {
                        setSelectedMonth(selectedMonth + 1)
                      }
                    }}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Day Headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days */}
                {renderCalendar()}
              </div>
            </div>
          </div>

          {/* Events Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Upcoming Events</h3>
                <button className="text-orange-600 hover:text-orange-700">
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {events.slice(0, 5).map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        event.type === 'festival' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex items-center">
                        <CalendarIcon className="w-3 h-3 mr-1" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-3 h-3 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="w-3 h-3 mr-1" />
                        {event.location}
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="mt-3 flex space-x-2">
                      <button className="text-xs bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700 transition-colors">
                        Add to Calendar
                      </button>
                      <button className="text-xs border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-50 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                  View All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
