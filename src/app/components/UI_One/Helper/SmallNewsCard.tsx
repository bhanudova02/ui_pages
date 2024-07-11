import Image from 'next/image';
import React from 'react'

interface Props {
    title: string;
    image: string;
    date: string;
}

const SmallNewsCard = ({ image, date, title }: Props) => {
    return <div className='bg-gray-900 p-4  flex items-center space-x-6 md:space-x-2 lg:space-x-6'>
        <div className='hidden lg:block'>
            <Image src={image} width={120} height={120} alt={title} className='object-cover w-full h-full' />
        </div>
        {/* Content */}
        <div>
            <div className='flex items-center space-x-4 md:space-x-2 lg:space-x-4'>
                <h1 className='w-fit px-4 text-[8px] sm:text-[10px] py-[2px] uppercase bg-red-600 text-white'>FootBall</h1>
                <p className='text-white text-[9px] md:text-[10px] lg:text-[12px] text-opacity-75'>{date}</p>
            </div>
            <div>
                <h1 className='text-[13px] md:text-[14px] lg:text-[17px] hover:text-red-500 cursor-pointer hover:underline transition-all duration-500 uppercase mt-[0.5rem] md:mt-[0.2rem] lg:mt-[0.5rem] text-white font-semibold'>{title}</h1>
                <p className='mt-[1rem] md:mt-[0.2rem] lg:mt-[1rem] hover:text-red-500 cursor-pointer hover:underline transition-all duration-500 text-white text-[12px] md:text-[10px] lg:text-[15px] font-semibold'>Read More</p>
            </div>
        </div>
    </div>
}

export default SmallNewsCard