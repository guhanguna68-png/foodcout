import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { PRODUCTS } from '../data/products';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGrid products={PRODUCTS} />
    </>
  );
};

export default Home;