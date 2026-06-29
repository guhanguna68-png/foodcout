import React from 'react';

const About = () => {
  return (
    <div style={{
      padding: '3rem 0',
      maxWidth: '1000px',
      margin: '0 auto',
    }}>
      {/* Hero Section */}
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
          About <span className="gold-accent">Neha Sri</span>
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
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.8,
        }}>
          Where culinary excellence meets royal hospitality
        </p>
      </div>

      {/* Story Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem',
      }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '32px',
          padding: '2rem',
          boxShadow: '0 8px 28px rgba(0,0,0,0.03)',
          border: '1px solid #ede8e0',
        }}>
          <div style={{
            fontSize: '3rem',
            color: '#b8860b',
            marginBottom: '1rem',
          }}>
            <i className="fas fa-utensils"></i>
          </div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
          }}>Our Story</h3>
          <p style={{
            color: '#5a5a5a',
            lineHeight: 1.8,
          }}>
            Neha Sri Food Court was born from a passion for authentic Indian cuisine and a dream to bring royal flavors to every table. Our journey began in the heart of India, where generations of culinary expertise were passed down through the family.
          </p>
        </div>

        <div style={{
          background: '#ffffff',
          borderRadius: '32px',
          padding: '2rem',
          boxShadow: '0 8px 28px rgba(0,0,0,0.03)',
          border: '1px solid #ede8e0',
        }}>
          <div style={{
            fontSize: '3rem',
            color: '#b8860b',
            marginBottom: '1rem',
          }}>
            <i className="fas fa-crown"></i>
          </div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
          }}>Royal Legacy</h3>
          <p style={{
            color: '#5a5a5a',
            lineHeight: 1.8,
          }}>
            Our recipes are inspired by the royal kitchens of India, where every dish was crafted with precision, love, and the finest ingredients. We honor this legacy by bringing you an authentic dining experience that transports you to a world of luxury.
          </p>
        </div>

        <div style={{
          background: '#ffffff',
          borderRadius: '32px',
          padding: '2rem',
          boxShadow: '0 8px 28px rgba(0,0,0,0.03)',
          border: '1px solid #ede8e0',
        }}>
          <div style={{
            fontSize: '3rem',
            color: '#b8860b',
            marginBottom: '1rem',
          }}>
            <i className="fas fa-heart"></i>
          </div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            marginBottom: '1rem',
          }}>Made with Love</h3>
          <p style={{
            color: '#5a5a5a',
            lineHeight: 1.8,
          }}>
            Every dish at Neha Sri is prepared with the freshest ingredients and a generous dash of love. We believe that food is not just about taste, but about creating memories and bringing people together.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div style={{
        background: 'linear-gradient(145deg, #faf7f2 0%, #f0ebe2 100%)',
        borderRadius: '48px',
        padding: '3rem 2rem',
        marginTop: '2rem',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          marginBottom: '2rem',
        }}>
          Our <span className="gold-accent">Values</span>
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2rem',
        }}>
          <div>
            <i className="fas fa-check-circle" style={{ color: '#b8860b', fontSize: '2rem', marginBottom: '0.5rem' }}></i>
            <h4 style={{ fontFamily: "'Playfair Display', serif" }}>Quality</h4>
            <p style={{ color: '#5a5a5a', fontSize: '0.9rem' }}>Premium ingredients</p>
          </div>
          <div>
            <i className="fas fa-star" style={{ color: '#b8860b', fontSize: '2rem', marginBottom: '0.5rem' }}></i>
            <h4 style={{ fontFamily: "'Playfair Display', serif" }}>Excellence</h4>
            <p style={{ color: '#5a5a5a', fontSize: '0.9rem' }}>Uncompromising taste</p>
          </div>
          <div>
            <i className="fas fa-hand-holding-heart" style={{ color: '#b8860b', fontSize: '2rem', marginBottom: '0.5rem' }}></i>
            <h4 style={{ fontFamily: "'Playfair Display', serif" }}>Hospitality</h4>
            <p style={{ color: '#5a5a5a', fontSize: '0.9rem' }}>Warm & welcoming</p>
          </div>
          <div>
            <i className="fas fa-seedling" style={{ color: '#b8860b', fontSize: '2rem', marginBottom: '0.5rem' }}></i>
            <h4 style={{ fontFamily: "'Playfair Display', serif" }}>Sustainability</h4>
            <p style={{ color: '#5a5a5a', fontSize: '0.9rem' }}>Eco-friendly practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;