import React, { useEffect } from 'react';
// import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectCreative } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-creative';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import HeroSection from '../components/HeroSection';
import Slideshow from'../components/Slideshow';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PopularCategories from '../components/PopularCategories';

const LandingPage = () => {
  return (
    <>
     <div>
      <Navbar />
      <Slideshow />
      <PopularCategories/>
      <Footer />
     </div>
    </>
  );
};

export default LandingPage;
