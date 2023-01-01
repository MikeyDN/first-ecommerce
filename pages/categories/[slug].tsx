import { Component, useEffect, useState } from 'react'
import { Product } from '../../lib/types';
import { client } from '../../lib/client';
import { Router, useRouter } from 'next/router';
import Head from 'next/head';
import ProductView from '../../components/ProductView';
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'

function CategoryView() {
    const [products, setProducts] = useState<Product[]>([])
    const [categoryName, setCategoryName] = useState<string>()
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if(!router.isReady) return;
        const fetchProducts = async () => {
            const result = await client.fetch(`*[_type == "product" && references(*[_type == "category" && slug.current == "${slug}"]._id)]`)
            setProducts(result)
          }

        const fetchCategoryName = async () => {
            const result = await client.fetch(`*[_type == "category" && slug.current == "${slug}"]{name}`)
            setCategoryName(result[0].name)
        }
        fetchProducts()
        fetchCategoryName()
    }, [router.isReady, router.asPath])

    return (<>
      <Head>
        <title>Buddy's e-Shop</title>
      </Head>
      <Layout>
        <div className='content-title'>
          <h1>{categoryName}</h1>
        </div>

        <div className="product-list">
          {products.map((product: Product, key: number) => (
            <ProductView product = { product } key={key}/>
          ))}
        </div>
      </Layout>
      </>
    )
}   

export default CategoryView;