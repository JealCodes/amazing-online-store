<?php

declare(strict_types=1);

/**
 * Plugin Name: Amazing Online Store
 * Description: Framework moderno de bloques WooCommerce para Gutenberg.
 * Version: 0.1.0
 * Author: JealDevs
 * License: GPL2
 */

if (!defined('ABSPATH')) {
    exit;
}

/*
|--------------------------------------------------------------------------
| CONSTANTES
|--------------------------------------------------------------------------
*/

define(
    'AOS_PLUGIN_URL',
    plugin_dir_url(__FILE__)
);

define(
    'AOS_PLUGIN_PATH',
    plugin_dir_path(__FILE__)
);

/*
|--------------------------------------------------------------------------
| CORE
|--------------------------------------------------------------------------
*/

require_once
    AOS_PLUGIN_PATH .
    'includes/core/enqueue.php';

require_once
    AOS_PLUGIN_PATH .
    'includes/core/register-blocks.php';

require_once
    AOS_PLUGIN_PATH .
    'includes/core/helpers.php';

require_once
    AOS_PLUGIN_PATH .
    'includes/core/animations.php';

require_once
    AOS_PLUGIN_PATH .
    'includes/core/query.php';

/*
|--------------------------------------------------------------------------
| INTEGRATIONS
|--------------------------------------------------------------------------
*/

require_once
    AOS_PLUGIN_PATH .
    'includes/integrations/woocommerce.php';