import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          color: '#1e1e1e',
        }}>
          <span className="gold-accent">Our</span> Menu
        </h1>
        <p style={{ color: '#5a5a5a', fontSize: '1.1rem', maxWidth: '500px', margin: '0.5rem auto' }}>
          Explore our carefully crafted dishes made with love
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '2rem',
        maxWidth: '800px',
        margin: '0 auto 2rem',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#ffffff',
          borderRadius: '50px',
          padding: '0.5rem 1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          border: '1px solid #e8e0d6',
        }}>
          <i className="fas fa-search" style={{ color: '#b8860b', marginRight: '12px' }}></i>
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              flex: 1,
              padding: '0.8rem 0',
              fontSize: '1rem',
              background: 'transparent',
              fontFamily: "'Inter', sans-serif",
            }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                background: 'none',
                border: 'none',
                color: '#999',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              <i className="fas fa-times-circle"></i>
            </button>
          )}
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'center',
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '30px',
                border: selectedCategory === category ? '2px solid #b8860b' : '1px solid #e0d6c8',
                background: selectedCategory === category ? '#b8860b' : 'transparent',
                color: selectedCategory === category ? '#fff' : '#2c2c2c',
                cursor: 'pointer',
                fontWeight: selectedCategory === category ? 600 : 400,
                transition: 'all 0.2s',
                fontSize: '0.9rem',
                textTransform: 'capitalize',
              }}
            >
              {category === 'all' ? 'All Items' : category}
            </button>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', color: '#777', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: '#999' }}>
          <i className="fas fa-search" style={{ fontSize: '3rem', color: '#b8860b', opacity: 0.3 }}></i>
          <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>No dishes found. Try a different search!</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 28vw, 300px), 1fr))',
          gap: 'clamp(1.5rem, 2vw, 2.5rem)',
          marginBottom: '2rem',
        }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;