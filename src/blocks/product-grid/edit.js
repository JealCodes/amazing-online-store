import {

    useState,
    useEffect

} from '@wordpress/element';

import apiFetch from '@wordpress/api-fetch';

import {

    InspectorControls

} from '@wordpress/block-editor';

import {

    PanelBody,
    RangeControl

} from '@wordpress/components';

import QueryPanel from '../../components/panels/QueryPanel';
import ProductCard from '../../components/ProductCard';

export default function Edit({

    attributes,

    setAttributes

}) {

    const {

        columns,
        productsToShow

    } = attributes;


    /*
    |--------------------------------------------------------------------------
    | PRODUCTS
    |--------------------------------------------------------------------------
    */

    const [products, setProducts]
        = useState([]);

    const [loading, setLoading]
        = useState(true);

    useEffect(() => {

        setLoading(true);

        apiFetch({

            path:
                `/wc/store/products?per_page=${productsToShow}`

        })

            .then((data) => {

                console.log(data);

                setProducts(data);

                setLoading(false);
            })

            .catch((error) => {

                console.error(error);

                setLoading(false);
            });

    }, [

        productsToShow
    ]);

    /*
    |--------------------------------------------------------------------------
    | LOADING
    |--------------------------------------------------------------------------
    */

    if (loading) {

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
                    initialOpen={true}
                >

                    <RangeControl

                        label="Columns"

                        value={columns}

                        min={1}

                        max={6}

                        onChange={(value) =>

                            setAttributes({

                                columns: value
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

                                productsToShow: value
                            })
                        }
                    />

                </PanelBody>

                <QueryPanel

                    attributes={attributes}

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

                    return (

                        <ProductCard

                            key={product.id}

                            product={product}
                        />

                    );
                })}

            </div>

        </>
    );
}