import React, { Component } from 'react'
import Particle from '../../Components/Particle/Particle'
import IntroComponents from '../IntroComponents/IntroComponents'
import TitleText from '../../Components/animation/TitleText/titleText';
import Picture from '../../Components/Picture/Picture';
import Introduction from '../../Components/TextContent/Introduction/Introduction';
import MainPageContent from '../../Components/MainPageContent/MainPageContent';
import MessageMe from '../../Components/MessageMe/MessageMe';
import Foot from '../../Components/Footer/Footer'


class IntroPage extends Component {
    componentDidMount() {
        window.scroll({ top: 0, left: 0 })
    }
    render() {
        return (
            <div >
                <Particle />
                <IntroComponents><TitleText /></IntroComponents>
                <Picture />
                <Introduction />
                <MainPageContent />
                <MessageMe />
                <Foot />
            </div >
        )
    }
}
export default IntroPage;