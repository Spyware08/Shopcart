import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

export default function Main_Slider() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
            autoplay={{
                delay: 2500, // 2 seconds delay between slides
                disableOnInteraction: false,
            }}
            effect="fade"
            loop={true} 
            pagination={{
                clickable: true,
            }}
        >
            <SwiperSlide>
            <img src='/Assets/women.jpg' className='' alt='women_slider' />
            </SwiperSlide>
            <SwiperSlide>
            <img src='/Assets/Men.jpg' className='' alt='Men_slider' />
            </SwiperSlide>
            <SwiperSlide>
            <img src='/Assets/kids.jpg' className='' alt='kids_slider' />
            </SwiperSlide>
           
        </Swiper>
    );
}
