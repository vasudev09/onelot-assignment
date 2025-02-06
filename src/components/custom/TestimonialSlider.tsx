"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialData } from "@/mockdata";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function TestimonialSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        speed={600}
        effect="slide"
        autoplay={{ delay: 2000 }}
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-gray-500 text-center lg:text-xl mt-12">{testimonial.message}</p>
              <div className="flex flex-row gap-4 mt-12">
                <Image
                  alt={testimonial.name}
                  src={testimonial.image}
                  width={100}
                  height={100}
                  className="w-10 h-10 rounded-full"
                />
                <div className=" flex flex-col gap-1 items-center justify-center">
                  <p className="text-black font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 rounded-full"
          aria-label="Previous Slide"
        >
          <ArrowLeft size={24} stroke="currentColor" className="text-gray-500 hover:text-black" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 rounded-full"
          aria-label="Next Slide"
        >
          <ArrowRight size={24} stroke="currentColor" className="text-gray-500 hover:text-black" />
        </button>
      </div>
    </div>
  );
}
