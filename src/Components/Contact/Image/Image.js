import React from 'react'
import lightbulb from '../../../assets/undraw_feedback_h2ft.svg'
import classes from './Image.module.css'

const image = props => (
    <div className={classes.Image}>
        <img src={lightbulb} alt='light bulb' />
    </div>
)

export default image