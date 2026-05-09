import {

    PanelBody,
    RangeControl

} from '@wordpress/components';

export default function SpacingPanel({

    title = 'Espaciado',

    attributes,

    setAttributes,

    paddingVerticalKey,

    paddingHorizontalKey,

    gapKey

}) {

    return (

        <PanelBody

            title={title}

            initialOpen={false}
        >

            <RangeControl

                label="Padding vertical"

                value={
                    attributes[
                    paddingVerticalKey
                    ]
                }

                onChange={(value) =>

                    setAttributes({

                        [paddingVerticalKey]:
                            value
                    })
                }

                min={0}

                max={200}
            />

            <RangeControl

                label="Padding horizontal"

                value={
                    attributes[
                    paddingHorizontalKey
                    ]
                }

                onChange={(value) =>

                    setAttributes({

                        [paddingHorizontalKey]:
                            value
                    })
                }

                min={0}

                max={200}
            />

            <RangeControl

                label="Gap"

                value={
                    attributes[
                    gapKey
                    ]
                }

                onChange={(value) =>

                    setAttributes({

                        [gapKey]:
                            value
                    })
                }

                min={0}

                max={100}
            />

        </PanelBody>
    );
}