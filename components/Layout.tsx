import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { motion } from 'framer-motion'
import Cart from './Cart'
function Layout(props: { children: any | null }) {
  return (
    <>
      <Header />
      {props.children}
      <Cart />

      <Footer />
    </>
  )
}

export default Layout
