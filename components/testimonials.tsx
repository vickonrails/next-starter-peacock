'use client'

import { ChevronLeft, ChevronRight } from 'react-feather';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import { Container } from './container';

interface Testimonial {
    name: string;
    title: string;
    text: string;
}

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {

    return (
        <Container>
            <h3 className="text-4xl/normal font-bold text-accent-3 mb-10 max-w-md font-display">What People Have To Say About Me...</h3>
            <Swiper
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                grabCursor
                // loop
                className="flex gap-4 overflow-x-auto w-auto">
                {testimonials.map((testimonial, idx) => (
                    <SwiperSlide key={idx} className="bg-accent-8 min-w-[400px] py-4 px-5 rounded-md select-none">
                        <header className="mb-6">
                            <h2 className="font-bold text-accent-2">{testimonial.name}</h2>
                            <p className="text-sm text-accent-4">{testimonial.title.substring(0, 50)}</p>
                        </header>

                        <p className="text-accent-4">{testimonial.text}</p>
                    </SwiperSlide>
                ))}

                <Navigation />
            </Swiper>
        </Container>
    )
}

function Navigation() {
    const swiper = useSwiper()

    return (
        <div className="navigation flex gap-2 justify-end mt-4">
            <button className="border rounded-sm border-accent-6 p-2 text-accent-5 hover:text-accent-1 hover:border-accent-1 transition-transform active:scale-95" onClick={ev => swiper.slidePrev()}>
                <ChevronLeft />
            </button>
            <button className="border rounded-sm border-accent-6 p-2 text-accent-5 hover:text-accent-1 hover:border-accent-1 transition-transform active:scale-95" onClick={ev => swiper.slideNext()}>
                <ChevronRight />
            </button>
        </div>
    )
}
