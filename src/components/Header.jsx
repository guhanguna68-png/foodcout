import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header = ({ toggleCart }) => {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes - Fixed
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [location, menuOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home', icon: 'fa-home' },
    { path: '/menu', label: 'Menu', icon: 'fa-utensils' },
    { path: '/offers', label: 'Offers', icon: 'fa-tag' },
    { path: '/about', label: 'About', icon: 'fa-info-circle' },
    { path: '/contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <header style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(95%, 1320px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.8rem 1.5rem',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '60px',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.12)' 
          : '0 4px 20px rgba(0, 0, 0, 0.06)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        zIndex: 9998,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
          fontWeight: 700,
          letterSpacing: '-0.5px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#1e1e1e',
          textDecoration: 'none',
        }}>
          <i className="fas fa-crown" style={{ 
            color: '#b8860b',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          }}></i>
          <span style={{ 
            background: 'linear-gradient(135deg, #b8860b, #8b6914)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Neha Sri
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          fontWeight: 500,
          fontSize: '0.9rem',
        }} className="hide-mobile">
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path} 
              style={{ 
                textDecoration: 'none', 
                color: isActive(link.path) ? '#b8860b' : '#2c2c2c',
                transition: 'color 0.2s',
                position: 'relative',
                fontWeight: isActive(link.path) ? 600 : 500,
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.path)) {
                  e.target.style.color = '#b8860b';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.path)) {
                  e.target.style.color = '#2c2c2c';
                }
              }}
            >
              <i className={`fas ${link.icon}`} style={{ marginRight: '6px' }}></i> 
              {link.label}
              {isActive(link.path) && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(90deg, #b8860b, #8b6914)',
                  borderRadius: '2px',
                }} />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side: Cart + Mobile Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem',
        }}>
          {/* Cart Icon */}
          <div style={{ 
            position: 'relative', 
            fontSize: '1.3rem', 
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            background: isScrolled ? '#f5f0e8' : 'transparent',
            transition: 'background 0.3s',
          }} 
          onClick={toggleCart}
          onMouseEnter={(e) => e.currentTarget.style.background = '#f5f0e8'}
          onMouseLeave={(e) => e.currentTarget.style.background = isScrolled ? '#f5f0e8' : 'transparent'}>
            <i className="fas fa-shopping-bag" style={{ color: '#1e1e1e' }}></i>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                background: 'linear-gradient(135deg, #b8860b, #8b6914)',
                color: '#fff',
                borderRadius: '50%',
                width: '22px',
                height: '22px',
                fontSize: '0.7rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(184, 134, 11, 0.4)',
              }}>{totalItems}</span>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: isScrolled ? '#f5f0e8' : 'transparent',
              border: 'none',
              fontSize: '1.3rem',
              cursor: 'pointer',
              color: '#2c2c2c',
              padding: '8px 10px',
              borderRadius: '50%',
              transition: 'background 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="hide-desktop"
            onMouseEnter={(e) => e.currentTarget.style.background = '#f5f0e8'}
            onMouseLeave={(e) => e.currentTarget.style.background = isScrolled ? '#f5f0e8' : 'transparent'}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(95%, 400px)',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '1.5rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          borderRadius: '24px',
          zIndex: 9998,
          border: '1px solid rgba(255,255,255,0.3)',
          animation: 'slideDown 0.3s ease',
        }} className="hide-desktop">
          {navLinks.map(link => (
            <Link 
              key={link.path}
              to={link.path} 
              style={{ 
                textDecoration: 'none', 
                color: isActive(link.path) ? '#b8860b' : '#2c2c2c',
                padding: '0.8rem 0', 
                borderBottom: '1px solid #f0ebe2',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontWeight: isActive(link.path) ? 600 : 500,
                transition: 'color 0.2s',
              }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                if (!isActive(link.path)) {
                  e.currentTarget.style.color = '#b8860b';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.path)) {
                  e.currentTarget.style.color = '#2c2c2c';
                }
              }}
            >
              <i className={`fas ${link.icon}`} style={{ color: isActive(link.path) ? '#b8860b' : '#b8860b', width: '20px' }}></i> 
              {link.label}
              {isActive(link.path) && (
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '0.7rem',
                  color: '#b8860b',
                }}>
                  <i className="fas fa-check-circle"></i>
                </span>
              )}
            </Link>
          ))}
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Header;