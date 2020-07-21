import React, { Component } from 'react'
import classes from './MessageMe.module.css'
import envelope from '../../assets/envelope-line.svg'
import envelopeBlack from '../../assets/envelope-line-black.svg'
import Form from './Form/Form'
import axios from '../../axios-messages'
import Spinner from '../UI/Spinner/Spinner'
import Modal from '../UI/Modal/Modal'



class MessageMe extends Component {
    state = {
        showForm: false,
        messageForm: {
            name: '',
            email: '',
            content: ''
        },
        loading: false,
        sending: true

    }

    formToggleHandler = () => {
        this.setState(prevState => {
            return { showForm: !prevState.showForm }
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const message = { ...this.state.messageForm }
        axios.post('/messages.json', message)
            .then(res => {

                this.setState({ loading: false, sending: false })
            })
            .catch(err => {
                this.setState({ loading: false, sending: false })
            })
    }

    onChangeHandler = (e) => {
        const updatedForm = { ...this.state.messageForm }
        updatedForm[e.target.name] = e.target.value;
        this.setState({ messageForm: updatedForm })
    }
    formCancelHandler = () => {
        this.setState({ showForm: false })
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



                {/* <Transition in={this.state.showForm} timeout={300} mountOnEnter unmountOnExit>
                    {state => (this.state.loading ? <Spinner /> : !this.state.sending ? <p>Thanks for the feedback!</p> :
                    
                        <Form changed={(e) => this.onChangeHandler(e)} show={state} submitHandler={(e) => this.onSubmitHandler(e)} />
                    )}
                </Transition> */}

                <Modal show={this.state.showForm}
                    closeModal={this.formCancelHandler}>
                    {(this.state.loading ? <Spinner /> : !this.state.sending ? <p>Thanks for the feedback!</p> :
                        <Form changed={(e) => this.onChangeHandler(e)} submitHandler={(e) => this.onSubmitHandler(e)} />)}
                </Modal>

            </div>
        )
    }
}


export default MessageMe