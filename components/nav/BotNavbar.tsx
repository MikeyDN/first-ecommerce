import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { IndexKind } from 'typescript'

function Item(props: { href: string; icon: IconDefinition }) {
  return (
    <a>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  )
}

function BotNavbar(props: { children: JSX.Element[] }) {
  const [show, setShow] = useState(false)
  const [activeIndex, setActiveIndex] = useState(2)
  const router = useRouter()
  const path = router.pathname
  const getActive = () => {
    const indexList = {
      '/about': 0,
      '/products/all': 1,
      '/': 2,
      '/categories': 3,
      '/contact': 4,
    }
    const route = path as keyof typeof indexList
    if (route in indexList) setActiveIndex(indexList[route])
  }

  useEffect(() => {
    getActive()
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (index: number, href: string) => {
    router.push(href)
    setActiveIndex(index)
  }

  const isActive = (index: number) => {
    return index === activeIndex ? 'bot-nav-link active' : 'bot-nav-link'
  }

  return (
    <AnimatePresence>
      show && (
      <motion.div
        key={`bot-navbar`}
        className={`bot-navbar`}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
      >
        {props.children.map((child: JSX.Element, index: number) => (
          <div
            className={isActive(index)}
            onClick={() => {
              handleClick(index, child.props.href)
            }}
          >
            {child}
          </div>
        ))}
      </motion.div>
      )
    </AnimatePresence>
  )
}

export default Object.assign(BotNavbar, { Item })
