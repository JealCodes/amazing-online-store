<?php

declare(strict_types=1);

function aos_get_animation_attrs(array $attributes): string
{

    $animation =
        $attributes['animation']
        ?? 'fade-up';

    $duration =
        $attributes['animationDuration']
        ?? 800;

    $delay =
        $attributes['animationDelay']
        ?? 0;

    $offset =
        $attributes['animationOffset']
        ?? 80;

    $once =
        $attributes['animationOnce']
        ?? true;

    return sprintf(

        'data-aos="%s"
        data-aos-duration="%d"
        data-aos-delay="%d"
        data-aos-offset="%d"
        data-aos-once="%s"',

        esc_attr($animation),

        intval($duration),

        intval($delay),

        intval($offset),

        $once ? 'true' : 'false'
    );
}