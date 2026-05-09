import {

    PanelBody,
    SelectControl,
    RangeControl

} from '@wordpress/components';

export default function QueryPanel({

    attributes,

    setAttributes

}) {

    return (

        <PanelBody

            title="Consulta WooCommerce"

            initialOpen={ false }
        >

            <SelectControl

                label="Tipo de productos"

                value={
                    attributes.queryType
                }

                options={[

                    {
                        label: 'Recientes',
                        value: 'recent'
                    },

                    {
                        label: 'Destacados',
                        value: 'featured'
                    },

                    {
                        label: 'Ofertas',
                        value: 'sale'
                    },

                    {
                        label: 'Más vendidos',
                        value: 'best-selling'
                    },

                    {
                        label: 'Aleatorios',
                        value: 'random'
                    }
                ]}

                onChange={(value) =>

                    setAttributes({
                        queryType: value
                    })
                }
            />

            <RangeControl

                label="Cantidad"

                value={
                    attributes.productsToShow
                }

                onChange={(value) =>

                    setAttributes({
                        productsToShow:
                            value
                    })
                }

                min={ 1 }

                max={ 24 }
            />

        </PanelBody>
    );
}