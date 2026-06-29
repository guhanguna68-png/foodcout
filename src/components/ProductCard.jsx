import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '28px',
      overflow: 'hidden',
      boxShadow: '0 8px 28px rgba(0,0,0,0.03)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255,255,255,0.4)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }} className="product-card">
      
      {/* Image */}
      <div style={{
        position: 'relative',
        height: '200px',
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
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        
        {/* Badge */}
        {product.badge && (
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'linear-gradient(135deg, #b8860b, #8b6914)',
            color: '#fff',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            boxShadow: '0 4px 12px rgba(184, 134, 11, 0.3)',
          }}>
            {product.badge}
          </div>
        )}

        {/* Veg/Non-veg indicator */}
        {product.isVeg !== undefined && (
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: `2px solid ${product.isVeg ? '#0a8a0a' : '#b22222'}`,
            background: product.isVeg ? '#0a8a0a' : '#b22222',
            opacity: 0.9,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }} />
        )}
      </div>

      {/* Content */}
      <div style={{
        padding: '1.2rem 1rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '0.3rem',
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
            fontWeight: 600,
            margin: 0,
            flex: 1,
          }}>
            {product.name}
          </h3>
        </div>

        {product.rating && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            margin: '4px 0',
            fontSize: '0.85rem',
          }}>
            <span style={{ color: '#f5a623' }}>
              {'★'.repeat(Math.floor(product.rating))}
              {product.rating % 1 !== 0 && '½'}
            </span>
            <span style={{ color: '#777', fontSize: '0.75rem' }}>
              ({product.reviews} reviews)
            </span>
          </div>
        )}

        <p style={{
          fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
          color: '#5a5a5a',
          margin: '0.3rem 0 0.8rem',
          flex: 1,
          lineHeight: 1.5,
        }}>
          {product.desc}
        </p>

        {product.category && (
          <div style={{
            fontSize: '0.7rem',
            color: '#b8860b',
            background: '#f5efe8',
            padding: '2px 12px',
            borderRadius: '12px',
            display: 'inline-block',
            alignSelf: 'flex-start',
            marginBottom: '0.8rem',
          }}>
            {product.category}
          </div>
        )}

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto',
        }}>
          <div style={{
            fontWeight: 700,
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            color: '#1e1e1e',
          }}>
            ₹{product.price} <small style={{
              fontWeight: 400,
              fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
              color: '#777',
              marginLeft: 4,
            }}>/-</small>
          </div>

          <button 
            className="btn-sm" 
            onClick={handleAddToCart}
            style={{
              background: added ? '#0a8a0a' : '#1e1e1e',
              transition: 'all 0.3s ease',
            }}
          >
            {added ? (
              <><i className="fas fa-check"></i> Added!</>
            ) : (
              <><i className="fas fa-plus"></i> <span className="hide-mobile">Add</span></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;