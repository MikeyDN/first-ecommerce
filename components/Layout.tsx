import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { motion } from 'framer-motion';
function Layout(props: { children: any | null; }){
    return (<>
            <Header />
                <motion.div id="main"
                    initial={{ x:300, opacity: 0}}
                    animate={{ x:0, opacity: 1}}
                    exit={{ x:300, opacity: 0}}>
                    
                    { props.children }
                </motion.div>
            <Footer />
            </>
    )
}

export default Layout;