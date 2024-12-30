import React from 'react';

const ProductCards = ({ product, onViewDetails }) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className='w-full h-40 object-cover'
      />
      <div className='p-4'>
        <h2 className='text-lg font-semibold'>{product.title}</h2>
        <p className='text-gray-600'>${product.price}</p>
        <button 
          className='mt-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded'
          onClick={() => onViewDetails(product)}
        >
          عرض التفاصيل
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
