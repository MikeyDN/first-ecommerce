import Link from 'next/link'
import React, { Component, useState, useEffect } from 'react'
import { Category } from '../lib/types'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { client } from '../lib/client'

function Header() {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`*[_type == "category"]`)
      setCategories(result)
    }
    fetchData()
  }, [])
  // return (
  //   <header>
  //     <Navbar bg='dark' variant='dark' expand='lg'>
  //       <Container>
  //         <Link href='/'><Navbar.Brand><img src="/assets/images/buddys-logo.png" className="logo" alt="website template image" /></Navbar.Brand></Link>
  //         <Navbar.Toggle className='navbar-toggler' />
  //         <Navbar.Collapse id='navbarResponsive'>
  //           <Nav className='ml-auto'>
  //             <Link className='nav-link' href='/'>Home</Link>
  //             <Link className='nav-link' href='/products/all'>Products</Link>
  //             <NavDropdown title='Categories' id='nav-dropdown'>
  //               {
  //                 categories.map((category: Category, key: number) => (
  //                   <Link className='dropdown-item' href={`/categories/${encodeURIComponent(category.slug.current)}`} key={key}>{category.name}</Link>
  //                 ))
  //               }
  //             </NavDropdown>
  //             <Link className='nav-link' href='/'>About</Link>
  //             <Link className='nav-link' href='/'>Contact Us</Link>
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   </header>
  // )
}
export default Header
