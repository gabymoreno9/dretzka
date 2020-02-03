import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import regularLogo from 'assets/images/logo.png'
import darkModeLogo from 'assets/images/dark-mode-logo.png'


@withRouter
class NavBar extends React.Component {
    getNavLinkClass (tab) {
        const location = this.props.location.pathname

        if (tab === "services" && location === "/")
             return "nav-link services active"
        else if (tab === "about" && location === "/about-us")
             return "nav-link about-us active"
        else if (tab === "resume" && location === "/contact")
             return "nav-link contact active"
        else if (tab === "resume" && location === "/line-card")
             return "nav-link line-card active"
        else return `nav-link ${tab}`
    }

    render = () =>
        <div className={"nav-bar " + (this.props.mode === "dark" ? "dark-mode" : "")}>
            <Link to="/">
                <div className="nav-logo">
                    <img src={this.props.mode === "dark" ? darkModeLogo : regularLogo} />
                </div>
            </Link>

            <div className="nav-contents">
                <div className={this.getNavLinkClass("services")}>
                    <Link to="/">Services</Link>
                </div>
                <div className={this.getNavLinkClass("about-us")}>
                    <Link to="/about">About Us</Link>
                </div>
                <div className={this.getNavLinkClass("contact")}>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className={this.getNavLinkClass("line-card")}>
                    <Link to="/line-card">Line Card</Link>
                </div>
            </div>
        </div>
}


export default NavBar
