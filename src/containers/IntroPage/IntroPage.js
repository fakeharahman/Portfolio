import React, { Component } from 'react'
import Particle from '../../Components/Particle/Particle'
import SlideOnScroll from '../../Components/animation/SlideOnScroll/SlideOnScroll';
import IntroComponents from '../IntroComponents/IntroComponents'
import TitleText from '../../Components/animation/TitleText/titleText';
import Picture from '../../Components/Picture/Picture';
import Introduction from '../../Components/TextContent/Introduction/Introduction';
import SVG1 from '../../Components/SVGStyling/SVG1';


class IntroPage extends Component {
    render() {
        return (
            <React.Fragment>

                <Particle />
                <IntroComponents><TitleText /></IntroComponents>
                <Picture />
                <Introduction />
                <SVG1 />
                <SlideOnScroll>Heyyyyy</SlideOnScroll>

                {/* <Sticky /> */}
            </React.Fragment>
        )
    }
}
export default IntroPage;