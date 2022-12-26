import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { Product, Promoted } from '../lib/types'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/client'
import LoadingIcon from '../components/LoadingIcon'

const inter = Inter({ subsets: ['latin'] })
function Home() {
  const [promoted, setPromoted] = useState<Promoted[]|null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const promotedResult = await client.fetch(`*[_type == "promoted"]`)
      setPromoted(promotedResult)
    }
    fetchData()
  }, [])

  if (promoted == null) {
    return <LoadingIcon />
  }

  if (promoted.length === 0) {
    return 
  }

  return (
    <>
      <Head>
        <title>Buddy's e-Shop</title>
      </Head>
      <Container className='featured'>
        <div className='featured-text'>
          <h4 className='small-title'>{promoted[0].smallTitle}</h4>
          <h1 className='mid-title'>{promoted[0].title}</h1>
        </div>
        <div className='featured-image'>
          <img src={urlFor(promoted[0].image).height(400).url()} />
        </div>
      </Container>
      
    </>
  )
}
export default Home;