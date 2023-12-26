'use client'
import { faker } from '@faker-js/faker';
import Link from 'next/link';
import React, { useMemo, useState } from 'react'


const Products = () => {
    const products = useMemo(() => {
        const generateFakeProduct = () => ({
          name: faker.commerce.productName(),
          image: faker.image.url(),
          rating: faker.datatype.number({ min: 1, max: 5 })
        });
    
        return Array.from({ length: 20 }, generateFakeProduct);
      }, []);
    const initialLikes = Array(products.length).fill(false);
    const [likes, setLikes] = useState(initialLikes);


  return (
    <div className='w-full lg:w-3/4 overflow-y-scroll h-screen mod'>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-8">
        {/* Generate 20 items */}
        {products.map((product, index) => (
            <div className='w-full cursor-pointer relative' key={index}>
                <img src={product.image} alt={product.name} className='w-full h-80 rounded-md mb-2 object-cover' />
                <img src={likes[index] ? '/liked.svg' : '/like.svg'} width={24} className='absolute right-5 top-5' alt="" 
                onClick={(e)=>   {e.preventDefault();
                                const updatedLikes = [...likes];
                                updatedLikes[index] = !updatedLikes[index];
                                setLikes(updatedLikes);}} />
                <div className='flex flex-col items-start'>
                    <Link href="/products" className='text-md font-medium'>
                        <p>{product.rating}</p>
                        {product.name}
                    </Link>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Products