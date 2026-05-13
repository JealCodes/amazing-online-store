import {

    useSelect

} from '@wordpress/data';

import {

    InspectorControls

} from '@wordpress/block-editor';

import {

    PanelBody,
    RangeControl

} from '@wordpress/components';

export default function Edit({

    attributes,

    setAttributes

}) {

    const {

        columns,
        productsToShow

    } = attributes;

    const products = useSelect(

        (select) => {

            return select('core').getEntityRecords(

                'postType',

                'product',

                {
                    per_page: productsToShow,
                    _embed: true
                }
            );
        },

        [productsToShow]
    );

    return (

        <>

            <InspectorControls>

                <PanelBody
                    title="Grid Settings"
                >

                    <RangeControl

                        label="Columns"

                        value={columns}

                        min={1}

                        max={6}

                        onChange={(value) =>

                            setAttributes({

                                columns:value
                            })
                        }
                    />

                    <RangeControl

                        label="Products"

                        value={productsToShow}

                        min={1}

                        max={20}

                        onChange={(value) =>

                            setAttributes({

                                productsToShow:value
                            })
                        }
                    />

                </PanelBody>

            </InspectorControls>

            <div

                style={{

                    display:'grid',

                    gridTemplateColumns:
                        `repeat(${columns},1fr)`,

                    gap:'24px'
                }}
            >

                {products?.map((product) => (

                    <div

                        key={product.id}

                        style={{

                            border:'1px solid #ddd',

                            borderRadius:'14px',

                            overflow:'hidden',

                            background:'#fff'
                        }}
                    >

                        {product?.featured_media && (

                            <img

                                src={
                                    product?._embedded
                                    ?.['wp:featuredmedia']
                                    ?.[0]
                                    ?.source_url
                                }

                                alt={product.title.rendered}

                                style={{

                                    width:'100%',

                                    height:'240px',

                                    objectFit:'cover'
                                }}
                            />
                        )}

                        <div
                            style={{

                                padding:'16px'
                            }}
                        >

                            <h3>

                                {
                                    product.title.rendered
                                }

                            </h3>

                        </div>

                    </div>

                ))}

            </div>

        </>
    );
}