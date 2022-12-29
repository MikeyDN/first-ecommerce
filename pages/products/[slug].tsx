import { Component, useEffect, useState } from 'react'
import { Product } from '../../lib/types';
import { client, urlFor } from '../../lib/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Carousel from '../../components/Carousel';
import { CartIcon } from '../../components/utils';
import { Row, Col } from 'react-bootstrap';

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

        <Row className="product-display">
            <Col md={3} className="product-image">
                {/* <img src={urlFor(product.image[0]).width(300).height(300).url()} alt="" /> */}
                <Carousel images={product.image} width={300} height={300} alt={product.name}/>
            </Col>
            <Col md={6} className="product-info">
                    <div className="product-description">{product.description}</div>
                    <div className="product-price">${product.price}</div>
                    <CartIcon />
            </Col>
        </Row>
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