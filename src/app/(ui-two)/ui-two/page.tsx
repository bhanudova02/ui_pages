import UI_Two_Footer from '@/app/components/UI_Two/UI_Two_Footer'
import UI_Two_Four from '@/app/components/UI_Two/UI_Two_Four'
import UI_Two_Hero from '@/app/components/UI_Two/UI_Two_Hero'
import UI_Two_Three from '@/app/components/UI_Two/UI_Two_Three'
import UI_Two_Two from '@/app/components/UI_Two/UI_Two_Two'
import UI_TwoOne from '@/app/components/UI_Two/UI_TwoOne'
import React from 'react'

const page = () => {
  return (
    <div className='text-black'>
        <UI_Two_Hero/>
        <UI_TwoOne/>
        <UI_Two_Two/>
        <UI_Two_Three/>
        <UI_Two_Four/>
        <UI_Two_Footer/>
    </div>
  )
}

export default page