import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import TopNavbar from './nav/TopNavbar'
import BotNavbar from './nav/BotNavbar'
import Cart from './Cart'
function Layout(props: { children: any | null }) {
  return (
    <>
      <Header />
      <TopNavbar />
      {props.children}
      <Cart />
      <Footer />
    </>
  )
}

export default Layout
