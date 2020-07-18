import React from 'react'
import lightbulb from '../../../assets/close-up-photo-ofg-light-bulb-716398.jpg'
import classes from './Image.module.css'

const image = props => (
    <div className={classes.Image}>
        <img src={lightbulb} alt='light bulb' />
    </div>
)

export default image