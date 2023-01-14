import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { Product } from '../lib/types'
import { AddToCartIcon } from './utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

type productViewProps = {
  product: Product
  key: number
}

function ProductView(props: productViewProps) {
  const productUrl = `/products/${props.product.slug.current}`
  const imageUrl = urlFor(props.product.image[0])
    .width(300)
    .height(300)
    .fit('scale')

  return (
    <div className="product-box">
      <Link href={productUrl}>
        <div className="product-box-img">
          <Image
            priority
            src={imageUrl.url()}
            placeholder="blur"
            blurDataURL={imageUrl.quality(20).url()}
            alt={props.product.name}
            fill
            sizes="(max-width: 1080) 196px, 
                                            250px"
          />
        </div>
      </Link>
      <div className="product-details">
        <Link href={productUrl}>
          <h3 className="product-title">{props.product.name}</h3>
        </Link>

        <Container className="price">
          <div className="product-price">${props.product.price}</div>
          <AddToCartIcon product={props.product} />
        </Container>
      </div>
    </div>
  )
}
export default ProductView
