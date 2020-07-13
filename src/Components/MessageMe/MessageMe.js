import React from 'react'
import classes from './MessageMe.module.css'
import envelope from '../../assets/envelope-line.svg'
import envelopeBlack from '../../assets/envelope-line-black.svg'

const messageMe = (props) => {

    return (
        <div className={classes.MessageMe}>
            <h1>Message Me</h1>
            <p>If you think I can help you with some project or you just want to say hi,
                     then get in touch! </p>

            <form action="mailto:fakeha126@gmail.com" method="post" enctype="text/plain">

                <button type="submit" value="Send" className={classes.back}>
                    <div className={classes.submitbtn}>
                        <div><img src={envelopeBlack} alt='Message me' />  Message Me</div>
                        <div></div>
                        <div><img src={envelope} alt='Message me' />Message Me</div>
                    </div>
                </button>

            </form>
        </div>
    )

}

export default messageMe