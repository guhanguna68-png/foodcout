import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories from products
  const allCategories = ['all', ...new Set(PRODUCTS.map(p => p.category))];
  
  // Split Main Course into Veg and Non-Veg
  const categories = [];
  allCategories.forEach(cat => {
    if (cat === 'Main Course') {
      // Check if there are veg and non-veg main course items
      const hasVeg = PRODUCTS.some(p => p.category === 'Main Course' && p.isVeg === true);
      const hasNonVeg = PRODUCTS.some(p => p.category === 'Main Course' && p.isVeg === false);
      
      if (hasVeg) categories.push('Main Course - Veg');
      if (hasNonVeg) categories.push('Main Course - Non Veg');
    } else {
      categories.push(cat);
    }
  });

  // Keep 'all' as first category
  const sortedCategories = ['all', ...categories.filter(c => c !== 'all')];

  // Category icons for display
  const categoryIcons = {
    'all': 'fa-utensils',
    'Pastries': 'fa-cake',
    'Breads': 'fa-bread-slice',
    'Desserts': 'fa-ice-cream',
    'Cakes': 'fa-birthday-cake',
    'Cookies': 'fa-cookie',
    'Drinks': 'fa-mug-hot',
    'Main Course - Veg': 'fa-leaf',
    'Main Course - Non Veg': 'fa-drumstick-bite'
  };

  // Get count for each category
  const getCategoryCount = (category) => {
    if (category === 'all') return PRODUCTS.length;
    if (category === 'Main Course - Veg') {
      return PRODUCTS.filter(p => p.category === 'Main Course' && p.isVeg === true).length;
    }
    if (category === 'Main Course - Non Veg') {
      return PRODUCTS.filter(p => p.category === 'Main Course' && p.isVeg === false).length;
    }
    return PRODUCTS.filter(p => p.category === category).length;
  };

  // Filter products based on selected category
  const filteredProducts = PRODUCTS.filter(product => {
    let matchCategory = true;
    
    // Handle Main Course split
    if (selectedCategory === 'Main Course - Veg') {
      matchCategory = product.category === 'Main Course' && product.isVeg === true;
    } else if (selectedCategory === 'Main Course - Non Veg') {
      matchCategory = product.category === 'Main Course' && product.isVeg === false;
    } else if (selectedCategory !== 'all') {
      matchCategory = product.category === selectedCategory;
    }
    
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
          {sortedCategories.map(category => {
            // Skip if category has 0 products
            if (getCategoryCount(category) === 0) return null;
            
            return (
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
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <i className={`fas ${categoryIcons[category] || 'fa-utensils'}`}></i>
                {category === 'Main Course - Veg' ? 'Main Course (Veg)' : 
                 category === 'Main Course - Non Veg' ? 'Main Course (Non-Veg)' : 
                 category === 'all' ? 'All Items' : category}
                <span style={{
                  background: selectedCategory === category ? 'rgba(255,255,255,0.2)' : '#e8e0d6',
                  color: selectedCategory === category ? '#fff' : '#777',
                  borderRadius: '50%',
                  padding: '0.1rem 0.5rem',
                  fontSize: '0.65rem',
                  marginLeft: '4px',
                }}>
                  {getCategoryCount(category)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ textAlign: 'center', color: '#777', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
        {selectedCategory !== 'all' && selectedCategory !== 'Main Course - Veg' && selectedCategory !== 'Main Course - Non Veg' && ` in ${selectedCategory}`}
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