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

import QueryPanel from '../../components/panels/QueryPanel';

export default function Edit({

    attributes,

    setAttributes

}) {

    const {

        columns,
        productsToShow,
        queryType

    } = attributes;

    /*
    |--------------------------------------------------------------------------
    | QUERY ARGS
    |--------------------------------------------------------------------------
    */

    const queryArgs = {

        per_page: productsToShow,

        _embed: true
    };

    /*
    |--------------------------------------------------------------------------
    | QUERY TYPES
    |--------------------------------------------------------------------------
    */

    if (queryType === 'featured') {

        queryArgs.featured = true;
    }

    /*
    |--------------------------------------------------------------------------
    | PRODUCTS
    |--------------------------------------------------------------------------
    */

    const products = useSelect(

        (select) => {

            return select('core').getEntityRecords(

                'postType',

                'product',

                queryArgs
            );
        },

        [

            productsToShow,
            queryType
        ]
    );

    /*
    |--------------------------------------------------------------------------
    | LOADING
    |--------------------------------------------------------------------------
    */

    if (!products) {

        return (

            <p>

                Loading products...

            </p>
        );
    }

    /*
    |--------------------------------------------------------------------------
    | RENDER
    |--------------------------------------------------------------------------
    */

    return (

        <>

            <InspectorControls>

                <PanelBody
                    title="Grid Settings"
                    initialOpen={ true }
                >

                    <RangeControl

                        label="Columns"

                        value={ columns }

                        min={ 1 }

                        max={ 6 }

                        onChange={ (value) =>

                            setAttributes({

                                columns: value
                            })
                        }
                    />

                    <RangeControl

                        label="Products"

                        value={ productsToShow }

                        min={ 1 }

                        max={ 20 }

                        onChange={ (value) =>

                            setAttributes({

                                productsToShow: value
                            })
                        }
                    />

                </PanelBody>

                <QueryPanel

                    attributes={ attributes }

                    setAttributes={
                        setAttributes
                    }
                />

            </InspectorControls>

            <div

                style={{

                    display: 'grid',

                    gridTemplateColumns:
                        `repeat(${columns}, 1fr)`,

                    gap: '24px'
                }}
            >

                {products.map((product) => {

                    const image =
                        product?._embedded
                            ?.['wp:featuredmedia']
                            ?.[0]
                            ?.source_url;

                    return (

                        <div

                            key={ product.id }

                            style={{

                                border: '1px solid #ddd',

                                borderRadius: '14px',

                                overflow: 'hidden',

                                background: '#fff'
                            }}
                        >

                            {image ? (

                                <img

                                    src={ image }

                                    alt={
                                        product.title.rendered
                                    }

                                    style={{

                                        width: '100%',

                                        height: '240px',

                                        objectFit: 'cover'
                                    }}
                                />

                            ) : (

                                <div

                                    style={{

                                        height: '240px',

                                        background: '#f3f3f3'
                                    }}
                                />
                            )}

                            <div

                                style={{

                                    padding: '16px'
                                }}
                            >

                                <h3

                                    style={{

                                        margin: 0,

                                        fontSize: '16px'
                                    }}
                                >

                                    {
                                        product.title.rendered
                                    }

                                </h3>

                            </div>

                        </div>
                    );
                })}

            </div>

        </>
    );
}