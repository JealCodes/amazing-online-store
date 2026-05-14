<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('WooCommerce')) {

    return '<p>WooCommerce no está activo.</p>';
}

$query = aos_get_products_query($attributes);

if (!$query->have_posts()) {

    return '<p>No hay productos.</p>';
}

$animation_attrs = aos_get_animation_attrs($attributes);

$shadow = match ($attributes['cardShadow'] ?? 'soft') {

    'medium' =>
    '0 12px 30px rgba(0,0,0,.12)',

    'strong' =>
    '0 20px 50px rgba(0,0,0,.18)',

    'none' =>
    'none',

    default =>
    '0 6px 18px rgba(0,0,0,.08)'
};

ob_start();
?>

<div

    class="aos-product-grid"

    style="
        --aos-grid-gap: 
            <?php echo intval($attributes['gridGap'] ?? 24); ?>px;
            
        --aos-grid-columns: 
            repeat( <?php echo intval($attributes['columns'] ?? 4); ?>, minmax(0,1fr) );

        --aos-card-padding-y:
            <?php echo intval($attributes['cardPaddingVertical'] ?? 18); ?>px;

        --aos-card-padding-x:
            <?php echo intval($attributes['cardPaddingHorizontal'] ?? 18); ?>px;

        --aos-card-radius:
            <?php echo intval($attributes['cardRadius'] ?? 18); ?>px;

        --aos-card-bg:
            <?php echo esc_attr($attributes['cardBackground'] ?? '#ffffff'); ?>;

        --aos-card-border-width:
            <?php echo intval($attributes['cardBorderWidth'] ?? 0); ?>px;

        --aos-card-border-color:
            <?php echo esc_attr($attributes['cardBorderColor'] ?? '#e5e7eb'); ?>;

        --aos-card-shadow:
            <?php echo esc_attr($shadow); ?>;

        --aos-button-radius:
            <?php echo intval($attributes['buttonRadius'] ?? 12); ?>px;

        --aos-button-padding-y:
            <?php echo intval($attributes['buttonPaddingY'] ?? 12); ?>px;

        --aos-button-padding-x:
            <?php echo intval($attributes['buttonPaddingX'] ?? 22); ?>px;

        --aos-button-bg:
            <?php echo esc_attr($attributes['buttonBg'] ?? '#111111'); ?>;

        --aos-button-text:
            <?php echo esc_attr($attributes['buttonTextColor'] ?? '#ffffff'); ?>;
    "

>

    <?php while ($query->have_posts()) :

        $query->the_post();

        global $product;
    ?>

        <div

            class="aos-product-card"

            <?php echo $animation_attrs; ?>

        >

            <div class="aos-product-card-inner">

                <a

                    href="<?php the_permalink(); ?>"

                    class="aos-product-link"

                >

                    <?php echo woocommerce_get_product_thumbnail(); ?>

                    <h3

                        style="
                            font-size: <?php echo intval($attributes['titleFontSize'] ?? 18); ?>px;
                            font-weight: <?php echo esc_attr($attributes['titleFontWeight'] ?? '600'); ?>;
                            color: <?php echo esc_attr($attributes['titleTextColor'] ?? '#111111'); ?>;
                        "

                    >

                        <?php the_title(); ?>

                    </h3>

                    <span>

                        <?php echo $product->get_price_html(); ?>

                    </span>

                </a>

                <div class="aos-product-cart">

                    <?php
                    woocommerce_template_loop_add_to_cart();
                    ?>

                </div>

            </div>

        </div>

    <?php endwhile; ?>

</div>

<?php

wp_reset_postdata();

echo ob_get_clean();