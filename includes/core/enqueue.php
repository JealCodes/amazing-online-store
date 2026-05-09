<?php

declare(strict_types=1);

function aos_enqueue_assets(): void
{

    $asset_file =
        include
        AOS_PLUGIN_PATH .
        'build/index.asset.php';

    wp_enqueue_script(

        'aos-global-script',

        AOS_PLUGIN_URL .
            'build/index.js',

        $asset_file['dependencies'],

        $asset_file['version'],

        true
    );

    wp_enqueue_script(

        'aos-swiper',

        AOS_PLUGIN_URL .
            'assets/js/swiper.js',

        [],

        AOS_VERSION,

        true
    );
}

add_action(
    'wp_enqueue_scripts',
    'aos_enqueue_assets'
);
