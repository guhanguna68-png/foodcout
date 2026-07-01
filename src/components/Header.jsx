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

  // Close mobile menu when route changes
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
    { path: '/about', label: 'About Us', icon: 'fa-info-circle' },
    { path: '/contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <header style={{
        position: 'fixed',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(95%, 1320px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.4rem 1rem',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '50px',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.12)' 
          : '0 4px 20px rgba(0, 0, 0, 0.06)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        zIndex: 9998,
        transition: 'all 0.3s ease',
      }}>
        {/* Logo - Integrated */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          flexShrink: 0,
        }}>
          {/* Logo Icon */}
          <div style={{
            width: 'clamp(35px, 3.5vw, 45px)',
            height: 'clamp(35px, 3.5vw, 45px)',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #b8860b, #8b6914)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(184, 134, 11, 0.35)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '-30%',
              right: '-30%',
              width: '70%',
              height: '70%',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '50%',
            }} />
            <i className="fas fa-crown" style={{ 
              color: '#fff',
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              zIndex: 1,
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '3px',
              right: '4px',
              fontSize: 'clamp(0.35rem, 0.6vw, 0.5rem)',
              color: 'rgba(255,255,255,0.3)',
            }}>
              <i className="fas fa-utensils"></i>
            </div>
          </div>

          {/* Brand Name */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1,
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.1rem, 2.8vw, 1.7rem)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #b8860b, #8b6914)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.5px',
            }}>
              Neha Sri
            </span>
            <span style={{
              fontSize: 'clamp(0.45rem, 0.8vw, 0.6rem)',
              color: '#b8860b',
              fontWeight: 500,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              opacity: 0.7,
              marginTop: '-1px',
            }}>
              Food Cort
            </span>
          </div>
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
                fontSize: '0.85rem',
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
          gap: '0.8rem',
          flexShrink: 0,
        }}>
          {/* Cart Icon */}
          <div style={{ 
            position: 'relative', 
            fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)', 
            cursor: 'pointer',
            padding: '6px 8px',
            borderRadius: '50%',
            background: isScrolled ? '#f5f0e8' : 'transparent',
            transition: 'background 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} 
          onClick={toggleCart}
          onMouseEnter={(e) => e.currentTarget.style.background = '#f5f0e8'}
          onMouseLeave={(e) => e.currentTarget.style.background = isScrolled ? '#f5f0e8' : 'transparent'}>
            <i className="fas fa-shopping-bag" style={{ color: '#1e1e1e' }}></i>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: 'linear-gradient(135deg, #b8860b, #8b6914)',
                color: '#fff',
                borderRadius: '50%',
                width: 'clamp(18px, 1.5vw, 22px)',
                height: 'clamp(18px, 1.5vw, 22px)',
                fontSize: 'clamp(0.55rem, 0.7vw, 0.7rem)',
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
              fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
              cursor: 'pointer',
              color: '#2c2c2c',
              padding: '6px 8px',
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
          top: 'clamp(65px, 8vh, 80px)',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(92%, 400px)',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '1.5rem 1.2rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          borderRadius: '24px',
          zIndex: 9997,
          border: '1px solid rgba(255,255,255,0.3)',
          animation: 'slideDown 0.3s ease',
          maxHeight: '80vh',
          overflowY: 'auto',
        }} className="hide-desktop">
          {/* Menu Header with Logo */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            paddingBottom: '0.8rem',
            borderBottom: '2px solid #f0ebe2',
          }}>
            {/* Small Logo */}
            <Link to="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #b8860b, #8b6914)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <i className="fas fa-crown" style={{ color: '#fff', fontSize: '0.8rem' }}></i>
              </div>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.85rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #b8860b, #8b6914)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Neha Sri
              </span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                background: '#f5f0e8',
                border: 'none',
                color: '#666',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e8e0d6'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#f5f0e8'}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Navigation Links */}
          {navLinks.map((link, index) => (
            <Link 
              key={link.path}
              to={link.path} 
              style={{ 
                textDecoration: 'none', 
                color: isActive(link.path) ? '#b8860b' : '#2c2c2c',
                padding: '0.9rem 0.5rem', 
                borderBottom: index < navLinks.length - 1 ? '1px solid #f0ebe2' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                fontWeight: isActive(link.path) ? 600 : 500,
                transition: 'all 0.2s',
                fontSize: '1rem',
                backgroundColor: isActive(link.path) ? 'rgba(184, 134, 11, 0.05)' : 'transparent',
                borderRadius: '12px',
                paddingLeft: isActive(link.path) ? '1rem' : '0.5rem',
              }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(184, 134, 11, 0.05)';
                e.currentTarget.style.paddingLeft = '1rem';
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.path)) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.paddingLeft = '0.5rem';
                }
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: isActive(link.path) ? 'rgba(184, 134, 11, 0.15)' : '#f5f0e8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                flexShrink: 0,
              }}>
                <i className={`fas ${link.icon}`} style={{ 
                  color: isActive(link.path) ? '#b8860b' : '#666',
                  fontSize: '1.1rem',
                }}></i>
              </div>
              <span style={{ flex: 1, fontSize: '1rem' }}>{link.label}</span>
              {isActive(link.path) && (
                <span style={{
                  fontSize: '0.65rem',
                  color: '#b8860b',
                  background: 'rgba(184, 134, 11, 0.1)',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  fontWeight: 600,
                }}>
                  Active
                </span>
              )}
              <i className="fas fa-chevron-right" style={{ 
                color: isActive(link.path) ? '#b8860b' : '#ccc',
                fontSize: '0.7rem',
              }}></i>
            </Link>
          ))}
          
          {/* Mobile Menu Footer */}
          <div style={{
            marginTop: '1.2rem',
            paddingTop: '1rem',
            borderTop: '2px solid #f0ebe2',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              color: '#999',
            }}>
              <i className="fas fa-phone" style={{ color: '#b8860b' }}></i>
              +91 98765 43210
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              color: '#999',
            }}>
              <i className="fas fa-clock" style={{ color: '#b8860b' }}></i>
              10AM - 10PM
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              color: '#999',
            }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#b8860b' }}></i>
              New Delhi
            </div>
          </div>
        </div>
      )}

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
        
        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 768px) {
          header {
            padding: 0.3rem 0.6rem !important;
            top: 8px !important;
            border-radius: 30px !important;
          }
          
          .hide-desktop {
            display: flex !important;
          }
          
          .hide-mobile {
            display: none !important;
          }
        }

        @media (min-width: 769px) {
          .hide-desktop {
            display: none !important;
          }
          
          .hide-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;