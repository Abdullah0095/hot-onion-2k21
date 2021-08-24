import React from 'react';
import footerLogo from '../../photos/logo2.png'

const Footer = () => {
    return (
        <div  className="foot-design">
            <div style={{float: 'left'}} className="col-md-6">
                <img src={footerLogo} alt="" />
            </div>
            <div style={{float: 'left'}} className="col-md-6 d-flex">
                <div style={{marginLeft: '50px'}}>
                    <p>About Online Food</p>
                    <p>Read Our blog</p>
                    <p>Sign up to deliver</p>
                    <p>Add your restaurant</p>
                </div>
                <div style={{marginLeft: '50px'}}>
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>view all cities</p>
                    <p>Restaurant near me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;