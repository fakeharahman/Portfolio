import React, { Component } from 'react'
import Particle from '../../Components/Particle/Particle'
import SlideOnScroll from '../SlideOnScroll/SlideOnScroll';
import IntroComponents from '../IntroComponents/IntroComponents'
import TitleText from '../../Components/animation/TitleText/titleText';
import Picture from '../../Components/Picture/Picture';
import Introduction from '../../Components/TextContent/Introduction/Introduction';
import { Controller, Scene } from 'react-scrollmagic';

class IntroPage extends Component {
    render() {
        return (
            <React.Fragment>

                <Particle />
                <IntroComponents><TitleText /></IntroComponents>
                <Controller>
                    <Scene
                        // triggerHook="onCenter"
                        duration="50%"
                        // scrollOffset={100}
                        offset={300}
                        // reverse={false}
                        pin
                    ><div><Picture />
                            <Introduction /></div>
                    </Scene>
                </Controller>

                <SlideOnScroll>Heyyyyy</SlideOnScroll>

            </React.Fragment>
        )
    }
}
export default IntroPage;