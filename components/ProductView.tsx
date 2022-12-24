import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { urlFor } from '../lib/client';
import { Product } from '../lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
type productViewProps = {
    product: Product
}

function ProductView(props: productViewProps){
    const [isLoading, setIsLoading] = useState(true);
    const productUrl = `/products/${props.product.slug.current}`
    const imageUrl = urlFor(props.product.image[0]).width(300).height(300).fit('scale').url()
    
    return (
        <div className="product-box">
                <Link href={productUrl}>
                    <img src={imageUrl} alt={props.product.name} />
                </Link>
                <div className="product-details">
                <Link href={productUrl}>
                        <h3 className="product-title">{props.product.name}</h3>
                    </Link>
                    <p className="product-description">{props.product.description}</p>
                    <Container className="price">
                        <p className="product-price">${props.product.price}</p>
                        <button className="product-button">
                            <FontAwesomeIcon icon={{ prefix: "fas", iconName: "shopping-cart" }} />
                        </button>
                    </Container>
                </div>
            </div>
    );
}
export default ProductView;