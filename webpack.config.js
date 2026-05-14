const defaultConfig =
    require(
        '@wordpress/scripts/config/webpack.config'
    );

const path = require('path');

module.exports = {

    ...defaultConfig,

    entry: {

        index:
            path.resolve(
                __dirname,
                'src/index.js'
            ),

        aos:
            path.resolve(
                __dirname,
                'src/frontend/aos.js'
            ),

        swiper:
            path.resolve(
                __dirname,
                'src/frontend/swiper.js'
            )
    },

    output: {

        path:
            path.resolve(
                __dirname,
                'build'
            ),

        filename:
            '[name].js'
    }
};