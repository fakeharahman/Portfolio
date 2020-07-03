import React from 'react'
import classes from './IntroComponents.module.css';

const introComponents = props => (
    <div className={classes.IntroComponents}>
        {props.children}

    </div>
)

export default introComponents;