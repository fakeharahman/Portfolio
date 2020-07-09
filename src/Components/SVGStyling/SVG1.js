import React from 'react'
import classes from './SVG1.module.css'
import svg from '../../assets/undraw_content_team_3epn.svg'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const SVG1 = (props) => (
    <div className={classes.SVG1}>
        <Controller>
            <Scene
                pin={false}
                reverse={true}
                duration={200}
                offset={-250}
            >
                <Tween
                    from={{
                        x: '-100%',
                        y: '100%',
                        opacity: 0,
                        ease: 'Expo.easeOut',
                        width: '70%'
                    }}
                    to={{
                        x: '0%',
                        y: '0%',
                        opacity: 1,
                        width: '100%'
                    }}
                >
                    <img src={svg} alt="img" />
                </Tween>
            </Scene>
        </Controller>
        <p>aaaaaaaaaaaaaaa haha the thing is ahahahah</p>
    </div>
)

export default SVG1