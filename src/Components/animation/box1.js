import React from 'react'
import ReactAnime from 'react-animejs'
const { Anime, stagger } = ReactAnime

const box1 = () => (

    <Anime

        initial={[
            {
                targets: "#Box1",
                translateX: '50vw',
                easing: 'linear',
            },

        ]} direction="reverse"

    >
        <div id="Box1"
            style={{
                marginTop: '50vh',
                height: 50,
                width: 50,
                background: '#808000'
            }} />
    </Anime>

)

export default box1