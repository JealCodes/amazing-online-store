import {

    PanelBody,
    SelectControl,
    ToggleControl,
    RangeControl

} from '@wordpress/components';

export default function AnimationPanel({

    attributes,
    setAttributes

}) {

    return (

        <PanelBody
            title="Animaciones"
            initialOpen={ false }
        >

            <SelectControl

                label="Tipo de animación"

                value={ attributes.animation }

                options={[

                    {
                        label: 'Fade Up',
                        value: 'fade-up'
                    },

                    {
                        label: 'Fade Down',
                        value: 'fade-down'
                    },

                    {
                        label: 'Fade Left',
                        value: 'fade-left'
                    },

                    {
                        label: 'Fade Right',
                        value: 'fade-right'
                    },

                    {
                        label: 'Zoom In',
                        value: 'zoom-in'
                    },

                    {
                        label: 'Zoom Out',
                        value: 'zoom-out'
                    },

                    {
                        label: 'Flip Left',
                        value: 'flip-left'
                    },

                    {
                        label: 'Flip Right',
                        value: 'flip-right'
                    }
                ]}

                onChange={(value) =>

                    setAttributes({
                        animation: value
                    })
                }
            />

            <RangeControl

                label="Duración"

                value={ attributes.animationDuration }

                onChange={(value) =>

                    setAttributes({
                        animationDuration: value
                    })
                }

                min={ 100 }

                max={ 3000 }

                step={ 100 }
            />

            <RangeControl

                label="Delay"

                value={ attributes.animationDelay }

                onChange={(value) =>

                    setAttributes({
                        animationDelay: value
                    })
                }

                min={ 0 }

                max={ 3000 }

                step={ 100 }
            />

            <RangeControl

                label="Offset"

                value={ attributes.animationOffset }

                onChange={(value) =>

                    setAttributes({
                        animationOffset: value
                    })
                }

                min={ 0 }

                max={ 300 }

                step={ 10 }
            />

            <ToggleControl

                label="Animar solo una vez"

                checked={ attributes.animationOnce }

                onChange={(value) =>

                    setAttributes({
                        animationOnce: value
                    })
                }
            />

        </PanelBody>
    );
}