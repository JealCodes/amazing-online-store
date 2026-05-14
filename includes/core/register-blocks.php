<?php

declare(strict_types=1);

function aos_register_blocks(): void
{

    /*
    |--------------------------------------------------------------------------
    | Product Grid
    |--------------------------------------------------------------------------
    */

    register_block_type(

        AOS_PLUGIN_PATH .
        'build/blocks/product-grid',

        [

            'render_callback' =>
                function (
                    $attributes,
                    $content,
                    $block
                ) {

                    ob_start();

                    include
                        AOS_PLUGIN_PATH .
                        'build/blocks/product-grid/render.php';

                    return ob_get_clean();
                }
        ]
    );

    /*
    |--------------------------------------------------------------------------
    | Product Carousel
    |--------------------------------------------------------------------------
    */

    register_block_type(

        AOS_PLUGIN_PATH .
        'build/blocks/product-carousel'
    );
}

add_action(
    'init',
    'aos_register_blocks'
);