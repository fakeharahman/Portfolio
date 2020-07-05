import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem >Home</NavigationItem>
        <NavigationItem>About</NavigationItem>
    </ul>
)
// link="/" exact
export default navigationItems