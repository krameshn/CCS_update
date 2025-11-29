import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ccsLogo from './assets/images/ccs_logo.png';

export default function Navigation({ activeSection, onNavigate, onScrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll on mount
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 20);
    });
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (action, target) => {
    setMobileMenuOpen(false);
    if (action === 'scroll') {
      onScrollToSection(target);
    } else if (action === 'navigate') {
      onNavigate(target);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 border-b border-dark-800/50 backdrop-blur-md' : 'bg-dark-950/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div
            onClick={() => handleNavClick('navigate', '/')}
            className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent cursor-pointer"
           id="css_logo">
                <img
                  src={ccsLogo}
                  alt="Cerrado Consulting Services"
                  className="logo object-contain ml-2 wow fadeInUp"
                />
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => handleNavClick('navigate', '/')}
              className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-white border-b-2 border-brand-400 pb-1' : 'text-dark-300 hover:text-brand-400'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('scroll', 'products')}
              className={`text-sm font-medium transition-colors ${activeSection === 'products' ? 'text-white border-b-2 border-brand-400 pb-1' : 'text-dark-300 hover:text-brand-400'}`}
            >
              Products
            </button>
            {/* Company dropdown */}
            <div className="relative group">
              <button
                className={`text-sm font-medium transition-colors ${activeSection === 'company' ? 'text-white border-b-2 border-brand-400 pb-1' : 'text-dark-300 hover:text-brand-400'}`}
              >
                Company
              </button>
              <div className="absolute left-0 mt-3 w-56 bg-dark-900 border border-dark-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all pointer-events-none group-hover:pointer-events-auto mrg0T">
                <button onClick={() => handleNavClick('navigate', '/company/about-founder')} className="block w-full text-left px-4 py-2 text-sm text-dark-100 hover:bg-dark-800">About Founder</button>
                <button onClick={() => handleNavClick('navigate', '/company/careers')} className="block w-full text-left px-4 py-2 text-sm text-dark-100 hover:bg-dark-800">Careers</button>
                <button onClick={() => handleNavClick('navigate', '/company/news')} className="block w-full text-left px-4 py-2 text-sm text-dark-100 hover:bg-dark-800">News</button>
              </div>
            </div>
            <button
              onClick={() => handleNavClick('scroll', 'consulting')}
              className={`text-sm font-medium transition-colors ${activeSection === 'consulting' ? 'text-white border-b-2 border-brand-400 pb-1' : 'text-dark-300 hover:text-brand-400'}`}
            >
              Consulting
            </button>
            <button
              onClick={() => handleNavClick('scroll', 'managed-services')}
              className={`text-sm font-medium transition-colors ${activeSection === 'managed-services' ? 'text-white border-b-2 border-brand-400 pb-1' : 'text-dark-300 hover:text-brand-400'}`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('scroll', 'why-us')}
              className={`text-sm font-medium transition-colors ${activeSection === 'why-us' ? 'text-white border-b-2 border-brand-400 pb-1' : 'text-dark-300 hover:text-brand-400'}`}
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('navigate', '/contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all text-sm font-medium"
            >
              Schedule
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-brand-400 p-2"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-dark-900 z-30 w-full h-screen">
          <div className="px-6 py-12 space-y-8">
            <button
              onClick={() => handleNavClick('navigate', '/')}
              className={`block w-full text-left py-4 text-2xl font-medium border-b border-dark-800 ${activeSection === 'home' ? 'bg-dark-800 text-white' : 'text-dark-100'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('scroll', 'products')}
              className={`block w-full text-left py-4 text-2xl font-medium border-b border-dark-800 ${activeSection === 'products' ? 'bg-dark-800 text-white' : 'text-dark-100'}`}
            >
              Products
            </button>
            <div className="pl-4">
              <button onClick={() => handleNavClick('navigate', '/company/about-founder')} className="block w-full text-left py-3 text-xl font-medium border-b border-dark-800 text-dark-100">About Founder</button>
              <button onClick={() => handleNavClick('navigate', '/company/careers')} className="block w-full text-left py-3 text-xl font-medium border-b border-dark-800 text-dark-100">Careers</button>
              <button onClick={() => handleNavClick('navigate', '/company/news')} className="block w-full text-left py-3 text-xl font-medium border-b border-dark-800 text-dark-100">News</button>
            </div>
            <button
              onClick={() => handleNavClick('scroll', 'consulting')}
              className={`block w-full text-left py-4 text-2xl font-medium border-b border-dark-800 ${activeSection === 'consulting' ? 'bg-dark-800 text-white' : 'text-dark-100'}`}
            >
              Consulting
            </button>
            <button
              onClick={() => handleNavClick('scroll', 'managed-services')}
              className={`block w-full text-left py-4 text-2xl font-medium border-b border-dark-800 ${activeSection === 'managed-services' ? 'bg-dark-800 text-white' : 'text-dark-100'}`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('scroll', 'why-us')}
              className={`block w-full text-left py-4 text-2xl font-medium border-b border-dark-800 ${activeSection === 'why-us' ? 'bg-dark-800 text-white' : 'text-dark-100'}`}
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('navigate', '/contact')}
              className="w-full px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all text-lg font-medium mt-8"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
