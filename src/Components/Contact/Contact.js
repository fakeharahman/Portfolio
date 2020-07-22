import React, { Component } from 'react'
import Image from './Image/Image'
import classes from './Contact.module.css'
import ContactInfo from './ContactInfo/ContactInfo'
import ContactBlock from './ContactBlock/ContactBlock'
import Footer from '../UI/Footer/Footer'



class Contact extends Component {
    componentDidMount() {
        window.scroll({ top: 0, left: 0 })
    }
    render() {
        return (<div className={classes.Contact}>

            <Image />
            <ContactInfo />
            <ContactBlock type='E-mail'> <a href="mailto:fakeha126@gmail.com"
                target="_blank" rel="noopener noreferrer">fakeha126@gmail.com</a></ContactBlock>
            <ContactBlock type='Github'><a href="https://github.com/fakeharahman"
                target="_blank" rel="noopener noreferrer">/fakeharahman</a></ContactBlock>
            <ContactBlock type='Twitter'><a href="https://twitter.com/excurbia"
                target="_blank" rel="noopener noreferrer">/excurbia</a></ContactBlock>
            <ContactBlock type='Instagram'><a href="https://www.instagram.com/fake_ha_/"
                target="_blank" rel="noopener noreferrer">@fake_ha_</a></ContactBlock>
            <ContactBlock type='Fiverr'><a href="https://www.fiverr.com/excurbia"
                target="_blank" rel="noopener noreferrer">@excurbia</a></ContactBlock>
            <ContactBlock type='Linkdin'><a href="https://www.linkedin.com/in/fakeha-rahman-277a4a1a6/"
                target="_blank" rel="noopener noreferrer">Fakeha Rahman</a></ContactBlock>
            <Footer />

        </div>)
    }
}
export default Contact