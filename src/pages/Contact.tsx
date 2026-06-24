import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">Contact Us</h1>
        <p className="text-brand-text max-w-2xl mx-auto">
          Have questions about our Kashmir tour packages? Want to create a custom itinerary? Get in touch with our local travel experts today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-[#f4f7f4] rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-brand-dark mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-heading shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Office Address</h4>
                  <p className="text-brand-text text-sm">Residency Road, Srinagar<br/>Jammu & Kashmir 190001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-heading shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Phone & WhatsApp</h4>
                  <p className="text-brand-text text-sm">+91 98765 43210<br/>+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-heading shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Email Address</h4>
                  <p className="text-brand-text text-sm">info@kashmirsoiltravels.com<br/>bookings@kashmirsoiltravels.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-heading shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Working Hours</h4>
                  <p className="text-brand-text text-sm">Monday - Saturday: 9:00 AM - 8:00 PM<br/>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden h-64 bg-brand-med/20 relative shadow-sm">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center bg-[#e0e7e0]">
                <p className="text-brand-dark font-medium">Google Maps Integration Here</p>
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-brand-dark/5 p-8">
          <h3 className="text-2xl font-semibold text-brand-dark mb-6">Send an Inquiry</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-brand-dark mb-1">First Name</label>
                <input type="text" id="firstName" className="w-full px-4 py-2 rounded-lg border border-brand-dark/20 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors" placeholder="John" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-brand-dark mb-1">Last Name</label>
                <input type="text" id="lastName" className="w-full px-4 py-2 rounded-lg border border-brand-dark/20 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-brand-dark/20 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 rounded-lg border border-brand-dark/20 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-brand-dark mb-1">Subject / Interested In</label>
              <select id="subject" className="w-full px-4 py-2 rounded-lg border border-brand-dark/20 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors bg-white">
                <option value="">Select an option</option>
                <option value="honeymoon">Honeymoon Package</option>
                <option value="family">Family Tour</option>
                <option value="custom">Custom Itinerary</option>
                <option value="transport">Transport Only</option>
                <option value="other">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">Message</label>
              <textarea id="message" rows={5} className="w-full px-4 py-2 rounded-lg border border-brand-dark/20 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-colors resize-none" placeholder="Tell us about your travel plans..."></textarea>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-heading hover:bg-brand-hover text-white font-medium py-3 rounded-lg transition-colors mt-2">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
