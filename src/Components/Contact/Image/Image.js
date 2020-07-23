import React from 'react'
import lightbulb from '../../../assets/feedback.svg'
import classes from './Image.module.css'

const image = props => (
    <div className={classes.Image}>
        <img src={lightbulb} alt='Contact' />
    </div>
)

export default image