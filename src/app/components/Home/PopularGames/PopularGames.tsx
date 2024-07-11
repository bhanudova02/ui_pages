"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { cardGamesData } from '@/constraints/homePage';
import { responsiveMultiCard } from '@/constraints/homePage';
import { cardGamesDataTypes } from '@/constraints/homePage';
import { cardMainHeading } from '@/constraints/homePage';
import GamesCard from './GamesCard';

export default function PopularGames() {
    return <div className="pt-[3rem] pb-[3rem]">
        <h1 className="heading">
            {cardMainHeading.title} <span className="text-red-600">{cardMainHeading.secondTitle}</span>
        </h1>
        <div className='w-[80%] mt-[1rem] mx-auto'>
            <Carousel
                additionalTransfrom={0}
                arrows={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                centerMode={false}
                infinite
                responsive={responsiveMultiCard}
                itemClass='item'
                showDots={false}
            >
                {
                    cardGamesData.map((game) => (
                        <GamesCard key={game.id} id={game.id} title={game.title} images={game.images} review={game.review} price={game.price} />
                    ))
                }
            </Carousel>
        </div>
    </div>
}