# The Cultural Circuit

A comprehensive web platform dedicated to preserving, promoting, and celebrating India's rich cultural heritage. The Cultural Circuit connects readers, festival enthusiasts, tourists, educators, and local artisans through content, multimedia, events, and a vendor marketplace.

## 🌟 Features

### Core Functionality
- **Cultural Blog**: Articles, stories, and insights about Indian traditions
- **Festival Directory**: Comprehensive database of Indian festivals with details
- **Tour Destinations**: Cultural heritage sites and travel recommendations
- **Artisan Marketplace**: Direct platform for handcrafted products
- **Cultural Calendar**: Event scheduling and Google Calendar integration
- **Educational Resources**: Curated learning materials and external links
- **Admin Dashboard**: Content and user management system

### User Roles
- **Cultural Enthusiasts**: Read articles, watch videos, subscribe to festival alerts
- **Travelers**: Search tour destinations and local experiences
- **Vendors/Artisans**: List and sell handcrafted items
- **Organizers**: Post events, workshops, and festival schedules
- **Educators/Researchers**: Access resources and references
- **Administrators**: Manage platform content and users

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TCC-Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation, Footer
│   ├── ui/             # Reusable UI components
│   ├── blog/           # Blog-related components
│   ├── festivals/      # Festival components
│   ├── destinations/   # Destination components
│   ├── marketplace/    # Marketplace components
│   └── calendar/       # Calendar components
├── pages/              # Main page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── context/            # React context providers
└── assets/             # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#f97316) - Represents warmth and energy
- **Secondary**: Red (#dc2626) - Symbolizes passion and tradition
- **Accent**: Yellow (#eab308) - Represents prosperity and joy
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable font for content
- **Accent**: Decorative elements for cultural flair

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with orange focus states
- **Navigation**: Responsive design with mobile menu

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layouts for medium screens
- **Mobile**: Touch-friendly interface with collapsible menus

## 🔧 Technology Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Heroicons** - Beautiful SVG icons
- **React Hook Form** - Form handling and validation
- **React Hot Toast** - User notifications
- **Framer Motion** - Smooth animations

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Type safety (can be added)
- **Prettier** - Code formatting (can be added)

## 🌐 Key Pages

### Home Page (`/`)
- Hero section with cultural imagery
- Featured festivals and destinations
- Statistics and call-to-action sections

### Blog (`/blog`)
- Article listings with search and filtering
- Category-based organization
- Author information and reading time

### Festivals (`/festivals`)
- Comprehensive festival database
- Regional and monthly filtering
- Detailed festival information

### Destinations (`/destinations`)
- Cultural heritage sites
- Travel recommendations
- Interactive maps and galleries

### Marketplace (`/marketplace`)
- Artisan product listings
- Category filtering and search
- Product details and reviews

### Calendar (`/calendar`)
- Interactive calendar view
- Event management
- Google Calendar integration

### Resources (`/resources`)
- Educational materials
- External links and references
- Downloadable content

### Authentication (`/auth`)
- User registration and login
- Google OAuth integration
- Password recovery

### Admin Dashboard (`/admin`)
- User management
- Content moderation
- Analytics and reporting

## 🔐 Authentication & Authorization

### User Roles
- **Guest**: Browse public content
- **User**: Access personalized features
- **Vendor**: Manage product listings
- **Admin**: Full platform access

### Security Features
- JWT token-based authentication
- Role-based access control
- Secure password handling
- OAuth integration

## 📊 Data Management

### Content Types
- **Articles**: Blog posts and cultural stories
- **Festivals**: Event information and schedules
- **Destinations**: Location data and descriptions
- **Products**: Artisan marketplace items
- **Users**: User profiles and preferences
- **Events**: Calendar events and workshops

### Data Sources
- Static data for MVP (can be replaced with API)
- External APIs for maps and calendars
- File uploads for images and documents

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Vercel**: Zero-config deployment
- **Netlify**: Static site hosting
- **AWS S3**: Cloud storage with CloudFront
- **Heroku**: Container-based deployment

### Environment Variables
```env
VITE_API_URL=your-api-endpoint
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_STRIPE_PUBLIC_KEY=your-stripe-key
```

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Standards
- Follow ESLint configuration
- Use meaningful commit messages
- Write clear component documentation
- Maintain responsive design principles

## 📈 Future Enhancements

### Phase 2 Features
- **Real-time Chat**: Vendor-customer communication
- **Video Content**: Cultural documentaries and tutorials
- **Mobile App**: Native iOS and Android applications
- **AI Recommendations**: Personalized content suggestions
- **Payment Integration**: Stripe for marketplace transactions
- **Multi-language Support**: Regional language content

### Technical Improvements
- **Backend API**: Node.js/Express or Python/Django
- **Database**: PostgreSQL with Redis caching
- **Search**: Elasticsearch for advanced search
- **CDN**: CloudFront for global content delivery
- **Analytics**: Google Analytics and custom tracking

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Indian Cultural Heritage**: Inspired by the rich traditions of India
- **Open Source Community**: Built with amazing open-source tools
- **Design Inspiration**: Cultural motifs and traditional patterns
- **User Research**: Feedback from cultural enthusiasts and artisans

## 📞 Support

For support and questions:
- **Email**: hello@culturalcircuit.in
- **Documentation**: [Project Wiki](wiki-url)
- **Issues**: [GitHub Issues](issues-url)

---

**The Cultural Circuit** - Preserving India's Heritage, One Story at a Time 🌟
