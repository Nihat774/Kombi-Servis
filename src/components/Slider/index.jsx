"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full h-full md:min-h-[100vh] flex justify-center items-center">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        mousewheel={{ enabled: true }}
        autoplay={{ delay: 1500, disableOnInteraction: false }} 
        modules={[Navigation, Pagination, Autoplay, Keyboard, Mousewheel]}
        className="w-full h-full"
      >
        <SwiperSlide className="flex justify-center items-center bg-white text-lg font-semibold">
          <img
            src="/slider/slider1.PNG"
            className="w-full object-cover"
            alt="slider1"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-white text-lg font-semibold">
          <img
            src="/slider/slider2.PNG"
            className="w-full object-cover"
            alt="slider2"
            loading="lazy"
          />
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center bg-white text-lg font-semibold">
          <img
            src="/slider/slider3.PNG"
            className="w-full object-cover"
            alt="slider2"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
