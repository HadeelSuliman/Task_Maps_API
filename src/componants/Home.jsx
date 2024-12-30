import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);   

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleViewDetails = (product) => {
    setSelectProduct(product);   
  };

  const handleCloseDetails = () => {
    setSelectProduct(null); 

  return (
    <div className='p-4'>
      {selectProduct && (
        <ProductDetails product={selectProduct} onClose={handleCloseDetails} />
      )}

      {products.length > 0 ? (
        <ProductList products={products} onViewDetails={handleViewDetails} /> 
      ) : (
        <p>....جاري تحميل المنتجات</p>
      )}
    </div>
  )
}
}
export default Home
