"use client"
import React, { useState } from 'react';
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { homeSlider } from '@/constraints/homePage';
function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? homeSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === homeSlider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className='h-[300px] md:h-[400px] lg:h-[500px] w-full m-auto relative group'>
      <div
        style={{ backgroundImage: `url(${homeSlider[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-5xl rounded-full p-1 bg-black/10 text-white cursor-pointer'>
        <FaCircleChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-5xl rounded-full p-1 bg-black/10 text-white cursor-pointer'>
        <FaCircleChevronRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}
export default HomeCarousel;