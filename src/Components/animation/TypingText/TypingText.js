import React, { Component } from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import classes from './TypingText.module.css';
class TypingText extends Component {
    render() {
        return (
            <div className={classes.TypingText}>
                <Typed
                    strings={[
                        'Web Developer',
                        'Front-end Developer',
                        'Graphic Designer',
                        'Web Designer'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                <br />

                {/* <Typed
                    strings={[
                        'Search for products',
                        'Search for categories',
                        'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop />
 */}

            </div>
        );
    }
}
export default TypingText