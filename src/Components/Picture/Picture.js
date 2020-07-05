import React from 'react';
// import Image from '../../assets/mypic.jpg';
import Image2 from '../../assets/woman.jpg'
import classes from './Picture.module.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const Picture = () => (
    <div className={classes.Picture}>
        {/* <img src={Image} alt="MyPicture" /> */}
        <Controller>
            <Scene
                pin={false}
                reverse={true}
                duration={300}
                offset={-200}

            >
                <Tween
                    from={{

                        opacity: 0,
                        ease: 'Power2.easeIn'
                    }}
                    to={{
                        opacity: 1,

                    }}
                >
                    <img src={Image2} alt="MyPicture" />
                </Tween>

            </Scene>

        </Controller>



    </div>
)
export default Picture