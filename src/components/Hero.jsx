import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Trending food items
  const slides = [
    {
      id: 1,
      title: 'Butter Chicken',
      subtitle: 'Rich & Creamy Royalty',
      description: 'Experience the royal taste of our signature butter chicken, slow-cooked with aromatic spices and finished with a dollop of butter.',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=500&fit=crop&crop=center',
      badge: '🔥 Bestseller',
      tag: 'Most Ordered',
      bgColor: '#fdf6ee'
    },
    {
      id: 2,
      title: 'Hyderabadi Biryani',
      subtitle: 'The Royal Feast',
      description: 'Fragrant basmati rice layered with saffron-infused tender meat, caramelized onions, and a blend of exotic spices.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=500&fit=crop&crop=center',
      badge: '⭐ Chef Special',
      tag: 'Signature Dish',
      bgColor: '#f5f0ea'
    },
    {
      id: 3,
      title: 'Paneer Tikka',
      subtitle: 'Grilled Perfection',
      description: 'Cottage cheese marinated in yogurt and 15 aromatic spices, grilled to perfection in a traditional clay tandoor.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&crop=center',
      badge: '🌿 Popular Choice',
      tag: 'Vegetarian Favorite',
      bgColor: '#f0f5ea'
    },
    {
      id: 4,
      title: 'Gulab Jamun',
      subtitle: 'Sweet Indulgence',
      description: 'Soft, spongy milk dumplings soaked in fragrant rose syrup with a hint of cardamom and saffron.',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop&crop=center',
      badge: '🍨 Sweet Treat',
      tag: 'Dessert Special',
      bgColor: '#fdf0f0'
    },
    {
      id: 5,
      title: 'Masala Chai',
      subtitle: 'Perfect Brew',
      description: 'Traditional spiced tea brewed with fresh ginger, cardamom, cinnamon, and a touch of love.',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=500&fit=crop&crop=center',
      badge: '☕ House Special',
      tag: 'Beverage',
      bgColor: '#f5efe8'
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

  const current = slides[currentSlide];

  return (
    <section style={{
      borderRadius: 'clamp(24px, 4vw, 48px)',
      margin: 'clamp(1rem, 3vw, 2rem) 0',
      overflow: 'hidden',
      height: 'clamp(450px, 70vh, 650px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      backgroundColor: current.bgColor || '#faf7f2',
      position: 'relative',
      transition: 'background-color 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        height: '100%',
        width: '100%',
        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}>
        {/* Left Side - Content */}
        <div style={{
          padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
        }}>
          {/* Tag & Badge Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '0.8rem',
            flexWrap: 'wrap',
          }}>
            <span style={{
              background: 'rgba(184, 134, 11, 0.1)',
              padding: '0.2rem 1rem',
              borderRadius: '30px',
              fontSize: 'clamp(0.55rem, 0.9vw, 0.7rem)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              color: '#b8860b',
              border: '1px solid rgba(184, 134, 11, 0.15)',
              whiteSpace: 'nowrap',
            }}>
              {current.tag}
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #b8860b, #8b6914)',
              padding: '0.2rem 1rem',
              borderRadius: '30px',
              fontSize: 'clamp(0.55rem, 0.9vw, 0.7rem)',
              fontWeight: 600,
              color: '#fff',
              boxShadow: '0 2px 8px rgba(184, 134, 11, 0.3)',
              whiteSpace: 'nowrap',
            }}>
              {current.badge}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#1e1e1e',
            marginBottom: '0.2rem',
          }}>
            {current.title}
          </h1>

          {/* Subtitle */}
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1rem, 2vw, 1.6rem)',
            fontWeight: 400,
            color: '#b8860b',
            marginBottom: '0.8rem',
          }}>
            {current.subtitle}
          </h2>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(0.8rem, 1.1vw, 1rem)',
            lineHeight: 1.6,
            color: '#4a4a4a',
            marginBottom: '1.5rem',
            maxWidth: '95%',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {current.description}
          </p>

          {/* Explore Button */}
          <button 
            className="btn" 
            onClick={() => document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: 'clamp(0.6rem, 1.2vw, 0.9rem) clamp(1.5rem, 2.5vw, 2.5rem)',
              fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)',
              background: 'linear-gradient(135deg, #b8860b, #8b6914)',
              border: 'none',
              borderRadius: '50px',
              boxShadow: '0 4px 20px rgba(184, 134, 11, 0.3)',
              transition: 'all 0.3s ease',
              fontWeight: 600,
              letterSpacing: '0.5px',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(184, 134, 11, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(184, 134, 11, 0.3)';
            }}
          >
            <i className="fas fa-utensils" style={{ marginRight: '8px' }}></i>
            Explore Our Menu
          </button>
        </div>

        {/* Right Side - Image */}
        <div style={{
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(1rem, 2vw, 2rem)',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: 'clamp(20px, 2.5vw, 35px)',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            position: 'relative',
          }}>
            <img 
              src={current.image}
              alt={current.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0,0,0,0.05)',
          color: '#2c2c2c',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.3s ease',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}
        className="hide-mobile"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#b8860b';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
          e.currentTarget.style.color = '#2c2c2c';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0,0,0,0.05)',
          color: '#2c2c2c',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.3s ease',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}
        className="hide-mobile"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#b8860b';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
          e.currentTarget.style.color = '#2c2c2c';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Slide Indicator - Bottom Center */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(15px, 2vh, 25px)',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(6px, 0.8vw, 12px)',
        zIndex: 10,
        padding: 'clamp(5px, 0.6vw, 10px) clamp(10px, 1.2vw, 20px)',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '50px',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}>
        <button
          onClick={prevSlide}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#666',
            cursor: 'pointer',
            fontSize: 'clamp(10px, 0.9vw, 14px)',
            padding: 'clamp(2px, 0.2vw, 6px)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#b8860b';
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? 'clamp(18px, 2vw, 28px)' : 'clamp(6px, 0.6vw, 10px)',
              height: 'clamp(6px, 0.6vw, 10px)',
              borderRadius: '50px',
              border: 'none',
              background: currentSlide === index 
                ? 'linear-gradient(135deg, #b8860b, #8b6914)'
                : '#d0c8c0',
              cursor: 'pointer',
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              boxShadow: currentSlide === index 
                ? '0 0 20px rgba(184, 134, 11, 0.3)'
                : 'none',
              padding: 0,
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              if (currentSlide !== index) {
                e.currentTarget.style.background = '#b8860b';
                e.currentTarget.style.transform = 'scale(1.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentSlide !== index) {
                e.currentTarget.style.background = '#d0c8c0';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          />
        ))}

        <button
          onClick={nextSlide}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#666',
            cursor: 'pointer',
            fontSize: 'clamp(10px, 0.9vw, 14px)',
            padding: 'clamp(2px, 0.2vw, 6px)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#b8860b';
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        <span style={{
          color: '#999',
          fontSize: 'clamp(8px, 0.6vw, 11px)',
          fontWeight: 300,
          marginLeft: 'clamp(2px, 0.2vw, 6px)',
          fontFamily: "'Inter', sans-serif",
        }}>
          {String(currentSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Auto-slide indicator */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(15px, 2vh, 25px)',
        right: 'clamp(10px, 1.5vw, 25px)',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        padding: '0.3rem 0.8rem',
        borderRadius: '20px',
        color: '#999',
        fontSize: 'clamp(0.5rem, 0.6vw, 0.7rem)',
        fontWeight: 300,
        border: '1px solid rgba(0,0,0,0.05)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }} className="hide-mobile">
        <span style={{
          display: 'inline-block',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#b8860b',
          animation: 'pulse 2s ease-in-out infinite',
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

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: 1fr 1fr;
          }
          
          .hero-content {
            padding: 1.2rem !important;
          }
          
          .hero-image {
            padding: 0.5rem 1rem 1rem !important;
          }
          
          .hero-image img {
            border-radius: 16px !important;
          }
          
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;