import React from 'react'
import NewsCard from '../Helper/NewsCard'
import SmallNewsCard from '../Helper/SmallNewsCard'

const LatestNews = () => {
    return <div className='pt-[5rem] pb-[3rem]'>
        {/* Heading */}
        <h1 className='heading-ui-one'>Latest News</h1>
        <div className='w-[80%] mx-auto pt-[4rem] flex flex-col md:flex-row gap-[2rem]'>
            {/* Big Card */}
            <div className='w-full md:w-[65%] lg:w-[60%]'>
                <NewsCard image="/images/ui_one/n1.jpg" date="March 23, 2024" title="Whats new in team England" height="h-[400px] sm:h-full" />
            </div>
            {/* Small Card */}
            <div className='w-full md:w-[35%] lg:w-[40%] space-y-4'>
                <div>
                    <SmallNewsCard image="/images/ui_one/n2.jpg" date="March 23, 2024" title="Whats new in team England" />
                </div>
                <div className=''>
                    <SmallNewsCard image="/images/ui_one/n3.jpg" date="March 23, 2024" title="Whats new in team England" />
                </div>
                <div>
                    <SmallNewsCard image="/images/ui_one/n4.jpg" date="March 23, 2024" title="Whats new in team England" />
                </div>
            </div>
        </div>
    </div>
}

export default LatestNews