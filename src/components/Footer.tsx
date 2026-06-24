import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-display font-semibold mb-4 text-brand-accent">Kashmir Soil Travels</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Your trusted local travel expert providing authentic Kashmiri experiences, personalized itineraries, and reliable end-to-end travel assistance.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
            <li><Link to="/destinations" className="hover:text-brand-accent transition-colors">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-brand-accent transition-colors">Tour Packages</Link></li>
            <li><Link to="/blog" className="hover:text-brand-accent transition-colors">Travel Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Support</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
            <li><Link to="/faqs" className="hover:text-brand-accent transition-colors">FAQs</Link></li>
            <li><Link to="/guide" className="hover:text-brand-accent transition-colors">Travel Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Srinagar, Jammu & Kashmir</li>
            <li>+91 98765 43210</li>
            <li>info@kashmirsoiltravels.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
        <p>&copy; {new Date().getFullYear()} Kashmir Soil Travels. All rights reserved.</p>
      </div>
    </footer>
  );
}
