'use client'
import { faker } from '@faker-js/faker';
import Link from 'next/link';
import React, { useMemo, useState, useEffect } from 'react'


const Products = ({ filters }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    // const [hovered, setHovered] = useState(false);
    const [hoveredStates, setHoveredStates] = useState(Array(products.length).fill(false));

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            const generatedProducts = Array.from({ length: 20 }, () => ({
                name: faker.commerce.productName(),
                image: faker.image.url(),
                rating: faker.datatype.number({ min: 1, max: 5 }),
                oldprice: faker.datatype.number({ min: 350, max: 999 }),
                price: faker.datatype.number({ min: 120, max: 3000 }),
                reviews: faker.datatype.number({ min: 121, max: 212 })
            }));

            setProducts(generatedProducts);
            setLoading(false);
        };

        fetchData();
    }, [filters]);
    console.log(products);
    const initialLikes = Array(products.length).fill(false);
    const [likes, setLikes] = useState(initialLikes);

    const filteredProducts = useMemo(() => {
        // Apply filters to products
        return products.filter(product => {
            //   const brandFilter = !filters.brand || filters.brand.includes(product.brand);
            const priceFilter = !filters.price || filters.price.includes(product.price);
            const ratingFilter = !filters.rating || filters.rating.includes(product.rating);

            return ratingFilter && priceFilter;
        });
    }, [products, filters]);

    const handleHover = (index, isHovered) => {
        const updatedHoveredStates = [...hoveredStates];
        updatedHoveredStates[index] = isHovered;
        setHoveredStates(updatedHoveredStates);
    };


    const generateRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= rating; i++) {
            stars.push(<img key={i} src="/str.svg" width={18} alt="" />);
        }
        return stars;

    };



    return (

        loading ? (<img src='/loader.svg' className='absolute left-1/2 top-1/2 right-1/2 transform -translate-x-1/2' width={50} />) : (
            <div className='w-full lg:w-3/4 overflow-y-scroll h-screen mod'>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-8">
                    {/* Filtered Items */}
                    {(filters.rating.length)
                        ? filteredProducts.map((product, index) => (
                          
                            <div className='w-full cursor-pointer relative' key={index} onMouseEnter={() => handleHover(index, true)} onMouseLeave={() => handleHover(index, false)}>
                                <img src={product.image} alt={product.name} className='w-full h-80  mb-2 object-cover' />
                                <img src={likes[index] ? '/liked.svg' : '/like.svg'} width={24} className='absolute right-5 top-5' alt=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const updatedLikes = [...likes];
                                        updatedLikes[index] = !updatedLikes[index];
                                        setLikes(updatedLikes);
                                    }} />
                                <div className='flex flex-col items-start relative'>
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

                                    <a href="/products" className={`w-full -top-12  flex items-center justify-center text-white text-center bgB absolute transition-transform h-10 transform  ${hoveredStates[index] ? 'opacity-1 ' : ' opacity-0'}`}>View Product</a>

                                </div>
                            </div>
                        ))
                        // All items
                        : products.map((product, index) => (
                            <div className='w-full cursor-pointer relative' key={index} onMouseEnter={() => handleHover(index, true)} onMouseLeave={() => handleHover(index, false)}>
                                <img src={product.image} alt={product.name} className='w-full h-80  mb-2 object-cover' />
                                <img src={likes[index] ? '/liked.svg' : '/like.svg'} width={24} className='absolute right-5 top-5' alt=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const updatedLikes = [...likes];
                                        updatedLikes[index] = !updatedLikes[index];
                                        setLikes(updatedLikes);
                                    }} />
                                <div className='flex flex-col items-start relative'>
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

                                    <a href="/products" className={`w-full -top-12  flex items-center justify-center text-white text-center bgB absolute transition-transform h-10 transform  ${hoveredStates[index] ? 'opacity-1 ' : ' opacity-0'}`}>View Product</a>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>)
    )
}

export default Products

