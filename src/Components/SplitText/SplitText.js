// @flow
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';


const SplitTextStyled = styled.div`
  overflow: hidden;
  text-align: center;

  margin:0;

  
  .section {
      margin:0;
      height: 100vh;
   
  }
  .textContainer {
    position: relative;
    display: inline-block;
    transform-origin: center;
    background-color: black;
    margin:0;

  }
  .text, .text2 {
    position: relative;
    font-size: 80px;
    font-weight: bold;
    display: inline-block;
    color: white;
    margin:0;

  }
`;

const SplitText = (props) => (
    <SplitTextStyled>

        <Controller>
            <Scene
                pin={false}
                reverse={true}
                duration={300}
                offset={-100}
            // triggerHook="-100"
            >
                <Tween
                    from={{
                        x: '-100%',
                        y: '100%',

                        opacity: 0,
                        color: '#ff0000',
                        ease: 'Expo.easeOut'
                    }}
                    to={{
                        x: '0%', y: '0%',
                        opacity: 1,
                        color: '#ffffff',
                    }}
                >
                    <span className="text">{props.children}</span>
                </Tween>

            </Scene>
            <div className="section" />
        </Controller>
        <div className="section" />
    </SplitTextStyled>
);

export default SplitText;