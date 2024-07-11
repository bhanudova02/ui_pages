import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

const CardData = [
    {
        image: "/images/ui_one/h1.jpg",
        title: "ARSENAL STAY TOP, TEN HAG AT MAN",
        date: "21 March 2024",
        url: "https://www.youtube.com/embed/gut6hzrsa5w?si=tEoyA6FjRJbb2zj-"
    },
    {
        image: "/images/ui_one/h2.jpg",
        title: "ARSENAL STAY TOP",
        date: "21 March 2024",
        url: "https://www.youtube.com/embed/8qtR3_Uj1lA?si=Ij888-3WKqY_p2hv"
    },
    {
        image: "/images/ui_one/h3.jpg",
        title: "ARSENAL STAY TOP, TEN HAG AT ",
        date: "21 March 2024",
        url: "https://www.youtube.com/embed/7-58u8HdH48?si=JwOjcKTMRQVYxsKe"
    },
    {
        image: "/images/ui_one/h4.jpg",
        title: "ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY",
        date: "21 March 2024",
        url: "https://www.youtube.com/embed/MKgdwf65-FM?si=YxoWHOYFpQJA4mbi"
    }
]

const CardComponent = () => {
    return (
        <div className='mt-[3rem] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]'>
            {
                CardData.map((data: any, i: number) => (
                    <div key={i} className='bg-[#1e1c1c] p-4'>
                        {/* Image */}
                        <div className='h-[240px] relative z-[10]'>
                            <Image src={data.image} alt={data.title} width={200} height={200} className='object-cover h-[100%] w-[100%]' />

                            <Dialog>
                                <DialogTrigger>
                                    <div className='w-[4rem] h-[4rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center flex-col bg-black hover:bg-red-600 rounded-full transition-all decoration-purple-300 cursor-pointer'>
                                        <FaPlay className='text-white' />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className='bg-white'>
                                    <DialogHeader>
                                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                                        <DialogDescription>
                                            <div className='w-full h-[300px]'>
                                                <iframe
                                                    src={data.url}
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                            {/* Time */}
                            <div className='px-4 py-1 bg-red-600 absolute bottom-0 left-0 flex items-center space-x-2'>
                                <FaPlay className='text-white' />
                                <p className='text-[15px] text-white'>6:00pm</p>
                            </div>
                        </div>
                        {/* Title */}
                        <div className='h-[90px] ' >
                            <h1 className='text-[18px] text-white mt-[1.5rem] pb-[1.5rem]  font-semibold'>{data.title}</h1>
                        </div>
                        {/* Date */}
                        <p className='text-white text-opacity-70 mt-[0.5rem]'>{data.date}</p>
                    </div >
                ))
            }
        </div >
    )
}

export default CardComponent