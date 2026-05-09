import {

    PanelBody,
    RangeControl,
    SelectControl,
    ColorPalette

} from '@wordpress/components';

import {

    useSettings

} from '@wordpress/block-editor';

export default function TypographyPanel({

    title = 'Tipografía',

    attributes,

    setAttributes,

    fontSizeKey,

    fontWeightKey,

    textColorKey

}) {

    /*
    |--------------------------------------------------------------------------
    | Obtener paleta Kadence / Tema
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

                label="Tamaño de fuente"

                value={
                    attributes[fontSizeKey]
                }

                onChange={(value) =>

                    setAttributes({
                        [fontSizeKey]: value
                    })
                }

                min={ 10 }

                max={ 72 }
            />

            <SelectControl

                label="Peso de fuente"

                value={
                    attributes[fontWeightKey]
                }

                options={[

                    {
                        label: '300 Light',
                        value: '300'
                    },

                    {
                        label: '400 Regular',
                        value: '400'
                    },

                    {
                        label: '500 Medium',
                        value: '500'
                    },

                    {
                        label: '600 SemiBold',
                        value: '600'
                    },

                    {
                        label: '700 Bold',
                        value: '700'
                    },

                    {
                        label: '800 ExtraBold',
                        value: '800'
                    }
                ]}

                onChange={(value) =>

                    setAttributes({
                        [fontWeightKey]: value
                    })
                }
            />

            <div
                style={{
                    marginTop: '20px'
                }}
            >

                <p>

                    Color de texto

                </p>

                <ColorPalette

                    colors={ themeColors }

                    value={
                        attributes[textColorKey]
                    }

                    onChange={(value) =>

                        setAttributes({
                            [textColorKey]: value
                        })
                    }
                />

            </div>

        </PanelBody>
    );
}