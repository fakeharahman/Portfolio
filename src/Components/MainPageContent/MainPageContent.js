import React from 'react'
import classes from './MainPageContent.module.css'
import contentSvg from '../../assets/undraw_content_team_3epn (2).svg'
import designSvg from '../../assets/undraw_design_components_9vy6.svg'
import coderSvg from '../../assets/undraw_proud_coder_7ain (1).svg'

import SVG from '../animation/SvgAnimation/SVG'

const mainPageContent = (props) => (
    <React.Fragment>
        <h1 className={classes.header}>What I Can Do</h1>
        <div className={classes.MainPageContent}>

            <SVG xCoords='-100%'><img src={designSvg} alt="img" /></SVG>
            <p>
                <h1>Design what you want</h1>
                I feel that simple and interactive designs are best. My goal is to convey
                your message most effectively to the user and make your content easy to understand.
            </p>
        </div>
        <div className={`${classes.MainPageContent} ${classes.right}`}>
            <SVG xCoords='100%'><img src={contentSvg} alt="img" /></SVG>
            <p>
                <h1>Develop what you need</h1>
            I'm a web-developer, so I can make your website run responsively on different devices
             with the latest technologies available!   </p>

        </div>
        <div className={classes.MainPageContent}>

            <SVG xCoords='-100%'><img src={coderSvg} alt="img" /></SVG>
            <p>
                <h1>Languages I know</h1>
    I work well with HTML, CSS, Javascript and React. I can also use the state
     management library-Redux. React builds single page applications making
     the experience more continuous and fluid for the user.
              </p>
        </div>
    </React.Fragment>
)

export default mainPageContent