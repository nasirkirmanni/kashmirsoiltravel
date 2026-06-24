import { Link } from 'react-router-dom';
import { Car, Map, Bed, Train, MapPin, Ship, Plane, Heart } from 'lucide-react';

const services = [
  {
    id: 'car-rental',
    title: 'Car Rental',
    description: 'We are the best Car Rental Services for you. Enquire now for 24-hour and full time car Rental Service.',
    icon: Car,
    imageSrc: './images/service_car_rental_1782306162903.png'
  },
  {
    id: 'domestic-travel',
    title: 'Domestic Travel agent',
    description: 'Domestic travel agents arrange trips in, Jammu & Kashmir ensuring smooth travel experiences with local expertise.',
    icon: Map,
    imageSrc: './images/service_domestic_1782306173801.png'
  },
  {
    id: 'hotel-reservation',
    title: 'Hotel Reservation',
    description: 'A hotel booking agent assists clients in finding and reserving accommodations, offering options tailored to their preference.',
    icon: Bed,
    imageSrc: './images/service_hotel_1782306186744.png'
  },
  {
    id: 'railway-ticketing',
    title: 'Railway Ticketing',
    description: 'Railway ticketing services facilitate the booking and reservation of train tickets, simplifying travel on the railways.',
    icon: Train,
    imageSrc: './images/service_railway_1782306199848.png'
  },
  {
    id: 'tour-package',
    title: 'Tour Package',
    description: 'Tour packages for holidays provide all-inclusive itineraries, accommodations, and activities, simplifying vacation planning for travelers.',
    icon: MapPin,
    imageSrc: './images/service_tour_package_1782306220057.png'
  },
  {
    id: 'houseboat',
    title: 'House Boat',
    description: "Kashmir's house boat holidays offer serene, floating escapes amid breathtaking natural beauty and tranquil waters.",
    icon: Ship,
    imageSrc: './images/service_houseboat_1782306232713.png'
  },
  {
    id: 'air-ticketing',
    title: 'Air Ticketing',
    description: 'Air ticketing services enable travelers to book flights, making air travel more accessible and convenient.',
    icon: Plane,
    imageSrc: './images/service_air_ticketing_1782306246641.png'
  },
  {
    id: 'honeymoon',
    title: 'Honeymoon Package',
    description: 'Honeymoon packages offer romantic getaways with curated experiences and accommodations, ensuring an unforgettable post-wedding journey.',
    icon: Heart,
    imageSrc: './images/honeymoon-tour.png'
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">Our Services</h1>
        <p className="text-brand-text max-w-2xl mx-auto">
          We provide a comprehensive range of travel services to make your journey to Kashmir smooth, comfortable, and unforgettable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
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
                <p className="text-sm text-brand-text mb-6 flex-grow">{service.description}</p>
                <Link to={`/contact?service=${service.id}`} className="inline-block mt-auto bg-brand-heading hover:bg-brand-hover text-white font-medium px-6 py-2.5 rounded-full transition-colors w-full">
                  Enquire Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
