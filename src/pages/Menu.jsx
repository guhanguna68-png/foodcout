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
    <div style={{ padding: '1rem 0 2rem' }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: '#1e1e1e',
        }}>
          Our <span className="gold-accent">Menu</span>
        </h1>
        <p style={{
          color: '#5a5a5a',
          fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
          maxWidth: '500px',
          margin: '0.5rem auto',
        }}>
          Explore our carefully crafted dishes made with love
        </p>
      </div>

      {/* Search Bar */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          background: '#ffffff',
          borderRadius: '50px',
          padding: '0.3rem 0.3rem 0.3rem 1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
          border: '1px solid #ede8e0',
          minWidth: '200px',
          maxWidth: '600px',
          transition: 'border-color 0.3s ease',
        }}
        onFocus={(e) => e.currentTarget.style.borderColor = '#b8860b'}
        onBlur={(e) => e.currentTarget.style.borderColor = '#ede8e0'}>
          <i className="fas fa-search" style={{ color: '#b8860b', marginRight: '10px' }}></i>
          <input
            type="text"
            placeholder="Search for items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              flex: 1,
              padding: '0.7rem 0',
              fontSize: '0.95rem',
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
                padding: '0 0.8rem',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b8860b'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
            >
              <i className="fas fa-times-circle"></i>
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs - Same as ProductGrid */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        borderBottom: '2px solid #f0ebe2',
        paddingBottom: '0.8rem',
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
                padding: '0.3rem 1rem',
                borderRadius: '50px',
                border: selectedCategory === category ? '2px solid #b8860b' : '1px solid transparent',
                background: selectedCategory === category ? 'rgba(184, 134, 11, 0.1)' : 'transparent',
                color: selectedCategory === category ? '#b8860b' : '#5a5a5a',
                cursor: 'pointer',
                fontWeight: selectedCategory === category ? 600 : 400,
                transition: 'all 0.3s ease',
                fontSize: 'clamp(0.65rem, 0.8vw, 0.8rem)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.color = '#b8860b';
                  e.currentTarget.style.background = 'rgba(184, 134, 11, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.color = '#5a5a5a';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <i className={`fas ${categoryIcons[category] || 'fa-utensils'}`} style={{ fontSize: '0.6rem' }}></i>
              {category === 'Main Course - Veg' ? 'Main Course (Veg)' : 
               category === 'Main Course - Non Veg' ? 'Main Course (Non-Veg)' : 
               category === 'all' ? 'All Items' : category}
              <span style={{
                background: selectedCategory === category ? '#b8860b' : '#f0ebe2',
                color: selectedCategory === category ? '#fff' : '#999',
                borderRadius: '50%',
                padding: '0.05rem 0.35rem',
                fontSize: '0.5rem',
                fontWeight: 600,
                marginLeft: '2px',
              }}>
                {getCategoryCount(category)}
              </span>
            </button>
          );
        })}
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
          {selectedCategory !== 'all' && ` in ${selectedCategory === 'Main Course - Veg' ? 'Main Course (Veg)' : selectedCategory === 'Main Course - Non Veg' ? 'Main Course (Non-Veg)' : selectedCategory}`}
        </span>
        {filteredProducts.length > 0 && (
          <span style={{
            color: '#b8860b',
            fontSize: '0.8rem',
            fontWeight: 500,
          }}>
            <i className="fas fa-check-circle"></i> Available
          </span>
        )}
      </div>

      {/* Product Grid - 5 Columns */}
      {filteredProducts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem 0',
          color: '#999',
        }}>
          <i className="fas fa-search" style={{ fontSize: '2.5rem', color: '#b8860b', opacity: 0.3 }}></i>
          <p style={{ marginTop: '0.8rem', fontSize: '1rem' }}>No items found. Try adjusting your search!</p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                marginTop: '0.8rem',
                padding: '0.5rem 1.5rem',
                borderRadius: '30px',
                border: '1px solid #b8860b',
                background: 'transparent',
                color: '#b8860b',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b8860b';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#b8860b';
              }}
            >
              Clear Search
            </button>
          )}
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
          .category-tabs {
            gap: 0.3rem !important;
          }
          .category-tabs button {
            padding: 0.2rem 0.7rem !important;
            font-size: 0.65rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .product-grid {
            grid-template-columns: 1fr !important;
          }
          .search-container {
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;