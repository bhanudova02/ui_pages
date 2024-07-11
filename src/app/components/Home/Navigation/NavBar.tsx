"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { MdComputer, MdNightlight } from 'react-icons/md';
import { headerInfo } from '@/constraints/homePage';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
interface Props {
    openNav: () => void;
}

const NavBar = ({ openNav }: Props) => {
    const pathname = usePathname();
    const router = useRouter();
    return <div>
        <div className='h-[10vh] lg:h-[12vh] shadow-md'>
            <div className='flex items-center justify-between h-[100%] w-[90%] mx-auto'>
                {/* Logo */}
                <div onClick={() => { router.push('/') }} className="cursor-pointer flex items-center gap-1">
                    <MdComputer className="text-3xl text-indigo-800" />
                    <span className="inline-flex items-center font-bold text-2xl">{headerInfo.title}</span>
                </div>
                {/* Nav Links */}
                <ul className='hidden md:flex items-center space-x-8 lg:space-x-16 font-medium'>
                    {
                        headerInfo.listInfo.list.map((list, i) => (
                            <li key={i} className={`${pathname === headerInfo.listInfo.url[i] ? 'border-b-2 border-green-800' : 'text-grey-50'} hover:border-b-2 border-green-800 cursor-pointer `}><Link href={headerInfo.listInfo.url[i]}>{list}</Link></li>
                        ))
                    }
                </ul>
                {/* Dark Mode */}
                <div className=''>
                    <div className='flex items-center space-x-3'>
                        <MdNightlight className="text-2xl cursor-pointer" />
                        <BiMenu onClick={openNav} className='md:hidden  w-[2rem] h-[2rem] text-black' />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default NavBar;