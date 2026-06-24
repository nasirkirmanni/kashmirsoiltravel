import { Link } from 'react-router-dom';
import { Map, Calendar, Sun, Snowflake, Users, Heart } from 'lucide-react';

const categories = [
  { id: 'honeymoon', name: 'Kashmir Honeymoon Packages', icon: Heart },
  { id: 'family', name: 'Family Tours', icon: Users },
  { id: 'winter', name: 'Winter & Snow Packages', icon: Snowflake },
  { id: 'summer', name: 'Summer Packages', icon: Sun },
];

const packages = [
  {
    id: 1,
    title: 'Kashmir Honeymoon Special',
    duration: '5 Days / 4 Nights',
    price: '₹15,999',
    destinations: 'Srinagar, Gulmarg, Pahalgam',
    category: 'Honeymoon',
    imageSrc: './images/honeymoon-tour.png'
  },
  {
    id: 2,
    title: 'Family Summer Retreat',
    duration: '7 Days / 6 Nights',
    price: '₹22,500',
    destinations: 'Srinagar, Sonamarg, Gulmarg, Pahalgam',
    category: 'Family',
    imageSrc: './images/family-tour.png'
  },
  {
    id: 3,
    title: 'Winter Wonderland Ski Tour',
    duration: '6 Days / 5 Nights',
    price: '₹28,999',
    destinations: 'Srinagar, Gulmarg',
    category: 'Winter',
    imageSrc: './images/winter-tour.png'
  },
  {
    id: 4,
    title: 'Tulip Garden Special',
    duration: '4 Days / 3 Nights',
    price: '₹12,500',
    destinations: 'Srinagar, Dal Lake',
    category: 'Summer',
    imageSrc: './images/tulip-tour.png'
  }
];

export default function Packages() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">Kashmir Tour Packages</h1>
        <p className="text-brand-text max-w-2xl mx-auto">
          Discover our handcrafted itineraries designed to offer you the best of Kashmir. Whether you're seeking romance, adventure, or family fun, we have the perfect package for you.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button key={cat.id} className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-brand-dark/5 hover:border-brand-accent hover:shadow-md transition-all group">
              <Icon className="w-8 h-8 text-brand-heading mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-brand-dark text-center">{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-brand-dark/5 flex flex-col">
            <div className="h-56 relative flex items-center justify-center">
              <img src={pkg.imageSrc} alt={pkg.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-heading">
                {pkg.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                <span className="flex items-center gap-1 text-xs font-semibold text-brand-text">
                  <Calendar className="w-3 h-3" />
                  {pkg.duration}
                </span>
                <span className="text-brand-dark font-bold text-lg">{pkg.price}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-brand-dark mb-3">{pkg.title}</h3>
              
              <div className="flex items-start gap-2 mb-6">
                <Map className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <p className="text-sm text-brand-text">{pkg.destinations}</p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-brand-dark/10 flex items-center justify-between">
                <Link to={`/packages/${pkg.id}`} className="text-brand-heading text-sm font-semibold hover:text-brand-hover">
                  View Itinerary
                </Link>
                <Link to="/contact" className="bg-brand-dark hover:bg-brand-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
