import CardComponent from '@/app/components/UI_Four/CardComponent'
import CategoryList from '@/app/components/UI_Four/CategoryList'
import React from 'react'

const page = () => {
  return (
    <div className='text-black p-4'>
        <CategoryList/>
        <CardComponent/>
    </div>
  )
}

export default page