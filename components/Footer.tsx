import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(){
    return (<>
        <div className="footer">
            <Container>
            
                        <div className="logo"><img className="logo" src="/assets/images/buddys-logo.png" alt="website template image" /></div>
                    
                        <div className="footer-menu">
                        <ul>
                            <li><a href="https://www.free-css.com/free-css-templates">Home</a></li>
                            <li><a href="https://www.free-css.com/free-css-templates">Help</a></li>
                            <li><a href="https://www.free-css.com/free-css-templates">Privacy Policy</a></li>
                            <li><a href="https://www.free-css.com/free-css-templates">How It Works ?</a></li>
                            <li><a href="https://www.free-css.com/free-css-templates">Contact Us</a></li>
                        </ul>
                        </div>
                    
                        <div className="social-icons">
                            <ul>
                                <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-rss"></i></a></li>
                            </ul>
                        </div>
                    
                
            </Container>
        </div>
    </>
    )
}

export default Footer;