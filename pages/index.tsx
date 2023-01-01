import Head from 'next/head'
import { Col, Row, Container } from 'react-bootstrap'
import { Product, Promoted, Category } from '../lib/types'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/client'
import LoadingIcon from '../components/LoadingIcon'
import { Carousel } from 'react-responsive-carousel'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
function Home() {
  const [promoted, setPromoted] = useState<Promoted[]>([])
  const [categories, setCateogories] = useState<Category[]>([])


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
    return <LoadingIcon />
  }

  if (promoted.length === 0) {
    return <> No Promoted products </>
  }

  return (
    <>
      <Head>
        <title>Buddy's e-Shop</title>
      </Head>
          <div className='promoted-wrapper'>
            <div className='promoted-products'>
              <Carousel>
                {
                  promoted.map((promotedProduct) => (
                    <div>
                      
                    </div>
                  ))
                }
              </Carousel>
            </div>
          </div>
          <div className='categories-wrapper'>
            {
              categories.map((category) => (
                <Link className='category-box' href={`/categories/${category.slug.current}`}>
                  {category.name}
                </Link>
              ))
            }
          </div>
    </>
  )
}
export default Home;