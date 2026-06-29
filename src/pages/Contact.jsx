import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon. ✨');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          Get in <span className="gold-accent">Touch</span>
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
          We'd love to hear from you. Reach out for reservations, inquiries, or feedback.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '3rem',
      }}>
        {/* Contact Form */}
        <div style={{
          background: '#ffffff',
          borderRadius: '32px',
          padding: '2.5rem',
          boxShadow: '0 8px 28px rgba(0,0,0,0.03)',
          border: '1px solid #ede8e0',
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
          }}>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: '#2c2c2c',
              }}>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #e0d6c8',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => e.target.style.borderColor = '#b8860b'}
                onBlur={(e) => e.target.style.borderColor = '#e0d6c8'}
              />
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: '#2c2c2c',
              }}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #e0d6c8',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => e.target.style.borderColor = '#b8860b'}
                onBlur={(e) => e.target.style.borderColor = '#e0d6c8'}
              />
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: '#2c2c2c',
              }}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #e0d6c8',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => e.target.style.borderColor = '#b8860b'}
                onBlur={(e) => e.target.style.borderColor = '#e0d6c8'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
                color: '#2c2c2c',
              }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #e0d6c8',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.2s',
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => e.target.style.borderColor = '#b8860b'}
                onBlur={(e) => e.target.style.borderColor = '#e0d6c8'}
              />
            </div>

            <button
              type="submit"
              className="btn"
              style={{
                width: '100%',
                padding: '0.9rem',
                fontSize: '1rem',
              }}
            >
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '32px',
            padding: '2rem',
            boxShadow: '0 8px 28px rgba(0,0,0,0.03)',
            border: '1px solid #ede8e0',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem',
              marginBottom: '1.5rem',
            }}>Contact Information</h3>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem' }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#b8860b', fontSize: '1.3rem', marginTop: '0.2rem' }}></i>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.2rem' }}>Address</h4>
                <p style={{ color: '#5a5a5a' }}>123 Gourmet Street, Food District<br />New Delhi, India 110001</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem' }}>
              <i className="fas fa-phone" style={{ color: '#b8860b', fontSize: '1.3rem', marginTop: '0.2rem' }}></i>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.2rem' }}>Phone</h4>
                <p style={{ color: '#5a5a5a' }}>+91 98765 43210<br />+91 98765 43211</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <i className="fas fa-envelope" style={{ color: '#b8860b', fontSize: '1.3rem', marginTop: '0.2rem' }}></i>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.2rem' }}>Email</h4>
                <p style={{ color: '#5a5a5a' }}>info@nehafoodcourt.com<br />reservations@nehafoodcourt.com</p>
              </div>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(145deg, #faf7f2 0%, #f0ebe2 100%)',
            borderRadius: '32px',
            padding: '2rem',
            border: '1px solid #ede8e0',
            textAlign: 'center',
          }}>
            <i className="fas fa-clock" style={{ color: '#b8860b', fontSize: '2rem', marginBottom: '0.5rem' }}></i>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
            }}>Opening Hours</h3>
            <p style={{ color: '#5a5a5a' }}>
              Monday - Friday: 10:00 AM - 10:00 PM<br />
              Saturday - Sunday: 11:00 AM - 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;