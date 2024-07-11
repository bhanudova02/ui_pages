import React from 'react';
import { GrRestaurant } from 'react-icons/gr';

const ReservationForm = () => {
    return <div className='bg-green-700 p-6 rounded-lg'>
        <GrRestaurant className='w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto' />
        <h1 className='text-center font-bold uppercase text-[30px] md:text-[40px] lg:text-[50px] mt-[0.5rem] text-white'>Reservation</h1>
        <p className='uppercase text-[20px] md:text-[25px] text-white font-semibold text-center'>
            Book your table
        </p>
        {/* input section */}
        <div className='mt-[2rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-2'>
                <div>
                    <input type="text" className='w-full rounded-lg p-2 outline-none font-medium' placeholder='Enter First Name'/>
                </div>
                <div className='mt-[0.5rem] md:mt-0'>
                    <input type="text" className='w-full rounded-lg p-2 outline-none font-medium' placeholder='Enter Last Name'/>
                </div>
            </div>
            <div className='my-[1rem]'>
                <input type="email" className='w-full rounded-lg p-2 outline-none font-medium' placeholder='Enter Email Address'/>
            </div>

            <button className='px-8 py-3 rounded-lg mb-[3rem] text-[16px] w-full bg-blue-950 transition-all duration-200 hover:bg-red-600 text-white'>Book Now</button>

        </div>
    </div>
}

export default ReservationForm;