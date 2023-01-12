import { Component, useEffect, useState } from 'react'
import { Product } from '../../lib/types'
import { client } from '../../lib/client'
import { Router, useRouter } from 'next/router'
import Head from 'next/head'
import ProductView from '../../components/ProductView'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'

type PageProps = {
  query: {
    slug: string
  }
}

export async function getServerSideProps(context: PageProps) {
  const slug = context.query.slug
  const products = await client.fetch(
    `*[_type == "product" && references(*[_type == "category" && slug.current == "${slug}"]._id)]`,
  )
  const categoryName = await client.fetch(
    `*[_type == "category" && slug.current == "${slug}"]{name}`,
  )
  return {
    props: {
      products,
      categoryName: categoryName[0]?.name,
    },
  }
}

function CategoryView({
  products,
  categoryName,
}: {
  products: Product[]
  categoryName: string
}) {
  return (
    <>
      <Head>
        <title>Buddy's e-Shop</title>
      </Head>

      <div className="content-title">
        <h1>{categoryName}</h1>
      </div>

      <div className="product-list">
        {products.map((product: Product, key: number) => (
          <ProductView product={product} key={key} />
        ))}
      </div>
    </>
  )
}

export default CategoryView
