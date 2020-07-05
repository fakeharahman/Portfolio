import React from 'react'
import logoPic from "../../../assets/woman.jpg"
import classes from './NavLogo.module.css'

const navLogo = props => (
    <div className={classes.Logo}>
        <img src={logoPic} alt="Logo" />
    </div>
)

export default navLogo;