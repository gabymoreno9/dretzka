import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import darkLogo from "assets/images/darkLogo.png"
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
                    <img src={darkLogo} />
                </div>
            </Link>

            <div className="footer-info">
                <div className="footer-nav">
                Services <br />
                About Us <br />
                Contact Page <br />
                Line Card <br />
                </div>

                <div className="footer-contact">
                325 W F St, 
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
