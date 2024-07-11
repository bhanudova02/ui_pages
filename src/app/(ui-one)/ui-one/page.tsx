import Hero from '@/app/components/UI_One/Hero'
import LatestNews from '@/app/components/UI_One/LatestNews/LatestNews'
import MatchHighlights from '@/app/components/UI_One/MatchHighlights/MatchHighlights'
import { OurServices } from '@/app/components/UI_One/OurServices'
import { RightPlan } from '@/app/components/UI_One/RightPlan'
import TrendingNews from '@/app/components/UI_One/TrendingNews/TrendingNews'
import { UI_OneFooter } from '@/app/components/UI_One/UI_OneFooter'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#000000a4]'>
        <Hero/>
        <TrendingNews/>
        <LatestNews/>
        <MatchHighlights/>
        <OurServices/>
        <RightPlan/>
        <UI_OneFooter/>
    </div>
  )
}

export default page