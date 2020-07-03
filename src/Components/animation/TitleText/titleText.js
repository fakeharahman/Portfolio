import React from 'react'
import classes from './titleText.module.css'
import { Random } from 'react-animated-text';
import TypingText from '../TypingText/TypingText';


const titleText = () => (

    <div className={classes.TitleText}>
        <Random
            text="Design and develop
            All at one place"
            iterations={1}
            effect="verticalFadeIn"
            effectChange={2}
            effectDirection="up"
        />
        <br />
        <TypingText />

    </div>
)

export default titleText