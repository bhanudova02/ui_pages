import React from 'react'
import { CategoryBox } from '@/constraints/ui_four'
const CategoryList = () => {
    return <div className='mt-5'>
        <h2 className='text-green-600 text-2xl font-bold'>Shop By Category</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'>
            {CategoryBox.map((category: any, i: number) => (
                <div key={i} className='flex flex-col items-center bg-green-50 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-green-200'>
                    <img src={category.imgSrc}
                        className='w-10 h-10 group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className='text-green-800'>{category.title}</h2>
                </div>
            ))}
        </div>
    </div>
}

export default CategoryList