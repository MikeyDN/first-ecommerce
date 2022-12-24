import Head from 'next/head'
import ProductView from '../components/ProductView'
import { Product } from '../lib/types'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { client } from '../lib/client'
// import styles from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
function Home() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`*[_type == "product"]`)
      setProducts(result)
    }
    fetchData()
  }, [])
  return (
    <>
      <Head>
        <title>Buddy's e-Shop</title>
      </Head>
      <div className='content-title'>
        <h1>Product List</h1>
      </div>
      <div className="product-list">
        {products.map((product: Product) => (
          <ProductView product = { product } />
        ))}
      </div>
    </>
  )
}
export default Home;