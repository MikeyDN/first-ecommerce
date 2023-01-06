import React, { Component, useEffect, useState } from 'react'
import { Product, Image as ImageType } from '../../lib/types'
import { client, urlFor } from '../../lib/client'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Carousel } from 'react-responsive-carousel'
import { AddToCartIcon } from '../../components/utils'
import LoadingIcon from '../../components/LoadingIcon'

function ProductDisplay() {
  const [product, setProduct] = useState<Product>()
  const [slug, setSlug] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    var slug = router.query.slug as string
    setSlug(slug)
    // const fetchData = async () => {
    //     const result = await client.fetch(`*[_type == "product" && slug.current == "${slug}"]`)
    //     setProduct(result[0])
    // }
    // fetchData()
    client
      .fetch(`*[_type == "product" && slug.current == "${slug}"]`)
      .then((result) => {
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

        <div className="content-title">
          <h1>{product.name}</h1>
        </div>
        <div className="product-display">
          <div className="carousel-container">
            <Carousel>
              {product.image.map((image, index) => (
                <div className="image-container">
                  <img
                    sizes="(max-width: 1080) 300px, 
                                            1080px"
                    srcSet={`${urlFor(image).width(300).height(300).url()} 300w,
                              ${urlFor(image)
                                .width(1080)
                                .height(1080)
                                .url()} 1080w`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="product-info">
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            <div className="product-payment">
              <div className="product-price">${product.price}</div>
              <AddToCartIcon product={product} />
            </div>
          </div>
        </div>
      </>
    )
  } else return <LoadingIcon />
}
type productDisplayProps = {
  slug: string
}

export default ProductDisplay
