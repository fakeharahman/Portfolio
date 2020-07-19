import React from 'react'
import classes from './ContactBlock.module.css'

const ContactBlock = props => (
    <div className={classes.ContactBlock}>
        <span>{props.type}</span>
        <p>{props.children}</p>

    </div>
)

export default ContactBlock