'use client'
import { useEffect } from "react";
import Delivery from "../components/Home/Delivery/Delivery";
import HomeCarousel from "../components/Home/HomeCarousel";
import PopularGames from "../components/Home/PopularGames/PopularGames";
import Reservation from "../components/Home/Reservation/Reservation";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  
  useEffect(() => {
    const initAos = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-center'
      })
    };
    initAos();
  }, [])
  
  return (
    <div>
      <HomeCarousel />
      <PopularGames />
      <Delivery />
      <Reservation />
    </div>
  );
}
