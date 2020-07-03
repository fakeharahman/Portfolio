import React, { Component } from 'react'
import Particle from '../../Components/Particle/Particle'
import SlideOnScroll from '../SlideOnScroll/SlideOnScroll';
import IntroComponents from '../IntroComponents/IntroComponents'
import TitleText from '../../Components/animation/TitleText/titleText';
import Picture from '../../Components/Picture/Picture';

class IntroPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Particle />
                <IntroComponents><TitleText /></IntroComponents>
                <Picture />
                <h1 style={{ color: 'gold' }}>Hi!</h1>
                <SlideOnScroll>Heyyyyy</SlideOnScroll>

            </React.Fragment>
        )
    }
}
export default IntroPage