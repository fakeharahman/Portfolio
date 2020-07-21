import React from 'react'
import classes from './Form.module.css'

const form = props => {

    // const cssClasses = [classes.Form, props.show === 'entering' ? classes.FormOpen : props.show === 'exiting' ? classes.FormClose : null]


    return (
        <div className={classes.Form}>
            <form name="Message" onSubmit={props.submitHandler}>
                <input type='text' onChange={props.changed} name='name' placeholder='Your name' className={classes.InputElement} />
                <input type='email' onChange={props.changed} name='email' placeholder='Your Email' className={classes.InputElement} />
                <textarea placeholder="So what's up?" onChange={props.changed} name='content' rows="5" className={classes.InputElement} />
                <button type='submit' className={classes.Button}>SUBMIT</button>


            </form>
        </div>
    )
}

export default form