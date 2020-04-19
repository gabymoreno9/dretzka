import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import darklogo from "assets/images/dark-mode-logo.png"
import insta from "assets/images/insta.png"
import facebook from "assets/images/facebook.png"
import linkedin from "assets/images/linkedin.png"
import pinterest from "assets/images/pinterest.png"


@withRouter
class Footer extends React.Component {

    render = () =>
        <div className="footer">
            <Link to="/">
                <div className="dark-logo">
                    <img src={darklogo} />
                </div>
            </Link>

            <div className="footer-info">
                <div className="footer-nav">
                    <Link to="/">Services <br /></Link>
                    <Link to="/about">About Us <br /></Link>
                    <Link to="/contact">Contact Page <br /></Link>
                    <Link to="/line-card">Line Card <br /></Link>
                </div>

                <div className="footer-contact">
                325 W F St, <br/>
                Dixon, CA 95620<br />
                (800) 258-0227<br />
                Fax: (800) 944 - 0174<br />
                </div>
            </div>

            <div className="footer-line"></div>

            <div className="socials">
            <img src={insta} />
            <img src={facebook} />
            <img src={linkedin} />
            <img src={pinterest} />


            </div>





        </div>

}

export default Footer
