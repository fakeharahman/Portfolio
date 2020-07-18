import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../NavLogo/NavLogo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'

const scrollTotop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
}

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <SideDrawerToggle clicked={props.drawerOpen} />
        <div className={classes.Logo} onClick={scrollTotop}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}><NavigationItems /></nav>
    </header>
)



export default toolbar;