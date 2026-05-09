import {

    InspectorControls

} from '@wordpress/block-editor';

import {

    PanelBody,
    RangeControl

} from '@wordpress/components';

import AnimationPanel from '../../components/panels/AnimationPanel';
import TypographyPanel from '../../components/panels/TypographyPanel';
import SpacingPanel from '../../components/panels/SpacingPanel';
import StylePanel from '../../components/panels/StylePanel';
import ButtonPanel from '../../components/panels/ButtonPanel';
import QueryPanel from '../../components/panels/QueryPanel';

export default function Edit({

    attributes,
    setAttributes

}) {

    return (

        <>

            <InspectorControls>

                <PanelBody
                    title="Productos"
                    initialOpen={true}
                >

                    <RangeControl

                        label="Productos"

                        value={attributes.productsToShow}

                        onChange={(value) =>

                            setAttributes({
                                productsToShow: value
                            })
                        }

                        min={1}

                        max={24}
                    />

                    <RangeControl

                        label="Columnas"

                        value={attributes.columns}

                        onChange={(value) =>

                            setAttributes({
                                columns: value
                            })
                        }

                        min={1}

                        max={6}
                    />

                </PanelBody>

                <AnimationPanel

                    attributes={attributes}

                    setAttributes={setAttributes}
                />

                <TypographyPanel

                    title="Título de producto"

                    attributes={attributes}

                    setAttributes={setAttributes}

                    fontSizeKey="titleFontSize"

                    fontWeightKey="titleFontWeight"

                    textColorKey="titleTextColor"
                />

                <SpacingPanel

                    title="Espaciado del grid"

                    attributes={attributes}

                    setAttributes={setAttributes}

                    paddingVerticalKey="cardPaddingVertical"

                    paddingHorizontalKey="cardPaddingHorizontal"

                    gapKey="gridGap"
                />

                <StylePanel

                    title="Estilo de cards"

                    attributes={attributes}

                    setAttributes={setAttributes}

                    radiusKey="cardRadius"

                    backgroundKey="cardBackground"

                    borderWidthKey="cardBorderWidth"

                    borderColorKey="cardBorderColor"

                    shadowKey="cardShadow"
                />

                <ButtonPanel

                    attributes={attributes}

                    setAttributes={setAttributes}
                />

                <QueryPanel

                    attributes={attributes}

                    setAttributes={setAttributes}
                />

            </InspectorControls>

            <div
                style={{

                    padding: '40px',

                    border: '1px solid #ddd',

                    borderRadius: '12px'
                }}
            >

                <h3>

                    AOS Product Grid

                </h3>

                <p>

                    Productos:
                    {attributes.productsToShow}

                </p>

                <p>

                    Columnas:
                    {attributes.columns}

                </p>

            </div>

        </>
    );
}