"use client"
import React, { useState } from "react";
import { BiCalendar, BiUser } from "react-icons/bi";
import { FaPlay } from "react-icons/fa6";
import Modal from "./Helper/Modal";

const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    const showModalHandelar = () => setShowModal(true)
    const closeModalHandelar = () => setShowModal(false)

    return <div className="relative overflow-hidden h-[88vh] bg-[url('/images/ui_one/banner1.jpg')] bg-cover bg-center">
        {/* Model Box */}
        {showModal && <Modal hideModal={closeModalHandelar} />}
        {/* dark overlay */}
        <div className="absolute overflow-hidden top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.68)]" ></div>
        <div className="relative z-[10] flex items-center h-[100%] text-white">
            <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem] overflow-hidden">
                {/* text content */}
                <div>
                    <p className="sm:px-8 px-4 py-1 mb-[1rem] text-[12px] sm:text-[16px] bg-red-600 text-white w-fit uppercase">Football</p>
                    <h1 className="text-[25px] sm:text-[32px] md:text-[38px] lg:text-[45px] leading-[2rem] md:leading-[3.5rem] font-bold ">THE WORLD CUP 2026 WHAT ARE THE EXCITING NEWS FOR US</h1>
                    <div className="flex items-center space-x-14">
                        <div className="flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]">
                            <BiCalendar className="w-[1rem] h-[1rem]" />
                            <p className="text-[11px] sm:text-[16px] uppercase">March 20, 2024</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]">
                            <BiUser className="w-[1rem] h-[1rem]" />
                            <p className="text-[11px] sm:text-[16px] uppercase">By webdev warriors</p>
                        </div>
                    </div>
                    <div className="mt-[2.4rem] flex items-center space-x-6">
                        <button className="sm:px-8 sm:py-2.5 px-4 py-2 bg-red-600 hover:bg-red-800 transition-all duration-200 sm:text-[17px] text-[13px] font-semibold">Watch Highlight</button>
                        <button className="sm:px-8 sm:py-2.5 px-4 py-2 bg-white hover:bg-gray-300 transition-all duration-200 sm:text-[17px] text-[13px] font-semibold text-black">Learn More</button>
                    </div>
                </div>

                {/* Play Button */}
                <div >
                    <div onClick={showModalHandelar} className="w-[10rem] lg:ml-auto h-[10rem] rounded-full bg-red-600 hover:bg-black transition-all duration-200 cursor-pointer sm:flex flex-col items-center justify-center hidden">
                        <FaPlay className="w-[3rem] h-[3rem] to-white" />
                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default Hero;