<?php

declare(strict_types=1);

function aos_get_products_query(array $attributes): WP_Query
{

    $products_to_show =
        intval(
            $attributes['productsToShow']
            ?? 4
        );

    $query_type =
        $attributes['queryType']
        ?? 'recent';

    $args = [

        'post_type' => 'product',

        'posts_per_page' =>
            $products_to_show,

        'post_status' => 'publish'
    ];

    /*
    |--------------------------------------------------------------------------
    | Query Types
    |--------------------------------------------------------------------------
    */

    switch ($query_type) {

        /*
        |--------------------------------------------------------------------------
        | Destacados
        |--------------------------------------------------------------------------
        */

        case 'featured':

            $args['tax_query'] = [[

                'taxonomy' =>
                    'product_visibility',

                'field' =>
                    'name',

                'terms' =>
                    'featured'
            ]];

        break;

        /*
        |--------------------------------------------------------------------------
        | Ofertas
        |--------------------------------------------------------------------------
        */

        case 'sale':

            $args['post__in'] =
                wc_get_product_ids_on_sale();

        break;

        /*
        |--------------------------------------------------------------------------
        | Best Sellers
        |--------------------------------------------------------------------------
        */

        case 'best-selling':

            $args['meta_key'] =
                'total_sales';

            $args['orderby'] =
                'meta_value_num';

        break;

        /*
        |--------------------------------------------------------------------------
        | Aleatorios
        |--------------------------------------------------------------------------
        */

        case 'random':

            $args['orderby'] =
                'rand';

        break;
    }

    return new WP_Query($args);
}