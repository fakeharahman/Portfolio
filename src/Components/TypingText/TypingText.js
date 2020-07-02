import React, { Component } from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
class TypingText extends Component {
    render() {
        return (
            <div>
                <Typed
                    strings={[
                        'Graphic Designer',
                        'Web Designer',
                        'Web Developer']}
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