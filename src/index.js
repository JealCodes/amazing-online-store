import './blocks/product-grid';

import './blocks/product-carousel';

import AOS from 'aos';

import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {

    AOS.init({

        duration: 800,

        once: true,

        easing: 'ease-out',

        offset: 80
    });
});