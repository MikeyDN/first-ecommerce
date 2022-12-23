import React, { Component } from 'react';

function Header(){
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container"><a className="navbar-brand" href="https://www.free-css.com/free-css-templates"><img src="assets/images/header-logo.png" alt="website template image" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><a className="nav-link" href="https://www.free-css.com/free-css-templates">Home <span className="sr-only">(current)</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="pages/products.php">Products</a></li>
                    <li className="nav-item"><a className="nav-link" href="pages/about.php">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="pages/contact.php">Contact Us</a></li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header;