import React, { useState, useEffect, use } from "react";
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
    
    return (
        <div className="product-box">
                <Link href='/'>
                    <img src={urlFor(props.product.image[0]).width(400).height(400).fit('scale').url()} alt={props.product.name} />
                </Link>
                <div className="product-details">
                    <Link href='/'>
                        <h3 className="product-title">{props.product.name}</h3>
                    </Link>
                    <p className="product-description">{props.product.description}</p>
                    <p className="product-price">${props.product.price}</p>
                    <button className="product-button">
                        <FontAwesomeIcon icon={{ prefix: "fas", iconName: "shopping-cart" }} />
                    </button>
                </div>
            </div>
    );
}
export default ProductView;