import React from 'react'
import Logo from '../NavLogo/NavLogo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import BackDrop from '../../UI/Backdrop/Backdrop'
import leftArrow from '../../../assets/left-arrow.svg'

const sideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <React.Fragment>
            <BackDrop show={props.show} clicked={props.closed} />
            <div className={attachedClasses.join(" ")} onClick={props.closed}>
                <img src={leftArrow} alt='left arrow' className={classes.leftArrow} />

                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment >

    )
}

export default sideDrawer