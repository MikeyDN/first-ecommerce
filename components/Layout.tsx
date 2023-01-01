import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Router } from 'next/router'
function Layout(props: { children: any; }){
    return (<>
            <Header />
                <div id="main">
                    { props.children }
                </div>
            <Footer />
            </>
    )
}

export default Layout;