<?php

declare(strict_types=1);

function aos_enqueue_assets(): void
{

    /*
    |--------------------------------------------------------------------------
    | AOS
    |--------------------------------------------------------------------------
    */

    $aos_asset =
        include
        AOS_PLUGIN_PATH .
        'build/aos.asset.php';

    wp_enqueue_script(

        'aos-frontend',

        AOS_PLUGIN_URL .
            'build/aos.js',

        $aos_asset['dependencies'],

        $aos_asset['version'],

        true
    );

    wp_enqueue_style(

        'aos-frontend-style',

        AOS_PLUGIN_URL .
            'build/aos.css',

        [],

        $aos_asset['version']
    );

    /*
    |--------------------------------------------------------------------------
    | SWIPER
    |--------------------------------------------------------------------------
    */

    $swiper_asset =
        include
        AOS_PLUGIN_PATH .
        'build/swiper.asset.php';

    wp_enqueue_script(

        'aos-swiper',

        AOS_PLUGIN_URL .
            'build/swiper.js',

        $swiper_asset['dependencies'],

        $swiper_asset['version'],

        true
    );

    wp_enqueue_style(

        'aos-swiper-style',

        AOS_PLUGIN_URL .
            'build/swiper.css',

        [],

        $swiper_asset['version']
    );
}

add_action(
    'wp_enqueue_scripts',
    'aos_enqueue_assets'
);