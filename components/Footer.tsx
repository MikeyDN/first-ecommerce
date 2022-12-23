import React, { Component } from 'react';

function Footer(){
    return (<>
        <div className="footer">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="logo"><img src="/assets/images/header-logo.png" alt="website template image" /></div>
                </div>
                <div className="col-md-12">
                    <div className="footer-menu">
                    <ul>
                        <li><a href="https://www.free-css.com/free-css-templates">Home</a></li>
                        <li><a href="https://www.free-css.com/free-css-templates">Help</a></li>
                        <li><a href="https://www.free-css.com/free-css-templates">Privacy Policy</a></li>
                        <li><a href="https://www.free-css.com/free-css-templates">How It Works ?</a></li>
                        <li><a href="https://www.free-css.com/free-css-templates">Contact Us</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="social-icons">
                    <ul>
                        <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-rss"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer;