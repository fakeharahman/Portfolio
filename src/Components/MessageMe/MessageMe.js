import React, { Component } from 'react'
import classes from './MessageMe.module.css'
import envelope from '../../assets/envelope-line.svg'
import envelopeBlack from '../../assets/envelope-line-black.svg'
import Form from './Form/Form'
import Transition from "react-transition-group/Transition";


class MessageMe extends Component {
    state = {
        showForm: false,

    }

    formToggleHandler = () => {
        this.setState(prevState => {
            return { showForm: !prevState.showForm }
        })
    }
    render() {
        return (
            <div className={classes.MessageMe}>
                <h1>Message Me</h1>
                <p>
                    If you think I can help you with your project or you just want to say hi,
                         then let's get in touch! </p>

                <button onClick={this.formToggleHandler} className={classes.back}>
                    <div className={classes.submitbtn}>
                        <div><img src={envelopeBlack} alt='Message me' />  Message Me</div>
                        <div></div>
                        <div><img src={envelope} alt='Message me' />Message Me</div>
                    </div>
                </button>


                <Transition in={this.state.showForm} timeout={300} mountOnEnter unmountOnExit>
                    {state => (
                        <Form show={state} />
                    )}
                </Transition>



            </div>
        )
    }
}


export default MessageMe