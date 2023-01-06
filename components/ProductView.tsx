import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { Product } from '../lib/types'
import { AddToCartIcon } from './utils'
import { motion } from 'framer-motion'

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
    .url()

  return (
    <div className="product-box">
      <Link href={productUrl}>
        <img src={imageUrl} alt={props.product.name} />
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
