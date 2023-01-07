import React, { Component, useEffect, useState } from 'react'
import { Product, Image as ImageType } from '../../lib/types'
import { client, urlFor } from '../../lib/client'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Carousel } from 'react-responsive-carousel'
import { AddToCartIcon } from '../../components/utils'
import LoadingIcon from '../../components/LoadingIcon'
import Image from 'next/image'
import { url } from 'inspector'
import { placements } from '@popperjs/core'

type imageLoaderProps = {
  image: ImageType
  width: number
  quality: number
}

function ProductDisplay() {
  const [product, setProduct] = useState<Product>()
  const [slug, setSlug] = useState<string>('')
  const router = useRouter()
  const imageUrl = (image: ImageType) => {
    return urlFor(image).width(1080).height(1080).url()
  }
  const imagePlaceHolder = (image: ImageType) => {
    return urlFor(image).width(20).height(20).url()
  }

  useEffect(() => {
    if (!router.isReady) return
    var slug = router.query.slug as string

    setSlug(slug)
    const getData = async () => {
      const result = await client.fetch(
        `*[_type == "product" && slug.current == "${slug}"]`,
      )
      if (typeof result[0] === 'undefined') return
      result[0].id = result[0]?.slug.current
      setProduct(result[0])
    }
    getData()
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
                  <Image
                    priority
                    src={imageUrl(image)}
                    placeholder="blur"
                    blurDataURL={imagePlaceHolder(image)}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1080) 300px, 
                                            1080px"
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
