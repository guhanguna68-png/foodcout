import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Trending food items with reliable, high-quality images
  const slides = [
   
    {
      id: 1,
      title: 'Paneer Tikka',
      subtitle: 'Grilled Perfection',
      description: 'Cottage cheese marinated in yogurt and 15 aromatic spices, grilled to perfection in a traditional clay tandoor.',
      image: 'https://images.unsplash.com/photo-1567186937675-a5138e8df89d?w=1200&h=600&fit=crop&crop=center',
      badge: '🌿 Popular Choice',
      tag: 'Vegetarian Favorite'
    },
    {
      id: 2,
      title: 'Gulab Jamun',
      subtitle: 'Sweet Indulgence',
      description: 'Soft, spongy milk dumplings soaked in fragrant rose syrup with a hint of cardamom and saffron.',
      image: 'https://images.unsplash.com/photo-1589119908998-4fc6f6b7e080?w=1200&h=600&fit=crop&crop=center',
      badge: '🍨 Sweet Treat',
      tag: 'Dessert Special'
    },
    {
      id: 3,
      title: 'Masala Chai',
      subtitle: 'Perfect Brew',
      description: 'Traditional spiced tea brewed with fresh ginger, cardamom, cinnamon, and a touch of love.',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&h=600&fit=crop&crop=center',
      badge: '☕ House Special',
      tag: 'Beverage'
    }
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 1200);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length, isTransitioning]);

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 1200);
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 1200);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 1200);
    }
  };

  return (
    <section style={{
      position: 'relative',
      borderRadius: 'clamp(24px, 4vw, 48px)',
      margin: 'clamp(1rem, 3vw, 2rem) 0',
      overflow: 'hidden',
      height: 'clamp(450px, 65vh, 650px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      backgroundColor: '#1a1a1a', // Fallback background
    }}>
      {/* Slides Container */}
      <div style={{
        display: 'flex',
        transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: `translateX(-${currentSlide * 100}%)`,
        height: '100%',
        width: `${slides.length * 100}%`,
        willChange: 'transform',
      }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              flexShrink: 0,
              background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)`,
            }}
          >
            {/* Image - Using object-fit for perfect display */}
            <img 
              src={slide.image}
              alt={slide.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                zIndex: 0,
              }}
              loading="lazy"
            />
            
            {/* Dark Overlay - softer for better image visibility */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)',
              zIndex: 1,
            }} />

            {/* Content */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '8%',
              transform: 'translateY(-50%)',
              color: '#fff',
              maxWidth: '580px',
              padding: '0 2rem',
              zIndex: 2,
            }}>
              {/* Tag */}
              <div style={{
                display: 'inline-block',
                background: 'rgba(184, 134, 11, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(184, 134, 11, 0.3)',
                padding: '0.25rem 1.2rem',
                borderRadius: '30px',
                fontSize: '0.75rem',
                fontWeight: 500,
                marginBottom: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#b8860b',
              }}>
                {slide.tag}
              </div>

              {/* Badge */}
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #b8860b, #8b6914)',
                padding: '0.3rem 1.2rem',
                borderRadius: '30px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1rem',
                marginLeft: '0.5rem',
                boxShadow: '0 4px 12px rgba(184, 134, 11, 0.3)',
              }}>
                {slide.badge}
              </div>

              {/* Title */}
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
                fontWeight: 700,
                marginBottom: '0.3rem',
                lineHeight: 1.1,
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}>
                {slide.title}
              </h1>

              {/* Subtitle */}
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                fontWeight: 400,
                color: '#b8860b',
                marginBottom: '0.8rem',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}>
                {slide.subtitle}
              </h2>

              {/* Description */}
              <p style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
                lineHeight: 1.8,
                opacity: 0.92,
                marginBottom: '1.8rem',
                textShadow: '0 1px 8px rgba(0,0,0,0.3)',
                maxWidth: '480px',
              }}>
                {slide.description}
              </p>

              {/* Explore Button */}
              <button 
                className="btn" 
                onClick={() => document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '1rem 3rem',
                  fontSize: '1.05rem',
                  background: 'linear-gradient(135deg, #b8860b, #8b6914)',
                  border: 'none',
                  borderRadius: '50px',
                  boxShadow: '0 4px 20px rgba(184, 134, 11, 0.4)',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(184, 134, 11, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(184, 134, 11, 0.4)';
                }}
              >
                <i className="fas fa-utensils" style={{ marginRight: '10px' }}></i>
                Explore Our Menu
              </button>
            </div>

            {/* Slide Number Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '2.5rem',
              right: '2.5rem',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1rem',
              fontWeight: 300,
              zIndex: 2,
              background: 'rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '1.2rem',
          transition: 'all 0.4s ease',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.7,
        }}
        className="hide-mobile"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(184, 134, 11, 0.8)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          e.currentTarget.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.opacity = '0.7';
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '1.2rem',
          transition: 'all 0.4s ease',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.7,
        }}
        className="hide-mobile"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(184, 134, 11, 0.8)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          e.currentTarget.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.opacity = '0.7';
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '25px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '14px',
        zIndex: 10,
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '45px' : '12px',
              height: '12px',
              borderRadius: '20px',
              border: 'none',
              background: currentSlide === index 
                ? 'linear-gradient(135deg, #b8860b, #8b6914)'
                : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              boxShadow: currentSlide === index 
                ? '0 0 25px rgba(184, 134, 11, 0.5)'
                : 'none',
            }}
            onMouseEnter={(e) => {
              if (currentSlide !== index) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
                e.currentTarget.style.transform = 'scale(1.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentSlide !== index) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          />
        ))}
      </div>

      {/* Auto-slide indicator */}
      <div style={{
        position: 'absolute',
        bottom: '25px',
        right: '25px',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(0,0,0,0.25)',
        backdropFilter: 'blur(12px)',
        padding: '0.4rem 1rem',
        borderRadius: '20px',
        color: 'rgba(255,255,255,0.6)',
        fontSize: '0.7rem',
        fontWeight: 400,
        border: '1px solid rgba(255,255,255,0.1)',
      }} className="hide-mobile">
        <span style={{
          display: 'inline-block',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#b8860b',
          animation: 'pulse 1s ease-in-out infinite',
        }}></span>
        Auto-slide
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.3; 
            transform: scale(0.6); 
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-content {
          animation: fadeInUp 0.7s ease-out;
        }
        
        /* Ensure images load properly */
        img {
          display: block;
          max-width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Hero;