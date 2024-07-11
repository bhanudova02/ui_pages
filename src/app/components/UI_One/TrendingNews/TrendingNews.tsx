import React from 'react'
import NewsCard from '../Helper/NewsCard'
import { trendingNews } from '@/constraints/ui_one'


const TrendingNews = () => {
    return <div className='pt-[5rem] pb-[3rem]'>
        {/* Heading */}
        <h1 className='heading-ui-one'>Trending News</h1>
        {/* Card Container */}
        <div className='pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
            {
                trendingNews.map((data:any, i:number) => (
                    <NewsCard key={i} image={data.image}
                        date={data.date} title={data.title} height={data.height}
                    />
                ))
            }
        </div>
    </div>
}

export default TrendingNews