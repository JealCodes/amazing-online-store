import {

    InspectorControls

} from '@wordpress/block-editor';

import {

    PanelBody

} from '@wordpress/components';

import QueryPanel from '../../components/panels/QueryPanel';

export default function Edit({

    attributes,

    setAttributes

}) {

    return (

        <>

            <InspectorControls>

                <QueryPanel

                    attributes={ attributes }

                    setAttributes={
                        setAttributes
                    }
                />

            </InspectorControls>

            <div
                style={{

                    padding:'40px',

                    border:'2px dashed #ccc',

                    borderRadius:'14px'
                }}
            >

                Product Carousel Preview

            </div>

        </>
    );
}