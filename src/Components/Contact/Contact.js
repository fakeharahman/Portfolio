import React from 'react'
import Image from './Image/Image'
import classes from './Contact.module.css'
import ContactInfo from './ContactInfo/ContactInfo'

const contact = props => (
    <div className={classes.Contact}>

        <Image />
        <ContactInfo />

    </div>
)

export default contact