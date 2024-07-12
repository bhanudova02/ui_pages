import CategoryList from '@/app/components/UI_Four/CategoryList'
import UI_Four_Footer from '@/app/components/UI_Four/UI_Four_Footer'
import UI_Four_Hero from '@/app/components/UI_Four/UI_Four_Hero'
import React from 'react'

const page = () => {
  return (
    <div>
      <UI_Four_Hero />
      <CategoryList />
      <UI_Four_Footer />
    </div>
  )
}

export default page