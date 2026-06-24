import { Link } from 'react-router-dom';
import { Navigation } from 'lucide-react';

export const destinations = [
  {
    id: 'srinagar',
    name: 'Srinagar',
    tagline: 'The Summer Capital',
    description: 'Experience the magic of Dal Lake, vibrant Mughal gardens, and historic wooden architecture.',
    imageSrc: './images/dest_srinagar_1782307044128.png'
  },
  {
    id: 'gulmarg',
    name: 'Gulmarg',
    tagline: 'Meadow of Flowers',
    description: 'A premier hill station known for world-class skiing, the famous Gondola ride, and stunning snow peaks.',
    imageSrc: './images/dest_gulmarg_1782307057366.png'
  },
  {
    id: 'pahalgam',
    name: 'Pahalgam',
    tagline: 'Valley of Shepherds',
    description: 'A picturesque destination with lush green meadows, pristine waters, and the starting point of the Amarnath Yatra.',
    imageSrc: './images/dest_pahalgam_1782307070392.png'
  },
  {
    id: 'sonamarg',
    name: 'Sonamarg',
    tagline: 'Meadow of Gold',
    description: 'A mesmerizing valley surrounded by glaciers and alpine meadows, perfect for trekking and camping.',
    imageSrc: './images/family-tour.png'
  },
  {
    id: 'doodhpathri',
    name: 'Doodhpathri',
    tagline: 'Valley of Milk',
    description: 'A beautiful bowl-shaped valley known for its emerald green meadows and icy streams.',
    imageSrc: './images/service_tour_package_1782306220057.png'
  },
  {
    id: 'gurez',
    name: 'Gurez Valley',
    tagline: 'The Hidden Gem',
    description: 'An offbeat destination with rugged mountains, the Kishanganga river, and unique Dard-Shina culture.',
    imageSrc: './images/winter-tour.png'
  }
];

export default function Destinations() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">Explore Destinations</h1>
        <p className="text-brand-text max-w-2xl mx-auto">
          From the serene lakes of Srinagar to the snowy peaks of Gulmarg, discover the breathtaking locations that make Kashmir a paradise on earth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <Link key={dest.id} to={`/destinations/${dest.id}`} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              {dest.imageSrc ? (
                <img src={dest.imageSrc} alt={dest.name} className="w-full h-full object-cover" />
              ) : (
                <div className={`w-full h-full ${dest.image} flex items-center justify-center text-brand-dark/30 font-medium text-sm`}>
                  Image: {dest.name}
                </div>
              )}
            </div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            <div className="absolute inset-x-0 bottom-0 p-8">
              <span className="text-brand-accent text-sm font-semibold mb-2 block">{dest.tagline}</span>
              <h3 className="text-3xl font-display text-white mb-3">{dest.name}</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2 transition-all duration-300 transform translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                {dest.description}
              </p>
              <div className="flex items-center text-white text-sm font-medium">
                <Navigation className="w-4 h-4 mr-2" />
                Explore Guide
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
