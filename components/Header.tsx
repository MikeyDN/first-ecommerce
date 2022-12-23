import Link from 'next/link';
import React, { Component, useState, useEffect } from 'react';
import { Category } from '../lib/types'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { client } from '../lib/client'
// function Header(){
//     return (<>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
//             <div className="container">
//                  <a className="navbar-brand" href="https://www.free-css.com/free-css-templates"><img src="assets/images/header-logo.png" alt="website template image" /></a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"/>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarResponsive">
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item active"><a className="nav-link" href="https://www.free-css.com/free-css-templates">Home <span className="sr-only">(current)</span></a></li>
//                     <li className="nav-item"><a className="nav-link" href="pages/products.php">Products</a></li>
//                     <li className="nav-item"><a className="nav-link" href="pages/about.php">About Us</a></li>
//                     <li className="nav-item"><a className="nav-link" href="pages/contact.php">Contact Us</a></li>
//                 </ul>
//                 </div>
//             </div>
//         </nav>
//         </>
//     )
// }


function Header() {
    const [categories, setCategories] = useState<Category[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await client.fetch(`*[_type == "category"]`)
            setCategories(result)
        }
        fetchData()
    }, [])
    return (
        <>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container>
                    <Navbar.Brand className="navbar-brand" href="/"><img src="/assets/images/header-logo.png" alt="website template image" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbarResponsive' className='navbar-toggler' />
                    <Navbar.Collapse id='navbarResponsive'>
                        <Nav className='ml-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <NavDropdown title='Categories' id='nav-dropdown'>
                                {
                                    categories.map((category: Category, key : number) => (
                                        <NavDropdown.Item href={`/categories/${category.slug.current}`} key={key}>{category.name}</NavDropdown.Item>
                                    ))
                                }
                            </NavDropdown>
                            <Nav.Link href='/'>About</Nav.Link>
                            <Nav.Link href='/'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;