'use client'
import { faker } from '@faker-js/faker';
import Link from 'next/link';
import React, { useMemo, useState, useEffect } from 'react'
import Loader from './loader';


const Products = ({ filters }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Simulate fetching data, replace with your actual data fetching logic
        const fetchData = async () => {
            setLoading(true);

            // Simulating API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Generate fake products
            const generatedProducts = Array.from({ length: 20 }, () => ({
                name: faker.commerce.productName(),
                image: faker.image.url(),
                rating: faker.datatype.number({ min: 1, max: 5 }),
                oldprice: faker.datatype.number({ min: 350, max: 999 }),
                price: faker.datatype.number({ min: 120, max: 345 }),
                reviews: faker.datatype.number({ min: 121, max: 212 })
            }));

            setProducts(generatedProducts);
            setLoading(false);
        };

        fetchData();
    }, [filters]);

    const initialLikes = Array(products.length).fill(false);
    const [likes, setLikes] = useState(initialLikes);

    const filteredProducts = useMemo(() => {
        // Apply filters to products
        return products.filter(product => {
            //   const brandFilter = !filters.brand || filters.brand.includes(product.brand);
            const priceFilter = !filters.price || filters.price.includes(product.price);
            const ratingFilter = !filters.rating || filters.rating.includes(product.rating);

            return ratingFilter;
        });
    }, [products, filters]);

    const generateRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= rating; i++) {
            stars.push(<img key={i} src="/str.svg" width={18} alt="" />);
        }
        return stars;

    };



    return (

        loading ? (<img src='/loader.svg' className='absolute left-1/2 top-1/2 right-1/2' width={50}/>) : (
            <div className='w-full lg:w-3/4 overflow-y-scroll h-screen mod'>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-8">
                    {/* Generate filtered items or all items if no filters applied */}
                    {(filters.rating.length)
                        ? filteredProducts.map((product, index) => (
                            // ... existing code
                            <div className='w-full cursor-pointer relative' key={index}>
                                <img src={product.image} alt={product.name} className='w-full h-80 rounded-md mb-2 object-cover' />
                                <img src={likes[index] ? '/liked.svg' : '/like.svg'} width={24} className='absolute right-5 top-5 ' alt=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const updatedLikes = [...likes];
                                        updatedLikes[index] = !updatedLikes[index];
                                        setLikes(updatedLikes);
                                    }} />
                                <div className='flex flex-col items-start'>
                                    <Link href="/products" className='text-md font-medium'>
                                        {product.name}
                                    </Link>
                                    <div className='flex items-center gap-2'>
                                        <span className=' line-through text-gray-400 font-normal'>{product.oldprice}</span>
                                        <span className=' font-medium text-blue-500'>Rs. {product.price}</span>
                                    </div>
                                    <span className='flex items-center gap-2 text-xs'>
                                        {generateRatingStars(product.rating)}
                                        ({product.reviews})
                                    </span>
                                </div>
                            </div>
                        ))
                        : products.map((product, index) => (
                            // ... existing code
                            <div className='w-full cursor-pointer relative' key={index}>
                                <img src={product.image} alt={product.name} className='w-full h-80 rounded-md mb-2 object-cover' />
                                <img src={likes[index] ? '/liked.svg' : '/like.svg'} width={24} className='absolute right-5 top-5' alt=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const updatedLikes = [...likes];
                                        updatedLikes[index] = !updatedLikes[index];
                                        setLikes(updatedLikes);
                                    }} />
                                <div className='flex flex-col items-start'>
                                    <Link href="/products" className='text-md font-medium'>
                                        {product.name}
                                    </Link>
                                    <div className='flex items-center gap-2'>
                                        <span className=' line-through text-gray-400 font-normal'>{product.oldprice}</span>
                                        <span className=' font-medium text-blue-500'>Rs. {product.price}</span>
                                    </div>
                                    <span className='flex items-center gap-2 text-xs'>
                                        {generateRatingStars(product.rating)}
                                        ({product.reviews})
                                    </span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>)
    )
}

export default Products

