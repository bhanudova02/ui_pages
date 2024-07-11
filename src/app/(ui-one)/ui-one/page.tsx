import Hero from '@/app/components/UI_One/Hero'
import LatestNews from '@/app/components/UI_One/LatestNews/LatestNews'
import MatchHighlights from '@/app/components/UI_One/MatchHighlights/MatchHighlights'
import TrendingNews from '@/app/components/UI_One/TrendingNews/TrendingNews'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#000000a4]'>
        <Hero/>
        <TrendingNews/>
        <LatestNews/>
        <MatchHighlights/>
    </div>
  )
}

export default page