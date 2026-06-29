import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div id="menu-section">
      <div style={{
        fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
        margin: 'clamp(1.5rem, 3vw, 3rem) 0 clamp(1rem, 2vw, 1.5rem)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <i className="fas fa-leaf" style={{ color: '#b8860b', fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}></i>
        Signature Dishes
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 28vw, 300px), 1fr))',
        gap: 'clamp(1.5rem, 2vw, 2.5rem)',
        marginBottom: '2rem',
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;