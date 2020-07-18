import React from 'react'
import classes from './ContactInfo.module.css'
import { Wave } from 'react-animated-text'

const contactInfo = props => (
    <div className={classes.ContactInfo}>
        <h1><Wave iterations={1}
            effect="verticalFadeIn"
            effectChange={2}
            effectDirection="up" text='Contact' /></h1>
        <p>For any enquiries, or just to say hello, get in touch and contact me.</p>
    </div>
)

export default contactInfo