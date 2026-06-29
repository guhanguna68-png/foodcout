import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer style={{
      marginTop: '4rem',
      position: 'relative',
      background: '#ffffff',
      borderRadius: '40px 40px 0 0',
      boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.06)',
      padding: '3rem 2rem 1.5rem',
      borderTop: '1px solid #e8e0d6',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2.5rem',
      }}>
        {/* Brand Section */}
        <div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '1rem',
          }}>
            <i className="fas fa-crown" style={{ color: '#b8860b' }}></i>
            <span style={{
              background: 'linear-gradient(135deg, #b8860b, #8b6914)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Neha Sri
            </span>
          </div>
          <p style={{
            color: '#5a5a5a',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            marginBottom: '1rem',
          }}>
            Where culinary excellence meets royal hospitality. Serving authentic Indian cuisine with love since 2020.
          </p>
          <div style={{
            display: 'flex',
            gap: '0.8rem',
          }}>
            <a href="#" style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#f5efe8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2c2c2c',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b8860b';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f5efe8';
              e.currentTarget.style.color = '#2c2c2c';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#f5efe8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2c2c2c',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b8860b';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f5efe8';
              e.currentTarget.style.color = '#2c2c2c';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#f5efe8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2c2c2c',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b8860b';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f5efe8';
              e.currentTarget.style.color = '#2c2c2c';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#f5efe8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2c2c2c',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b8860b';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f5efe8';
              e.currentTarget.style.color = '#2c2c2c';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.1rem',
            marginBottom: '1rem',
            color: '#1e1e1e',
          }}>Quick Links</h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}>
            {['Home', 'Menu', 'About Us', 'Contact', 'Offers'].map((item) => (
              <li key={item} style={{ marginBottom: '0.6rem' }}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                  style={{
                    color: '#5a5a5a',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#b8860b'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#5a5a5a'}
                >
                  <i className="fas fa-chevron-right" style={{ fontSize: '0.6rem', color: '#b8860b' }}></i>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.1rem',
            marginBottom: '1rem',
            color: '#1e1e1e',
          }}>Contact Info</h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              marginBottom: '0.8rem',
              color: '#5a5a5a',
              fontSize: '0.9rem',
            }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#b8860b', marginTop: '0.2rem', minWidth: '18px' }}></i>
              <span>123 Gourmet Street,<br />Food District, New Delhi</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '0.8rem',
              color: '#5a5a5a',
              fontSize: '0.9rem',
            }}>
              <i className="fas fa-phone" style={{ color: '#b8860b', minWidth: '18px' }}></i>
              <span>+91 98765 43210</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '0.8rem',
              color: '#5a5a5a',
              fontSize: '0.9rem',
            }}>
              <i className="fas fa-envelope" style={{ color: '#b8860b', minWidth: '18px' }}></i>
              <span>info@nehafoodcourt.com</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#5a5a5a',
              fontSize: '0.9rem',
            }}>
              <i className="fas fa-clock" style={{ color: '#b8860b', minWidth: '18px' }}></i>
              <span>10:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter - Subscribe Button Below Input */}
        <div>
          <h4 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.1rem',
            marginBottom: '1rem',
            color: '#1e1e1e',
          }}>Newsletter</h4>
          <p style={{
            color: '#5a5a5a',
            fontSize: '0.9rem',
            marginBottom: '1.2rem',
            lineHeight: 1.6,
          }}>
            Subscribe to get special offers, new menu updates, and exclusive deals!
          </p>
          
          <form onSubmit={handleSubscribe} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
          }}>
            {/* Email Input - Full width */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.8rem 1.2rem',
                borderRadius: '12px',
                border: '2px solid #e0d6c8',
                fontSize: '0.9rem',
                fontFamily: "'Inter', sans-serif",
                background: '#ffffff',
                color: '#1e1e1e',
                outline: 'none',
                transition: 'border-color 0.3s',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => e.target.style.borderColor = '#b8860b'}
              onBlur={(e) => e.target.style.borderColor = '#e0d6c8'}
            />
            
            {/* Subscribe Button - Below the input */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.8rem 1.8rem',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #b8860b, #8b6914)',
                color: '#ffffff',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontSize: '0.95rem',
                boxShadow: '0 4px 12px rgba(184, 134, 11, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(184, 134, 11, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(184, 134, 11, 0.2)';
              }}
            >
              <i className="fas fa-paper-plane" style={{ marginRight: '8px' }}></i>
              Subscribe
            </button>
            
            {/* Success Message */}
            {subscribed && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '0.7rem 1rem',
                borderRadius: '12px',
                fontSize: '0.85rem',
                animation: 'fadeIn 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid #c3e6cb',
                marginTop: '0.3rem',
              }}>
                <i className="fas fa-check-circle" style={{ color: '#28a745', fontSize: '1.1rem' }}></i>
                <span>Thank you for subscribing! 🎉</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        marginTop: '2.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid #e8e0d6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          fontSize: '0.8rem',
          color: '#777',
        }}>
          <a href="#" style={{
            color: '#777',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8860b'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#777'}>
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" style={{
            color: '#777',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8860b'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#777'}>
            Terms of Service
          </a>
          <span>|</span>
          <a href="#" style={{
            color: '#777',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8860b'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#777'}>
            Refund Policy
          </a>
          <span>|</span>
          <a href="#" style={{
            color: '#777',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8860b'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#777'}>
            FAQ
          </a>
        </div>
        <p style={{
          color: '#999',
          fontSize: '0.8rem',
          marginTop: '0.3rem',
        }}>
          <i className="fas fa-spa" style={{ color: '#b8860b', margin: '0 4px' }}></i>
          © 2026 Neha Sri Food Court. Crafted with <i className="fas fa-heart" style={{ color: '#b8860b' }}></i> for gourmet souls
          <i className="fas fa-spa" style={{ color: '#b8860b', margin: '0 4px' }}></i>
        </p>
        {/* Payment Methods */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '0.5rem',
          fontSize: '1.5rem',
          color: '#999',
        }}>
          <i className="fab fa-cc-visa" style={{ color: '#1a1f71' }}></i>
          <i className="fab fa-cc-mastercard" style={{ color: '#eb001b' }}></i>
          <i className="fab fa-cc-amex" style={{ color: '#006fcf' }}></i>
          <i className="fab fa-cc-paypal" style={{ color: '#003087' }}></i>
          <i className="fas fa-mobile-alt" style={{ color: '#b8860b' }}></i>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'absolute',
          top: '-20px',
          right: '30px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #b8860b, #8b6914)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(184, 134, 11, 0.3)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;