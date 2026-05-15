export default function ProductCard({

    product

}) {

    const image =
        product.images?.[0]?.src;

    const price =
        product.prices?.price;

    const regularPrice =
        product.prices?.regular_price;

    const isOnSale =
        product.on_sale;

    return (

        <div className="aos-product-card">

            {

                isOnSale && (

                    <span
                        className="aos-sale-badge"
                    >

                        SALE

                    </span>
                )
            }

            <div className="aos-product-card-inner">

                <div
                    className="aos-product-image-wrapper"
                >

                    {

                        image && (

                            <img

                                src={image}

                                alt={product.name}

                                className="aos-product-image"
                            />
                        )
                    }

                </div>

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

                    <button
                        className="aos-product-button"
                    >

                        Add to Cart

                    </button>

                </div>

            </div>

        </div>
    );
}