import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact >Home</NavigationItem>
        <NavigationItem link='/contact'>Contact</NavigationItem>
    </ul>
)
export default navigationItems