'use client'
import { faker } from '@faker-js/faker';
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [clicked, setClicked] = useState(true);


    const generateFakeProduct = () => ({
        name: faker.commerce.productName(),
        image: faker.image.url(),
        rating: faker.datatype.number({ min: 1, max: 5 })
    });
    const products = Array.from({ length: 20 }, generateFakeProduct);
    const initialLikes = Array(products.length).fill(false);
    const [likes, setLikes] = useState(initialLikes);

    const handleLike = () => {
      
    }

    return (
        <div className='w-full flex flex-col gap-6 items-start h-screen p-10'>
            <div className='flex items-center w-full'>
                <div className='w-1/3 border flex items-center justify-between bg-white mx-auto rounded-xl px-5 py-2'>
                    <input type="text" className='w-3/4 outline-none py-2' name="" id="" required placeholder='Search Products... eg: Jeans' />
                    <Link href={'/products'}>
                        <img width="28" height="28" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png" alt="external-search-logistic-delivery-kiranshastry-solid-kiranshastry" />
                    </Link>
                </div>
                <img src="/zevi.webp" width={80} alt="" />
            </div>
            <div className='flex flex-col items-start gap-10'>
                <span className='text-3xl font-medium'>Search Results</span>

                <div className='flex items-start gap-8'>
                    <div className='w-1/4 h-20 lg:h-screen flex flex-col items-start gap-5'>
                        <div className='w-full mt-4 flex flex-col'>
                            <span className='flex items-center justify-between uppercase font-medium text-xl cursor-pointer'>
                                Brand
                                <img src={clicked ? '/down.svg' : '/up.svg'} alt="" />
                            </span>
                            <div className='flex flex-col py-5 gap-3 border-b'>
                                <span className='text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="brand" id="mango" />
                                    Mango
                                </span>
                                <span className='text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="brand" id="hm" />
                                    H&M
                                </span>
                            </div>

                        </div>
                        <div className='w-full flex flex-col'>
                            <span className='flex items-center justify-between uppercase font-medium text-xl cursor-pointer'>
                                Price Range
                                <img src={clicked ? '/down.svg' : '/up.svg'} alt="" />
                            </span>
                            <div className='flex flex-col py-5 gap-3 border-b'>
                                <span className='text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="range" id="under5" />
                                    Under 500
                                </span>
                                <span className='text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="range" id="over5" />
                                    1000 to 3000
                                </span>
                            </div>

                        </div>
                        <div className='w-full flex flex-col'>
                            <span className='flex items-center justify-between uppercase font-medium text-xl cursor-pointer'>
                                Ratings
                                <img src={clicked ? '/down.svg' : '/up.svg'} alt="" />
                            </span>
                            <div className='flex flex-col py-5 gap-3 '>
                                <span className='text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="range" id="under5" />
                                    5 Stars
                                </span>
                                <span className='text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="range" id="over5" />
                                    4 Stars
                                </span>
                                <span className='text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="range" id="under5" />
                                    3 Stars
                                </span>

                            </div>

                        </div>

                    </div>
                    <div className='w-3/4 overflow-y-scroll h-screen mod'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {/* Generate 20 items */}
                            {products.map((product, index) => (
                                <div className='w-full cursor-pointer relative' key={index}>
                                    <img src={product.image} alt={product.name} className='w-full h-80 rounded-md mb-2 object-cover' />
                                    <img src={likes[index] ? '/liked.svg' : '/like.svg'} width={24} className='absolute right-5 top-5' alt="" 
                                    onClick={()=>   {const updatedLikes = [...likes];
                                                    updatedLikes[index] = !updatedLikes[index];
                                                    setLikes(updatedLikes);}} />
                                    <div className='flex flex-col items-start'>
                                        <Link href="/products" className='text-md font-medium'>
                                            {product.name}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page