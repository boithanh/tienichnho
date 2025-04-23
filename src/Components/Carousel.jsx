import React from 'react'
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCards, EffectCreative, EffectCube, EffectFade, EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { path } from '../common/path';
import { Link, useOutletContext } from 'react-router-dom';
import { effectInit } from 'swiper/effect-utils';

const Carousel = () => {
    const { isMobile } = useOutletContext();

    const slides = [
        { id: 1, title: "Kiểm tra huyết áp", image: "./../../blood-pressure-funny.png", link: path.bloodPressure },
        { id: 1, title: "Random vé số kiến thiết", image: "./../../lottery_1.png", link: path.randomDefaultLottery },
        { id: 2, title: "Random Mega 6/45", image: "./../../lottery_2.png", link: path.randomMega },
        { id: 3, title: "Random Power 6/55", image: "./../../lottery_3.png", link: path.randomPower },
    ];

    return (
        <>
            <div className='text-center'><h1 className='mb-3'>Welcome to Tien Ich Nho</h1></div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCreative, EffectCards, EffectCube, EffectFade, EffectFlip]}
                spaceBetween={0} // Không có khoảng cách giữa các slide
                slidesPerView={1} // Mỗi lần chỉ hiển thị 1 slide
                navigation
                pagination={{ clickable: true }} // Hiển thị chấm điều hướng
                autoplay={{ delay: 5000 }} // Slide tự động chuyển sau 3s
                loop={true} // Lặp vô hạn
                effect={isMobile ? "cube" : "slide"}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} style={{ width: "100%", height: "100%", textAlign: "center" }}>
                        <Link to={slide.link}>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                style={{ height: "500px", width: "1140px" }}
                                className={`img-fluid ${isMobile ? 'object-fit-scale' : 'object-fit-cover'}`}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}


export default Carousel