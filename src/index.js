import './blocks/product-grid';

import './blocks/product-carousel';

import './styles/global.css';

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