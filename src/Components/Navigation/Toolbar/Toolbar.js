import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../NavLogo/NavLogo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <SideDrawerToggle clicked={props.drawerOpen} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}><NavigationItems /></nav>
    </header>
)



export default toolbar;