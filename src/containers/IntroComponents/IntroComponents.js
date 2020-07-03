import React from 'react'
import classes from './IntroComponents.module.css';

const introComponents = props => (
    <div className={classes.IntroComponents}

    >
        {props.children}
        {/* You can render <Route> and <NavTabs /> here */}
    </div>
)

export default introComponents;