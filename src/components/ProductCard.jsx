import { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, updateQuantity, getItemCount } = useCart();
  const [quantity, setQuantity] = useState(0);

  // Update quantity when cart changes
  useEffect(() => {
    setQuantity(getItemCount(product.id));
  }, [getItemCount, product.id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, -1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleIncreaseQuantity = () => {
    addToCart(product);
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      transition: 'all 0.4s ease',
      border: '1px solid #ede8e0',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: '100%',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
      e.currentTarget.style.borderColor = '#b8860b';
      
      const shine = e.currentTarget.querySelector('.shine-overlay');
      if (shine) {
        shine.style.opacity = '1';
        shine.style.transform = 'translateX(100%)';
        setTimeout(() => {
          shine.style.transform = 'translateX(-100%)';
        }, 100);
      }
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
      e.currentTarget.style.borderColor = '#ede8e0';
      
      const shine = e.currentTarget.querySelector('.shine-overlay');
      if (shine) {
        shine.style.opacity = '0';
      }
    }}>
      
      {/* Image Container with Shine Effect */}
      <div style={{
        position: 'relative',
        height: '180px',
        overflow: 'hidden',
        background: '#f5efe8',
      }}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        
        {/* Shine Overlay */}
        <div 
          className="shine-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'skewX(-25deg)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          }}
        />
        
        {/* Badge */}
        {product.badge && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'linear-gradient(135deg, #b8860b, #8b6914)',
            color: '#fff',
            padding: '2px 10px',
            borderRadius: '20px',
            fontSize: '0.55rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            boxShadow: '0 4px 12px rgba(184, 134, 11, 0.3)',
            zIndex: 2,
          }}>
            {product.badge}
          </div>
        )}

        {/* Veg/Non-veg indicator */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(0,0,0,0.6)',
          padding: '3px 10px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          zIndex: 2,
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            border: `2px solid ${product.isVeg ? '#4CAF50' : '#f44336'}`,
            background: product.isVeg ? '#4CAF50' : '#f44336',
          }} />
          <span style={{
            color: '#fff',
            fontSize: '0.5rem',
            fontWeight: 500,
          }}>
            {product.isVeg ? 'VEG' : 'NON-VEG'}
          </span>
        </div>

        {/* Quantity Badge */}
        {quantity > 0 && (
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: '#4CAF50',
            color: '#fff',
            padding: '2px 10px',
            borderRadius: '20px',
            fontSize: '0.6rem',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(76, 175, 80, 0.4)',
            zIndex: 2,
          }}>
            {quantity} in cart
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{
        padding: '0.8rem 0.8rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
        {/* Category */}
        <div style={{
          fontSize: '0.5rem',
          color: '#b8860b',
          background: 'rgba(184, 134, 11, 0.1)',
          padding: '1px 8px',
          borderRadius: '20px',
          display: 'inline-block',
          marginBottom: '0.3rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          alignSelf: 'flex-start',
        }}>
          {product.category}
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
          marginBottom: '0.2rem',
          color: '#1e1e1e',
          fontWeight: 600,
        }}>
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.7rem',
            marginBottom: '0.3rem',
          }}>
            <span style={{ color: '#f5a623' }}>
              {'★'.repeat(Math.floor(product.rating))}
              {product.rating % 1 !== 0 && '½'}
            </span>
            <span style={{ color: '#999', fontSize: '0.6rem' }}>
              ({product.reviews})
            </span>
          </div>
        )}

        {/* Description */}
        <p style={{
          fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)',
          color: '#777',
          marginBottom: '0.8rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          lineHeight: 1.4,
          flex: 1,
        }}>
          {product.desc}
        </p>

        {/* Price and Add Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto',
        }}>
          <span style={{
            fontWeight: 700,
            fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
            color: '#b8860b',
          }}>
            ₹{product.price}
          </span>

          {quantity > 0 ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <button 
                style={{
                  background: '#1e1e1e',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  fontSize: '0.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                onClick={handleDecreaseQuantity}
                onMouseEnter={(e) => e.currentTarget.style.background = '#b8860b'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#1e1e1e'}
              >
                <i className="fas fa-minus"></i>
              </button>
              <span style={{
                fontWeight: 600,
                fontSize: '0.85rem',
                minWidth: '18px',
                textAlign: 'center',
              }}>
                {quantity}
              </span>
              <button 
                style={{
                  background: '#b8860b',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  fontSize: '0.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                onClick={handleIncreaseQuantity}
                onMouseEnter={(e) => e.currentTarget.style.background = '#8b6914'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#b8860b'}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          ) : (
            <button 
              style={{
                background: 'linear-gradient(135deg, #b8860b, #8b6914)',
                color: '#fff',
                border: 'none',
                padding: '0.25rem 0.8rem',
                borderRadius: '20px',
                fontSize: 'clamp(0.55rem, 0.7vw, 0.65rem)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={handleAddToCart}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(184, 134, 11, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="fas fa-plus" style={{ marginRight: '4px' }}></i>
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;