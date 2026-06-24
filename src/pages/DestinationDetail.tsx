import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Camera, Info } from 'lucide-react';
import { destinations } from './Destinations';

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  return (
    <div className="bg-[#f4f7f4] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
        {destination.imageSrc ? (
          <img 
            src={destination.imageSrc} 
            alt={destination.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`w-full h-full ${destination.image} flex items-center justify-center`}>
            <span className="text-brand-dark/20 text-4xl font-bold">Image Placeholder</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 md:px-10 pb-16 max-w-7xl mx-auto w-full">
          <Link to="/destinations" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium w-fit">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Destinations
          </Link>
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-3 block">{destination.tagline}</span>
          <h1 className="text-5xl md:text-7xl font-display text-white drop-shadow-lg">{destination.name}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-brand-dark/5">
              <h2 className="text-3xl font-display text-brand-dark mb-6">Overview</h2>
              <p className="text-brand-text text-lg leading-relaxed mb-6">
                {destination.description}
              </p>
              <p className="text-brand-text text-lg leading-relaxed">
                Discover the untouched beauty and rich cultural heritage of {destination.name}. Whether you're seeking a peaceful retreat or a thrilling adventure, this breathtaking destination offers an unforgettable experience for every kind of traveler. From pristine landscapes to local culinary delights, immerse yourself in the true essence of Kashmir.
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-brand-dark/5">
              <h2 className="text-3xl font-display text-brand-dark mb-6">What to Expect</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-brand-accent/20 p-3 rounded-xl mr-4 text-brand-heading">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark text-lg mb-1">Scenic Views</h3>
                    <p className="text-brand-text text-sm">Perfect spots for photography and nature walks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-med/20 p-3 rounded-xl mr-4 text-brand-heading">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark text-lg mb-1">Local Culture</h3>
                    <p className="text-brand-text text-sm">Experience authentic Kashmiri hospitality.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-heading/20 p-3 rounded-xl mr-4 text-brand-heading">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark text-lg mb-1">Year-round Beauty</h3>
                    <p className="text-brand-text text-sm">Stunning in both summer greens and winter snow.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-dark/10 p-3 rounded-xl mr-4 text-brand-heading">
                    <Info className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark text-lg mb-1">Guided Tours</h3>
                    <p className="text-brand-text text-sm">Expert local guides available to show you around.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-brand-dark text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-display mb-4">Ready to visit {destination.name}?</h3>
              <p className="text-white/80 mb-8 text-sm leading-relaxed">
                Let us plan the perfect itinerary for you. Our local experts will ensure you don't miss any of the hidden gems.
              </p>
              <Link 
                to={`/contact?destination=${destination.id}`}
                className="block w-full text-center bg-brand-accent hover:bg-[#a6d1ad] text-brand-dark font-bold text-lg py-4 px-6 rounded-full transition-colors"
              >
                Plan Your Trip
              </Link>
              
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-xs text-white/60 mb-2">Need immediate assistance?</p>
                <p className="font-medium">+91 98765 43210</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
