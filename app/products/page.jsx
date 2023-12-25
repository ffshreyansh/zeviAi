import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-screen p-10'>
            <div className='flex items-center w-full'>
                <div className='w-1/3 border flex items-center justify-between bg-white mx-auto rounded-xl px-5 py-2'>
                    <input type="text" className='w-3/4 outline-none py-2' name="" id="" required placeholder='Search Products... eg: Jeans' />
                    <Link href={'/products'}>
                        <img width="28" height="28" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-search-logistic-delivery-kiranshastry-solid-kiranshastry.png" alt="external-search-logistic-delivery-kiranshastry-solid-kiranshastry" />
                    </Link>
                </div>
                <img src="/zevi.webp" width={80} alt="" />
            </div>
            <div className='flex items-start'>
                <div className='w-1/4 h-20 lg:h-screen '>
                    <span className=''>Search Results</span>
                </div>
                <div className='w-3/4 overflow-y-scroll h-screen mod'>

                </div>
            </div>
        </div>
    )
}

export default page