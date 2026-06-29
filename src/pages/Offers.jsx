import React from 'react';
import { PROMOTIONS } from '../data/promotions';

const Offers = () => {
  return (
    <div style={{
      padding: '3rem 0',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: '#1e1e1e',
        }}>
          Special <span className="gold-accent">Offers</span>
        </h1>
        <div style={{
          width: '80px',
          height: '3px',
          background: 'linear-gradient(90deg, #b8860b, #8b6914)',
          margin: '1rem auto',
          borderRadius: '2px',
        }}></div>
        <p style={{
          color: '#5a5a5a',
          fontSize: '1.1rem',
          maxWidth: '500px',
          margin: '0 auto',
        }}>
          Exclusive deals and promotions for our valued guests
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
      }}>
        {PROMOTIONS.map((offer) => (
          <div key={offer.id} style={{
            background: '#ffffff',
            borderRadius: '32px',
            padding: '2rem',
            boxShadow: '0 8px 28px rgba(0,0,0,0.03)',
            border: '1px solid #ede8e0',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            {/* Decorative element */}
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #b8860b, #8b6914)',
              borderRadius: '50%',
              opacity: 0.1,
            }}></div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
            }}>
              <div style={{
                fontSize: '2.5rem',
                color: '#b8860b',
              }}>
                <i className="fas fa-ticket-alt"></i>
              </div>
              <div style={{
                background: '#b8860b',
                color: '#fff',
                padding: '0.3rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}>
                {offer.discount}% OFF
              </div>
            </div>

            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.4rem',
              marginBottom: '0.5rem',
            }}>
              {offer.title}
            </h3>

            <p style={{
              color: '#5a5a5a',
              marginBottom: '1rem',
              lineHeight: 1.6,
            }}>
              {offer.description}
            </p>

            <div style={{
              background: '#f5efe8',
              padding: '0.5rem 1rem',
              borderRadius: '12px',
              display: 'inline-block',
              marginBottom: '1rem',
            }}>
              <span style={{ fontWeight: 600 }}>Code:</span>
              <span style={{
                color: '#b8860b',
                fontWeight: 700,
                marginLeft: '0.5rem',
                letterSpacing: '1px',
              }}>
                {offer.code}
              </span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '0.5rem',
              paddingTop: '0.8rem',
              borderTop: '1px solid #f0ebe2',
            }}>
              <span style={{
                fontSize: '0.8rem',
                color: '#999',
              }}>
                <i className="far fa-calendar-alt"></i> Valid until {offer.validUntil}
              </span>
              <button className="btn-sm" onClick={() => {
                navigator.clipboard.writeText(offer.code);
                alert(`Copied code: ${offer.code} ✨`);
              }}>
                <i className="fas fa-copy"></i> Copy Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;