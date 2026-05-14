import './style.css';

export default function ProductCard({

    product

}) {

    const image =
        product.images?.[0]?.src;

    const price =
        product.prices?.price;

    const regularPrice =
        product.prices?.regular_price;

    return (

        <div className="aos-product-card">

            {
                product.on_sale && (

                    <span
                        className="aos-sale-badge"
                    >
                        SALE
                    </span>
                )
            }

            {

                image && (

                    <img

                        src={image}

                        alt={product.name}

                        className="aos-product-image"
                    />
                )
            }

            <div className="aos-product-content">

                <h3
                    className="aos-product-title"
                >

                    {product.name}

                </h3>

                <div
                    className="aos-product-prices"
                >

                    {

                        regularPrice !== price && (

                            <span
                                className="aos-product-regular-price"
                            >

                                ${(
                                    regularPrice / 100
                                ).toLocaleString()}

                            </span>
                        )
                    }

                    <span
                        className="aos-product-price"
                    >

                        ${(
                            price / 100
                        ).toLocaleString()}

                    </span>

                </div>

            </div>

        </div>
    );
}