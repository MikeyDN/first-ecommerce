import React, { useState } from 'react'
import Footer from './Footer'
import TopNavbar from './nav/TopNavbar'
import BotNavbar from './nav/BotNavbar'
import Cart from './Cart'
function Layout(props: { children: any | null }) {
  return (
    <>
      <TopNavbar />
      {props.children}
      <Cart />
      <Footer />
    </>
  )
}

export default Layout
