import React from 'react'
import NavBar from 'ui/NavBar'
import Footer from 'ui/Footer'
import NavBarDrawer from 'ui/NavBarDrawer'


class PageWithNavBar extends React.Component {
    state = { drawerIsOpen: false }

    handleOpenDrawer = () => this.setState({ drawerIsOpen: true })
    handleCloseDrawer = () => this.setState({ drawerIsOpen: false })

    render = () =>
        <div className={this.props.className}>
            <NavBar mode={this.props.mode}
                    handleOpenDrawer={this.handleOpenDrawer} />

            {this.props.children}

            <Footer />

            <NavBarDrawer open={this.state.drawerIsOpen}
                          handleCloseDrawer={this.handleCloseDrawer} />
        </div>
}

export default PageWithNavBar
