import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'


class NavBarDrawer extends React.Component {
    goto = url => event => {
        this.props.history.push(url)
    }

    render = () =>
        <Drawer variant="persistent"
                anchor="right"
                open={this.props.open}>
            <div className="drawer-header">
                <IconButton onClick={this.props.handleCloseDrawer}>
                    <ChevronRightIcon />
                </IconButton>
            </div>

            <Divider />

            <List>
                <ListItem button onClick={this.goto('/')}>Services</ListItem>
                <ListItem button onClick={this.goto('/about')}>About Us</ListItem>
                <ListItem button onClick={this.goto('/contact')}>Contact</ListItem>
                <ListItem button onClick={this.goto('/line-card')}>Line Card</ListItem>
            </List>
        </Drawer>
}


export default withRouter(NavBarDrawer)
