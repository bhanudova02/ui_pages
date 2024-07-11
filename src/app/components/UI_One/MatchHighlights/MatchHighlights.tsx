import React from 'react'
import Highlights from './Highlights'
import { HighlightCard } from '@/constraints/ui_one'

const MatchHighlights = () => {
    return <div className='pt-[5rem] pb-[3rem]'>
        {/* Heading */}
        <h1 className='heading-ui-one'>Match Highlights</h1>
        <div className='mt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]'>
            {/* Card */}

            {/* Highlights Card */}
            {
                HighlightCard.map((card, i: number) => (
                    <div key={i}>
                        <Highlights title={card.title} date={card.date} image={card.image} />
                    </div>
                ))
            }
        </div>
    </div>
}

export default MatchHighlights