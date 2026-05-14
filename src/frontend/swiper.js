import Swiper from 'swiper';

import {

    Navigation,
    Pagination,
    Autoplay

} from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

document.addEventListener(

    'DOMContentLoaded',

    () => {

        const carousels = document.querySelectorAll(
            '.aos-swiper'
        );

        carousels.forEach((carousel) => {

            const autoplay =
                carousel.dataset.autoplay === 'true';

            const delay =
                parseInt(
                    carousel.dataset.delay
                ) || 3000;

            const loop =
                carousel.dataset.loop === 'true';

            new Swiper(carousel, {

                modules: [

                    Navigation,
                    Pagination,
                    Autoplay
                ],

                slidesPerView: 1,

                spaceBetween: 24,

                loop,

                autoplay: autoplay
                    ? {
                        delay
                    }
                    : false,

                pagination: {

                    el:
                        carousel.querySelector(
                            '.swiper-pagination'
                        ),

                    clickable: true
                },

                navigation: {

                    nextEl:
                        carousel.querySelector(
                            '.swiper-button-next'
                        ),

                    prevEl:
                        carousel.querySelector(
                            '.swiper-button-prev'
                        )
                },

                breakpoints: {

                    640: {

                        slidesPerView: 2
                    },

                    1024: {

                        slidesPerView: 4
                    }
                }
            });
        });
    }
);