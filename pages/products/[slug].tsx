import { Component, useEffect, useState } from 'react'
import { Product } from '../../lib/types';
import { client, urlFor } from '../../lib/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Carousel } from 'react-bootstrap';

function ProductDisplay() {
    const [product, setProduct] = useState<Product>()
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if(!router.isReady) return;
        const fetchProducts = async () => {
            const result = await client.fetch(`*[_type == "product" &&  slug.current == "${slug}"]`)
            setProduct(result[0])
          }
        fetchProducts()
        
        
    }, [router.isReady])


    if (product){
        return (
            <>
        <Head>
            <title>Buddy's e-Shop</title>
        </Head>
        
        <div className='content-title'>
            <h1>{product.name}</h1>
        </div>

        <div className="product-display">
            <img src={urlFor(product.image[0]).width(300).height(300).url()} alt="" />
            <div className="product-details">
            </div>
        </div>
        </>
        )
    } else {
        return (
            <>
            <Head>
                <title>Buddy's e-Shop</title>
            </Head>
            
            <div className='content-title'>
                <h1></h1>
            </div>
    
            <div className="product-display">
                
            </div>
            </>
        )
    }
}   

export default ProductDisplay;