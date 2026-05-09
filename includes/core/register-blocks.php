<?php

declare(strict_types=1);

function aos_register_blocks(): void
{

    register_block_type(
        AOS_PLUGIN_PATH .
        'src/blocks/product-grid'
    );
}

add_action(
    'init',
    'aos_register_blocks'
);