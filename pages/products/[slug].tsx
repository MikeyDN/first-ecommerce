import React, { Component, useEffect, useState } from 'react';
import { Product, Image as ImageType } from '../../lib/types';
import { client, urlFor } from '../../lib/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Carousel } from 'react-responsive-carousel';
import { CartIcon } from '../../components/utils';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import LoadingIcon from '../../components/LoadingIcon';

function ProductDisplay() {
    const [product, setProduct] = useState<Product>()
    const [slug, setSlug] = useState<string>('')
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;
        var slug = router.query.slug as string
        setSlug(slug)
        // const fetchData = async () => {
        //     const result = await client.fetch(`*[_type == "product" && slug.current == "${slug}"]`)
        //     setProduct(result[0])
        // }
        // fetchData()
        client.fetch(`*[_type == "product" && slug.current == "${slug}"]`).then((result) => {
            setProduct(result[0])
            console.log(slug)
        })
    }, [router.isReady, router.asPath])

    
    if (product) {
        return (
            <>
        <Head>
            <title>Buddy's e-Shop</title>
        </Head>
        
        <div className='content-title'>
            <h1>{product.name}</h1>
        </div>

        <Row className="product-display">
            <div className = "carousel-container">
                <Carousel>
                    {
                        product.image.map((image, index) => (
                            <div>
                                <Image 
                                src={urlFor(image).width(300).height(300).url()}
                                height={300}
                                width={300}
                                alt=''/>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <Col md={6} className="product-info">
                    <div className="product-description">{product.description}</div>
                    <div className="product-payment">
                        <div className="product-price">${product.price}</div>
                        <CartIcon />
                    </div>
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
                <LoadingIcon />
            </div>
            </>
        )
    }
}   

type productDisplayProps = {
    slug: string
}

export default ProductDisplay