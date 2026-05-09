<?php

declare(strict_types=1);

/**
 * Plugin Name: Amazing Online Store
 * Description: Framework moderno de bloques WooCommerce para Gutenberg.
 * Version: 0.1.3
 * Author: JealDevs
 * License: GPL2
 * GitHub Plugin URI: JealCodes/amazing-online-store
 * Primary Branch: main
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

define(
    'AOS_VERSION',
    '0.1.3'
);

/*
|--------------------------------------------------------------------------
| GitHub Updates
|--------------------------------------------------------------------------
*/

require_once
    AOS_PLUGIN_PATH .
    'includes/libs/plugin-update-checker/plugin-update-checker.php';

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$updateChecker =
    PucFactory::buildUpdateChecker(

        'https://github.com/JealCodes/amazing-online-store/',

        __FILE__,

        'amazing-online-store'
    );

$updateChecker->setBranch('main');

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
