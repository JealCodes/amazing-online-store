import {

    PanelBody,
    RangeControl,
    ColorPalette

} from '@wordpress/components';

import {

    useSettings

} from '@wordpress/block-editor';

export default function ButtonPanel({

    title = 'Botón',

    attributes,

    setAttributes

}) {

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
                    attributes.buttonRadius
                }

                onChange={(value) =>

                    setAttributes({
                        buttonRadius: value
                    })
                }

                min={ 0 }

                max={ 50 }
            />

            <RangeControl

                label="Padding vertical"

                value={
                    attributes.buttonPaddingY
                }

                onChange={(value) =>

                    setAttributes({
                        buttonPaddingY: value
                    })
                }

                min={ 4 }

                max={ 40 }
            />

            <RangeControl

                label="Padding horizontal"

                value={
                    attributes.buttonPaddingX
                }

                onChange={(value) =>

                    setAttributes({
                        buttonPaddingX: value
                    })
                }

                min={ 8 }

                max={ 60 }
            />

            <div
                style={{
                    marginTop: '20px'
                }}
            >

                <p>

                    Color botón

                </p>

                <ColorPalette

                    colors={ themeColors }

                    value={
                        attributes.buttonBg
                    }

                    onChange={(value) =>

                        setAttributes({
                            buttonBg: value
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

                    Color texto

                </p>

                <ColorPalette

                    colors={ themeColors }

                    value={
                        attributes.buttonTextColor
                    }

                    onChange={(value) =>

                        setAttributes({
                            buttonTextColor:
                                value
                        })
                    }
                />

            </div>

        </PanelBody>
    );
}