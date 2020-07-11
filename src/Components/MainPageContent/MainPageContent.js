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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis
                  </p>
        </div>
        <div className={`${classes.MainPageContent} ${classes.right}`}>
            <SVG xCoords='100%'><img src={contentSvg} alt="img" /></SVG>
            <p>
                <h1>Develop what you need</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis</p>

        </div>
        <div className={classes.MainPageContent}>

            <SVG xCoords='-100%'><img src={coderSvg} alt="img" /></SVG>
            <p>
                <h1>Languages I know</h1>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis
      </p>
        </div>
    </React.Fragment>
)

export default mainPageContent