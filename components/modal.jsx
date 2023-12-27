'use client'
import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import Link from 'next/link';
import { motion } from 'framer-motion';


const Modal = ({ showModal }) => {

    const generateFakeProduct = () => ({
        name: faker.commerce.productName(),
        image: faker.image.url(),
    });

    const generateFakeProduct2 = () => ({
        name: faker.commerce.productName(),
    });

    const latestTrends = Array.from({ length: 5 }, generateFakeProduct);
    const populars = Array.from({ length: 5 }, generateFakeProduct2);


    
      const handleModalClick = (e) => {
        e.preventDefault();
      };

    return (
        <div 
        className={`w-full lg:w-3/4 mx-auto rounded-md bg-white p-4 lg:p-10 mt-8 flex flex-col overflow-y-scroll mod`} onMouseDown={handleModalClick}>
            <h6 className='text-2xl font-semibold'>Latest Trends</h6>
            <div className='flex flex-col lg:flex-row items-start justify-between w-full gap-6 mt-6'>
                {latestTrends.map((product, index) => (
                    <div className='w-full lg:w-1/5 cursor-pointer' key={index}>
                        <img src={product.image} alt={product.name} className='w-full h-60 rounded-md mb-2 object-cover' />
                        <Link href={'/products'}>{product.name}</Link>
                    </div>
                ))}
            </div>
            <div className='flex flex-col mt-6'>
                <h6 className='text-2xl font-semibold'>Popular suggestions</h6>
                <ul className='mt-4 flex flex-col gap-3'>
                    {populars.map((popular, index) => (
                        <li key={index} className='text-md font-medium cur'>{popular.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Modal;
