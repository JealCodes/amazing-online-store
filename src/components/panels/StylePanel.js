import {

    PanelBody,
    RangeControl,
    ColorPalette,
    SelectControl

} from '@wordpress/components';

import {

    useSettings

} from '@wordpress/block-editor';

export default function StylePanel({

    title = 'Estilos',

    attributes,

    setAttributes,

    radiusKey,

    backgroundKey,

    borderWidthKey,

    borderColorKey,

    shadowKey

}) {

    /*
    |--------------------------------------------------------------------------
    | Paleta Kadence / Tema
    |--------------------------------------------------------------------------
    */

    const [

        themeColors

    ] = useSettings(
        'color.palette'
    );

    return (

        <PanelBody

            title={ title }

            initialOpen={ false }
        >

            <RangeControl

                label="Border radius"

                value={
                    attributes[radiusKey]
                }

                onChange={(value) =>

                    setAttributes({
                        [radiusKey]: value
                    })
                }

                min={ 0 }

                max={ 60 }
            />

            <RangeControl

                label="Borde"

                value={
                    attributes[borderWidthKey]
                }

                onChange={(value) =>

                    setAttributes({
                        [borderWidthKey]: value
                    })
                }

                min={ 0 }

                max={ 10 }
            />

            <div
                style={{
                    marginTop: '20px'
                }}
            >

                <p>

                    Color de fondo

                </p>

                <ColorPalette

                    colors={ themeColors }

                    value={
                        attributes[
                            backgroundKey
                        ]
                    }

                    onChange={(value) =>

                        setAttributes({
                            [backgroundKey]:
                                value
                        })
                    }
                />

            </div>

            <div
                style={{
                    marginTop: '20px'
                }}
            >

                <p>

                    Color del borde

                </p>

                <ColorPalette

                    colors={ themeColors }

                    value={
                        attributes[
                            borderColorKey
                        ]
                    }

                    onChange={(value) =>

                        setAttributes({
                            [borderColorKey]:
                                value
                        })
                    }
                />

            </div>

            <SelectControl

                label="Sombra"

                value={
                    attributes[shadowKey]
                }

                options={[

                    {
                        label: 'Ninguna',
                        value: 'none'
                    },

                    {
                        label: 'Suave',
                        value: 'soft'
                    },

                    {
                        label: 'Media',
                        value: 'medium'
                    },

                    {
                        label: 'Fuerte',
                        value: 'strong'
                    }
                ]}

                onChange={(value) =>

                    setAttributes({
                        [shadowKey]: value
                    })
                }
            />

        </PanelBody>
    );
}