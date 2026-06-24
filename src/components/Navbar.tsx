import { useState, useEffect } from 'react';
import { UserPlus, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '/destinations', label: 'Destinations' },
    { href: '/packages', label: 'Packages' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6 transition-all duration-300 ${isHome ? 'bg-transparent' : 'bg-brand-dark shadow-md'}`}>
        <div className="flex items-center gap-2 text-brand-med">
          <Link to="/" className={`text-lg sm:text-xl md:text-2xl font-semibold tracking-tight ${isHome ? 'text-brand-med' : 'text-white'}`}>
            Kashmir Soil Travels
          </Link>
        </div>

        <div className={`hidden lg:flex items-center gap-1 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border ${isHome ? 'bg-white/70 border-white/60' : 'bg-brand-med/50 border-brand-hover text-white'}`}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm px-3 py-2 transition-colors ${
                isHome 
                  ? (i === 0 ? 'font-semibold text-brand-dark' : 'font-medium text-brand-text hover:text-brand-dark')
                  : 'font-medium text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className={`ml-2 text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${isHome ? 'bg-brand-dark hover:bg-brand-hover text-white' : 'bg-brand-accent hover:bg-brand-accent/80 text-brand-dark'}`}>
            Book Now
          </Link>
        </div>

        <div className={`flex items-center gap-3 sm:gap-6 ${isHome ? 'text-brand-med' : 'text-white'}`}>
          <Link to="/contact" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
            <UserPlus className="w-4 h-4" />
            Inquire
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
              isHome 
                ? 'bg-white/70 border-white/60 text-brand-dark hover:bg-white/90' 
                : 'bg-brand-med border-brand-hover text-white'
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Menu
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm" />
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-brand-dark py-4 border-b border-brand-dark/10 transition-all duration-500 ${
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div
            className={`mt-8 flex flex-col gap-4 transition-all duration-500 ${
              menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm font-medium text-brand-med sm:hidden">
              <UserPlus className="w-4 h-4" />
              Inquire
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-2 text-center bg-brand-dark hover:bg-brand-hover text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
