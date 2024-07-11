"use client";
import { highlightTypes } from '@/constraints/ui_one'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa6'
import Modal from '../Helper/Modal';

const Highlights = ({ date, title, image }: highlightTypes) => {

  const [showModal, setShowModal] = useState(false);
  const showModalHandelar = () => setShowModal(true)
  const closeModalHandelar = () => setShowModal(false)


  return <div className='bg-[#1e1c1c] p-4'>
    {/* Model Box */}
    {showModal && <Modal hideModal={closeModalHandelar} />}
    {/* Image */}
    <div className='h-[240px] relative z-[10]'>
      <Image src={image} alt={title} width={200} height={200} className='object-cover h-[100%] w-[100%]' />
      <div onClick={showModalHandelar} className='w-[4rem] h-[4rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center flex-col bg-black hover:bg-red-600 rounded-full transition-all decoration-purple-300 cursor-pointer'>
        <FaPlay className='text-white' />
      </div>
      {/* Time */}
      <div className='px-4 py-1 bg-red-600 absolute bottom-0 left-0 flex items-center space-x-2'>
        <FaPlay className='text-white' />
        <p className='text-[15px] text-white'>6:00pm</p>
      </div>
    </div>
    {/* Title */}
    <h1 className='text-[18px] text-white mt-[1.5rem] pb-[1.5rem] border-b-2 border-gray-500 border-opacity-40 font-semibold'>{title}</h1>
    {/* Date */}
    <p className='text-white text-opacity-70 mt-[0.5rem]'>{date}</p>
  </div>
}

export default Highlights