import React from 'react'
import classes from './SideDrawerToggle.module.css'
import rightArrow from '../../../../assets/right-arow.svg'

const SideDrawerToggle = props => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <img src={rightArrow} alt='right arrow' />
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default SideDrawerToggle