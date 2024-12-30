import React from 'react';
import ProductCards from './ProductCards';

const ProductList = ({ products, onViewDetails }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {products.map((product) => (
        <ProductCards key={product.id} product={product} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};

export default ProductList;
