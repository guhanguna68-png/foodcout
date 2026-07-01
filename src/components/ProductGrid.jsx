import { useState } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Items', icon: 'fa-utensils' },
  
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const getCategoryCount = (category) => {
    if (category === 'all') return products.length;
    return products.filter(p => p.category === category).length;
  };

  return (
    <div id="menu-section">
      <div style={{
        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
        margin: 'clamp(1rem, 2vw, 2rem) 0 clamp(0.8rem, 1.5vw, 1.2rem)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <i className="fas fa-leaf" style={{ color: '#b8860b', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}></i>
        Our Menu
      </div>

      {/* Category Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        borderBottom: '2px solid #f0ebe2',
        paddingBottom: '0.8rem',
      }}>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            style={{
              padding: '0.3rem 1rem',
              borderRadius: '50px',
              border: activeCategory === category.id ? '2px solid #b8860b' : '1px solid transparent',
              background: activeCategory === category.id ? 'rgba(184, 134, 11, 0.1)' : 'transparent',
              color: activeCategory === category.id ? '#b8860b' : '#5a5a5a',
              cursor: 'pointer',
              fontWeight: activeCategory === category.id ? 600 : 400,
              transition: 'all 0.3s ease',
              fontSize: 'clamp(0.65rem, 0.8vw, 0.8rem)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            onMouseEnter={(e) => {
              if (activeCategory !== category.id) {
                e.currentTarget.style.color = '#b8860b';
                e.currentTarget.style.background = 'rgba(184, 134, 11, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeCategory !== category.id) {
                e.currentTarget.style.color = '#5a5a5a';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <i className={`fas ${category.icon}`} style={{ fontSize: '0.6rem' }}></i>
            {category.label}
            <span style={{
              background: activeCategory === category.id ? '#b8860b' : '#f0ebe2',
              color: activeCategory === category.id ? '#fff' : '#999',
              borderRadius: '50%',
              padding: '0.05rem 0.35rem',
              fontSize: '0.5rem',
              fontWeight: 600,
              marginLeft: '2px',
            }}>
              {getCategoryCount(category.id)}
            </span>
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <span style={{
          color: '#777',
          fontSize: '0.8rem',
        }}>
          Showing <strong>{filteredProducts.length}</strong> items
          {activeCategory !== 'all' && ` in ${activeCategory}`}
        </span>
      </div>

      {/* Product Grid - 5 Columns */}
      {filteredProducts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem 0',
          color: '#999',
        }}>
          <i className="fas fa-search" style={{ fontSize: '2.5rem', color: '#b8860b', opacity: 0.3 }}></i>
          <p style={{ marginTop: '0.8rem', fontSize: '1rem' }}>No items found in this category.</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1.2rem',
          marginBottom: '2rem',
        }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1200px) {
          .product-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        
        @media (max-width: 992px) {
          .product-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 480px) {
          .product-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductGrid;