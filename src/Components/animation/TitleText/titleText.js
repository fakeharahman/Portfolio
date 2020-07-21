import React from 'react'
import classes from './titleText.module.css'
import { Random } from 'react-animated-text';
import TypingText from '../TypingText/TypingText';


const titleText = () => (
    <div className={classes.TitleText}>
        <div className={classes.head}>
            <div className={classes.intro}>
                <Random
                    text="Hi! I'm Fakeha"
                    iterations={1}
                    effect="verticalFadeIn"
                    effectChange={2}
                    effectDirection="up"
                /></div>
            <Random
                text="Nice to meet you!"
                iterations={1}
                effect="verticalFadeIn"
                effectChange={2}
                effectDirection="up"
            />
            <br />
        </div>
        <TypingText />


    </div>
)

export default titleText