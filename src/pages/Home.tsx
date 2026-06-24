import { Sparkles, Play, Car, Map as MapIcon, Bed, Train, MapPin, Ship, Plane, Heart } from 'lucide-react';
import BoomerangVideoBg from '../BoomerangVideoBg';
import { Link } from 'react-router-dom';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

export default function Home() {
  return (
    <>
      <section className="relative w-full min-h-screen sm:h-screen overflow-hidden">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />
        
        {/* Hero copy */}
        <div className="relative z-10 flex flex-col items-center text-center pt-32 sm:pt-40 md:pt-48 px-4 sm:px-6">
          <h1
            className="font-normal leading-[0.95] text-brand-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] max-w-5xl"
            style={{ letterSpacing: '-0.035em' }}
          >
            Experience the{' '}
            <span className="text-brand-accent">
              Paradise
              <br className="hidden sm:block" /> on Earth
            </span>
          </h1>
          <p className="mt-6 sm:mt-8 text-white/90 font-medium text-base sm:text-lg md:text-xl leading-relaxed max-w-lg px-2 drop-shadow-md">
            Authentic Kashmiri experiences, personalized itineraries, and unforgettable memories.
          </p>
        </div>

        {/* Bottom-left CTA block */}
        <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm">
          <div className="flex items-center gap-2 text-white/95 mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold sm:font-medium">
              Local Expertise
            </span>
          </div>
          <p className="text-white/85 text-xs leading-relaxed mb-6 max-w-xs font-medium sm:font-normal">
            Kashmir Soil Travels provides end-to-end travel assistance, from premium accommodations to seamless transportation, ensuring a magical journey.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/packages" className="bg-white hover:bg-white/90 text-brand-dark text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm">
              View Packages
            </Link>
            <Link to="/about" className="text-white text-sm font-semibold sm:font-medium hover:opacity-80 transition-opacity">
              Learn More
            </Link>
          </div>
        </div>

        {/* Bottom-right video link */}
        <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-2 text-white/90 text-sm">
          <button className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
            <Play className="w-3 h-3 fill-white text-white ml-0.5" />
          </button>
          <span className="font-medium">Discover Kashmir</span>
          <span className="text-white/60">2:15</span>
        </div>
      </section>

      {/* Popular Packages Preview Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-[#f4f7f4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-brand-dark mb-4">Featured Tours</h2>
            <p className="text-brand-text max-w-2xl mx-auto">Explore our most popular Kashmir tour packages designed to give you the ultimate travel experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for Package Cards */}
            {[
              {
                id: 1,
                title: 'Kashmir Honeymoon Special',
                duration: '5 Days / 4 Nights',
                price: '₹15,999',
                description: 'A romantic getaway to the picturesque valleys of Srinagar, Gulmarg, and Pahalgam.',
                imageSrc: './images/honeymoon.png'
              },
              {
                id: 2,
                title: 'Premium Kashmir Escapade',
                duration: '7 Days / 6 Nights',
                price: '₹35,500',
                description: 'Experience luxury at its finest with 5-star stays, premium houseboats, and exclusive guided tours.',
                imageSrc: './images/premium.png'
              },
              {
                id: 3,
                title: 'Leh Ladakh Adventure',
                duration: '8 Days / 7 Nights',
                price: '₹28,999',
                description: 'Embark on a thrilling journey through the rugged terrains, serene lakes, and high passes of Ladakh.',
                imageSrc: './images/lehladakh.png'
              }
            ].map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 relative">
                  <img src={pkg.imageSrc} alt={pkg.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-brand-accent tracking-wider uppercase">{pkg.duration}</span>
                    <span className="text-brand-dark font-bold">{pkg.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">{pkg.title}</h3>
                  <p className="text-sm text-brand-text mb-4 line-clamp-2 flex-grow">{pkg.description}</p>
                  <Link to="/packages" className="text-brand-heading text-sm font-semibold hover:text-brand-hover inline-flex items-center gap-1 mt-auto">
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/packages" className="inline-block border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-medium px-8 py-3 rounded-full transition-colors">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-brand-dark mb-4">Our Services</h2>
            <p className="text-brand-text max-w-2xl mx-auto">
              We provide a comprehensive range of travel services to make your journey to Kashmir smooth, comfortable, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'car-rental', title: 'Car Rental', desc: 'We are the best Car Rental Services for you. Enquire now for 24-hour and full time car Rental Service.', icon: Car, imageSrc: './images/service_car_rental_1782306162903.png' },
              { id: 'domestic-travel', title: 'Domestic Travel agent', desc: 'Domestic travel agents arrange trips in, Jammu & Kashmir ensuring smooth travel experiences with local expertise.', icon: MapIcon, imageSrc: './images/service_domestic_1782306173801.png' },
              { id: 'hotel-reservation', title: 'Hotel Reservation', desc: 'A hotel booking agent assists clients in finding and reserving accommodations, offering options tailored to their preference.', icon: Bed, imageSrc: './images/service_hotel_1782306186744.png' },
              { id: 'railway-ticketing', title: 'Railway Ticketing', desc: 'Railway ticketing services facilitate the booking and reservation of train tickets, simplifying travel on the railways.', icon: Train, imageSrc: './images/service_railway_1782306199848.png' },
              { id: 'tour-package', title: 'Tour Package', desc: 'Tour packages for holidays provide all-inclusive itineraries, accommodations, and activities, simplifying vacation planning for travelers.', icon: MapPin, imageSrc: './images/service_tour_package_1782306220057.png' },
              { id: 'houseboat', title: 'House Boat', desc: "Kashmir's house boat holidays offer serene, floating escapes amid breathtaking natural beauty and tranquil waters.", icon: Ship, imageSrc: './images/service_houseboat_1782306232713.png' },
              { id: 'air-ticketing', title: 'Air Ticketing', desc: 'Air ticketing services enable travelers to book flights, making air travel more accessible and convenient.', icon: Plane, imageSrc: './images/service_air_ticketing_1782306246641.png' },
              { id: 'honeymoon', title: 'Honeymoon Package', desc: 'Honeymoon packages offer romantic getaways with curated experiences and accommodations, ensuring an unforgettable post-wedding journey.', icon: Heart, imageSrc: './images/honeymoon-tour.png' }
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-brand-dark/5 flex flex-col h-full group">
                  <div className="h-40 relative flex items-center justify-center overflow-hidden">
                    <img src={service.imageSrc} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-brand-dark/50 flex items-center justify-center transition-opacity opacity-100 group-hover:bg-brand-dark/30">
                      <Icon className="w-12 h-12 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow text-center">
                    <h3 className="text-xl font-semibold text-brand-dark mb-3">{service.title}</h3>
                    <p className="text-sm text-brand-text mb-6 flex-grow">{service.desc}</p>
                    <Link to={`/contact?service=${service.id}`} className="inline-block mt-auto bg-brand-heading hover:bg-brand-hover text-white font-medium px-6 py-2.5 rounded-full transition-colors w-full">
                      Enquire Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
