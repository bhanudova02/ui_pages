import UI_Three_Five from '@/app/components/UI_Three/UI_Three_Five'
import UI_Three_Footer from '@/app/components/UI_Three/UI_Three_Footer'
import UI_Three_Four from '@/app/components/UI_Three/UI_Three_Four'
import UI_Three_Hero from '@/app/components/UI_Three/UI_Three_Hero'
import UI_Three_One from '@/app/components/UI_Three/UI_Three_One'
import UI_Three_Three from '@/app/components/UI_Three/UI_Three_Three'
import UI_Three_Two from '@/app/components/UI_Three/UI_Three_Two'
import React from 'react'

const page = () => {
  return (
    <div className='text-black'>
        <UI_Three_Hero/>
        <UI_Three_One/>
        <UI_Three_Two/>
        <UI_Three_Three/>
        <UI_Three_Four/>
        <UI_Three_Five/>
        <UI_Three_Footer/>
      
    </div>
  )
}

export default page