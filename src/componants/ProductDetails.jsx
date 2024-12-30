import React from 'react'

const ProductDetails = ({product,onClose}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg shadow-lg p-6 max-w-md w-full'>
      <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-60 object-cover mb-4"
        />
        <h2 className='text-2xl font-bold mb-2'>
            {product.title}
        </h2>
        <p className='text-gray-700 mb-4'>
            {product.description}
        </p>
        <p className='text-gray-900 font-semibold'>
            ${product.price}
        </p>
        <button
        className='mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
        onClick={onClose}
        >
        إغلاق
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
