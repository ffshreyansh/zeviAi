'use client'
import Products from '@/components/Products';
import { faker } from '@faker-js/faker';
import { motion } from 'framer-motion';
import Link from 'next/link'
import React, { useState } from 'react'


const page = () => {
    const [clicked, setClicked] = useState(true);

    const [filters, setFilters] = useState({
        // brand: [],
        price: [],
        rating: [],
    });


    const handleFilterChange = (filterType, value) => {
     
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: -10 },
    };
    console.log(filters)

    return (
        <div className='w-full flex flex-col gap-6 items-start h-screen p-2 lg:p-10'>
            <div className='flex items-center justify-between  gap-5 lg:gap-0 w-full'>
                <div className='w-fit lg:w-1/3 border flex items-center justify-between bg-white mx-0 lg:mx-auto rounded-xl px-2 lg:px-5 py-1 lg:py-2'>
                    <input type="text" className='hidden lg:inline w-3/4 outline-none py-2' name="" id="" required placeholder='Search Products... eg: Jeans' />
                    <Link href={'/products'}>
                        <img width="28" height="28" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png" alt="external-search-logistic-delivery-kiranshastry-solid-kiranshastry" />
                    </Link>
                </div>
                <img src="/zevi.webp" width={80} alt="" />
            </div>
            <div className='flex flex-col items-start gap-2 lg:gap-10'>
                <span className='text-xl lg:text-3xl font-medium'>Search Results</span>

                <div className='flex flex-col lg:flex-row items-start gap-3 lg:gap-8'>
                    <div className='w-full lg:w-1/4 h-fit lg:h-screen flex flex-row lg:flex-col items-start gap-5'>
                        <div className='w-full h-fit mt-0 lg:mt-4 flex flex-col border-0 lg:border-b' onClick={() => setClicked(!clicked)}>
                            <span className='flex items-center justify-between pb-2 uppercase font-medium text-md lg:text-xl cursor-pointer' >
                                Brand
                                <img src={clicked ? '/down.svg' : '/up.svg'} alt="" />
                            </span>
                            <motion.div className={`flex-col py-5 gap-3 ${clicked ? 'hidden' : 'flex'}`}

                                transition={{ type: "inertia", duration: 0.2 }}
                            >
                                <span className='text-xs lg:text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="brand" id="mango" />
                                    Mango
                                </span>
                                <span className='text-xs lg:text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="brand" id="hm" />
                                    H&M
                                </span>
                            </motion.div>

                        </div>
                        <div className='w-full flex flex-col h-fit border-0  lg:border-b' onClick={() => setClicked(!clicked)}>
                            <span className='flex items-center justify-between uppercase font-medium text-md pb-2 lg:text-xl cursor-pointer '>
                                Price
                                <img src={clicked ? '/down.svg' : '/up.svg'} alt="" />
                            </span>
                            <motion.div className={`${clicked ? 'hidden' : 'flex'} flex-col py-5 gap-3 `}
                                transition={{ type: "inertia", duration: 0.2 }}
                            >
                                <span className='text-xs lg:text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="range" id="under5" onChange={() => handleFilterChange('price', [500])} />
                                    Under 500
                                </span>
                                <span className='text-xs lg:text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="range" id="over5" />
                                    1000 to 3000
                                </span>
                            </motion.div>

                        </div>
                        <div className='w-full flex flex-col h-fit border-0  lg:border-b' onClick={() => setClicked(!clicked)}>
                            <span className='flex items-center justify-between uppercase pb-2 font-medium text-md lg:text-xl cursor-pointer '>
                                Ratings
                                <img src={clicked ? '/down.svg' : '/up.svg'} alt="" />
                            </span>
                            <motion.div className={`${clicked ? 'hidden' : 'flex'} flex-col py-5 gap-3`}
                                transition={{ type: "inertia", duration: 0.2 }}
                            >
                                <span className='text-xs lg:text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="range" id="under5" onChange={() => handleFilterChange('rating', [5])} />
                                    5 Stars
                                </span>
                                <span className='text-xs lg:text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="range" id="over5" onChange={() => handleFilterChange('rating', [4])} />
                                    4 Stars
                                </span>
                                <span className='text-xs lg:text-lg font-normal flex items-center gap-2'>
                                    <input type="checkbox" className='w-5 h-5' name="range" id="under5" onChange={() => handleFilterChange('rating', [3])} />
                                    3 Stars
                                </span>

                            </motion.div>

                        </div>

                    </div>
                    <Products filters={filters} />
                </div>
            </div>
        </div>
    )
}

export default page