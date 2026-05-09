<?php

$query =
    aos_get_products_query($attributes);

if (!$query->have_posts()) {

    return;
}
?>

<div class="aos-product-carousel aos-swiper swiper"

    data-autoplay="true"

    data-delay="3000"

    data-loop="true">

    <div class="swiper-wrapper">

        <?php while ($query->have_posts()):

            $query->the_post();

            global $product;
        ?>

            <div class="swiper-slide">

                <div class="aos-product-card">

                    <a href="<?php the_permalink(); ?>">

                        <?php
                        echo woocommerce_get_product_thumbnail();
                        ?>

                        <h3>

                            <?php the_title(); ?>

                        </h3>

                        <span class="price">

                            <?php
                            echo $product->get_price_html();
                            ?>

                        </span>

                    </a>

                </div>

            </div>

        <?php endwhile; ?>

    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>

    <div class="swiper-button-next"></div>

</div>

<?php
wp_reset_postdata();
?>