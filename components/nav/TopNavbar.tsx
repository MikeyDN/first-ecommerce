import { useState, useEffect } from 'react'
import CollapseMenu from './CollapseMenu'
import { motion } from 'framer-motion'
import { client } from '../../lib/client'
import Link from 'next/link'

export default function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`*[_type == "category"]`)
      setCategories(result)
    }
    fetchData()
  }, [])
  return (
    <>
      <nav className="top-navbar">
        <a className="navbar-brand" href="/">
          <img
            src="/assets/images/buddys-logo.png"
            className="logo"
            alt="website template image"
          />
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/products/all">
                Explore
              </Link>
            </li>
            <li>
              <CollapseMenu title="Categories" id="categories-collapse">
                {categories.map((category: any, key: number) => (
                  <CollapseMenu.Item
                    href={`/categories/${encodeURIComponent(
                      category.slug.current,
                    )}`}
                    key={key}
                  >
                    <span>{category.name}</span>
                  </CollapseMenu.Item>
                ))}
              </CollapseMenu>
            </li>
            <li>
              <Link className="nav-link" href="/">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
