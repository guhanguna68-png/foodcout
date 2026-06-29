import React from 'react';

const CartItem = ({ item, onUpdate, onRemove }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8rem 0',
      borderBottom: '1px solid #f0ebe2',
      gap: '8px',
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.8rem',
        flex: 1,
      }}>
        <img 
          src={item.image} 
          alt={item.name}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            objectFit: 'cover',
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ 
            fontWeight: 500, 
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          }}>
            {item.name}
          </div>
          <div style={{ 
            fontSize: '0.8rem', 
            color: '#b8860b',
            fontWeight: 600,
          }}>
            ₹{item.price}
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button 
            className="btn-sm" 
            style={{ padding: '0.15rem 0.6rem', fontSize: '0.75rem' }} 
            onClick={() => onUpdate(item.id, -1)}
          >
            <i className="fas fa-minus"></i>
          </button>
          <span style={{ 
            fontWeight: 600, 
            minWidth: '20px', 
            textAlign: 'center', 
            fontSize: 'clamp(0.85rem, 2vw, 1rem)' 
          }}>
            {item.quantity}
          </span>
          <button 
            className="btn-sm" 
            style={{ padding: '0.15rem 0.6rem', fontSize: '0.75rem' }} 
            onClick={() => onUpdate(item.id, 1)}
          >
            <i className="fas fa-plus"></i>
          </button>
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ 
            fontWeight: 600, 
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            minWidth: '60px',
            textAlign: 'right',
          }}>
            ₹{(item.price * item.quantity).toFixed(2)}
          </span>
          <button 
            className="btn-sm" 
            style={{
              background: 'transparent',
              color: '#dc3545',
              padding: '0.15rem 0.6rem',
              border: '1px solid #dc3545',
              fontSize: '0.75rem',
            }} 
            onClick={() => onRemove(item.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;