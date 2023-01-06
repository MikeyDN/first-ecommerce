import Head from 'next/head'
import { Col, Row, Container } from 'react-bootstrap'
import { Product, Promoted, Category } from '../lib/types'
import { Inter } from '@next/font/google'
import { useEffect, useState, useRef } from 'react'
import { client, urlFor } from '../lib/client'
import { CSSTransition } from 'react-transition-group'
import LoadingIcon from '../components/LoadingIcon'
import { Carousel } from 'react-responsive-carousel'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
function Home() {
  const [promoted, setPromoted] = useState<Promoted[] | null>(null)
  const [categories, setCateogories] = useState<Category[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const promotedResult = await client.fetch(`*[_type == "promoted"]`)
      setPromoted(promotedResult)
      const categoriesResult = await client.fetch(`*[_type == "category"]`)
      setCateogories(categoriesResult)
    }
    fetchData()
  }, [])

  if (promoted == null) {
    return
  }

  const handleClick = (slug: string) => {
    const box = document.getElementById(`#${slug}`)
    return () => {
      router.push(`/categories/${slug}`)
    }
  }

  return (
    <>
      <Head>
        <title>Buddy's e-Shop</title>
      </Head>
      <div className="promoted-wrapper">
        <div className="promoted-products">
          <Carousel>
            {promoted.map((promotedProduct) => (
              <div></div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="category-wrapper">
        {categories.map((category, index) => (
          <a
            className="category-box"
            onClick={handleClick(category.slug.current)}
            id={`#${category.slug.current}`}
          >
            {category.name}
          </a>
        ))}
      </div>
    </>
  )
}
export default Home
