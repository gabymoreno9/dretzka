import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import logo from 'assets/images/logo.png'
import darkModeLogo from 'assets/images/dark-mode-logo.png'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


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
        <AppBar position="absolute" className={"nav-bar " + (this.props.mode === "dark" ? "dark-mode" : "")}>
            <Toolbar>
                <div className="nav-logo-wrapper" style={{ flexGrow: 1 }}>
                    <Link to="/">
                        <div className="nav-logo">
                            <img src={this.props.mode === "dark" ? darkModeLogo : logo} />
                        </div>
                    </Link>
                </div>

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

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={this.props.handleOpenDrawer}>
                    <MenuIcon style={{ fontSize: '40px', color: this.props.mode === "dark" ? '#FFF' : '#222' }} />
                </IconButton>
            </Toolbar>
        </AppBar>
}


export default NavBar
