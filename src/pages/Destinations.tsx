import { Link } from 'react-router-dom';
import { Navigation } from 'lucide-react';

const destinations = [
  {
    id: 'srinagar',
    name: 'Srinagar',
    tagline: 'The Summer Capital',
    description: 'Famous for its gardens, waterfronts, and houseboats. Enjoy a Shikara ride on the serene Dal Lake.',
    image: 'bg-[#85AB8B]/30'
  },
  {
    id: 'gulmarg',
    name: 'Gulmarg',
    tagline: 'Meadow of Flowers',
    description: 'A popular skiing destination featuring the world\'s highest golf course and the famous Gondola ride.',
    image: 'bg-[#336443]/30'
  },
  {
    id: 'pahalgam',
    name: 'Pahalgam',
    tagline: 'Valley of Shepherds',
    description: 'A picturesque destination with lush green meadows, pristine waters, and the starting point of the Amarnath Yatra.',
    image: 'bg-[#4b5b47]/30'
  },
  {
    id: 'sonamarg',
    name: 'Sonamarg',
    tagline: 'Meadow of Gold',
    description: 'A mesmerizing valley surrounded by glaciers and alpine meadows, perfect for trekking and camping.',
    image: 'bg-[#2d3a2a]/30'
  },
  {
    id: 'doodhpathri',
    name: 'Doodhpathri',
    tagline: 'Valley of Milk',
    description: 'A beautiful bowl-shaped valley known for its emerald green meadows and icy streams.',
    image: 'bg-[#1f2a1d]/30'
  },
  {
    id: 'gurez',
    name: 'Gurez Valley',
    tagline: 'The Hidden Gem',
    description: 'An offbeat destination with rugged mountains, the Kishanganga river, and unique Dard-Shina culture.',
    image: 'bg-[#3d5638]/30'
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
          <Link key={dest.id} to={`/destinations/${dest.id}`} className="group rounded-2xl overflow-hidden relative h-96 block shadow-sm hover:shadow-xl transition-shadow">
            <div className={`absolute inset-0 ${dest.image} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}>
              <span className="text-brand-dark/40 font-medium">Image: {dest.name}</span>
            </div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
            
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
