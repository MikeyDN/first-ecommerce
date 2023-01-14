import React, { Component, useEffect, useState } from 'react'
import { Product, SanityImage } from '../../lib/types'
import { client, urlFor } from '../../lib/client'
import Head from 'next/head'
import { Carousel } from 'react-responsive-carousel'
import { AddToCartIcon } from '../../components/utils'
import LoadingIcon from '../../components/LoadingIcon'
import Image from 'next/image'
import { getProduct } from '../../lib/cache'

type PageProps = {
  query: {
    slug: string
  }
}

export const getServerSideProps = async (context: PageProps) => {
  const slug = context.query.slug
  const product: Product = await getProduct(slug)
  return {
    props: {
      product,
    },
  }
}

export default function ProductDisplay({ product }: { product: Product }) {
  const imageUrl = (image: SanityImage) => {
    return urlFor(image).width(1080).height(1080).url()
  }
  const imagePlaceHolder = (image: SanityImage) => {
    return urlFor(image).width(20).height(20).url()
  }
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
