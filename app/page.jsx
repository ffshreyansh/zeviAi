'use client'
import React, { useState } from 'react'
import Modal from '@/components/modal';
import { faker } from '@faker-js/faker';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [isFocused, setisFocused] = useState(false);

  const handleInputFocus = () => {
    setisFocused(true);
  };

  const handleInputBlur = () => {
    setisFocused(false);
  };
  console.log('fkr', faker.commerce.product());
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='min-h-screen w-full p-10  bgg'>
        <img src="/zevi.webp" width={80} alt="zevi logo" className='ml-auto' />
        <div className='w-full '>
            <div className='w-2/3 flex items-center justify-between bg-white mx-auto rounded-xl px-5 py-4'>
                <input type="text" className='w-3/4 outline-none py-2' name="" id="" required   onFocus={handleInputFocus} onBlur={handleInputBlur} placeholder='Search Products... eg: Jeans'/>
                <Link href={'/products'}>
                <img width="28" height="28" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png" alt="external-search-logistic-delivery-kiranshastry-solid-kiranshastry"/>
                </Link>
            </div>
            <motion.div
              className='w-full'
              animate={isFocused ? 'visible' : 'hidden'}
              variants={fadeInUpVariants}
              initial="hidden"
              transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2 }}
            >
            <Modal showModal={isFocused} />
            </motion.div>
        </div>
    </div>
  );
}
