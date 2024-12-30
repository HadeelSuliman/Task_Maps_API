import React from 'react'

const Navbar = () => {
 return(
  <nav className='bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md '>
    <div className='container mx-auto flex justify-between items-center'>
        <ul className='flex spce-x-4'>
            <li>
                <a href="#" className='text-white hover:text-gray-300'>الرئيسية</a>
            </li>
            <li>
                <a href="#" className='text-white hover:text-gray-300'>المنتجات</a>
            </li>
            <li>
                <a href="#" className='text-white hover:text-gray-300'> تواصل معنا</a>
            </li>
        </ul>
        <h1 className='text-3xl font-bold text-white'>منتجاتنا</h1>
    </div>
  </nav>
 )
}

export default Navbar
