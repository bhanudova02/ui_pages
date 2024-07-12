import Link from 'next/link'
import React from 'react'
import { ImCross } from 'react-icons/im'

interface Props {
  showNav:boolean;
  closeNav:()=>void;
}

const MobileNavBar:any = ({closeNav,showNav}:Props) => {
  const navStyle = showNav?'translate-x-0':'translate-x-[-100%]'
  return <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
    <ImCross onClick={closeNav} className='absolute top-[2rem] right-[2rem] w-[1.5rem] h-[1.5rem] text-white'/>
      {/* Nav Link */}
      <div className={`bg-neutral-400 ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}>
        {/* Nav Links */}
        <ul className='space-y-10'>
            <li className='text-[35px] font-semibold text-white hover:text-red-400'>
              <Link href="/">Home</Link>
            </li>
            <li className='text-[35px] font-semibold text-white hover:text-red-400'>
              <Link href="/ui-one">UI One</Link>
            </li>
            <li className='text-[35px] font-semibold text-white hover:text-red-400'>
              <Link href="/ui-two">UI Two</Link>
            </li>
            <li className='text-[35px] font-semibold text-white hover:text-red-400'>
              <Link href="/ui-three">UI Three</Link>
            </li>
            <li className='text-[35px] font-semibold text-white hover:text-red-400'>
              <Link href="/ui-four">UI Four</Link>
            </li>
        </ul>
      </div>
  </div>
  
}

export default MobileNavBar