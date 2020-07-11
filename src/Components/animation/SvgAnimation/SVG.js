import React from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const SVG = (props) => (
    <React.Fragment>
        <Controller>
            <Scene
                pin={false}
                reverse={true}
                duration={200}
                offset={-250}
            >
                <Tween
                    from={{
                        x: props.xCoords,
                        y: 0,
                        opacity: 0,
                        ease: 'Expo.easeOut',
                        width: '80%'
                    }}
                    to={{
                        x: '0%',
                        y: '0%',
                        opacity: 1,
                        width: '100%'
                    }}
                >
                    {props.children}
                </Tween>
            </Scene>
        </Controller>
    </React.Fragment>
)

export default SVG