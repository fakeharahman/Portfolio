import React from 'react'
import classes from './Form.module.css'

const form = props => {
    console.log(props.show)
    const cssClasses = [classes.Form, props.show === 'entering' ? classes.FormOpen : props.show === 'exiting' ? classes.FormClose : null]
    console.log(cssClasses)

    return (
        <div className={cssClasses.join(' ')}>
            <form name="Message" method="POST" netlify>
                <input type='text' name='name' placeholder='Your name' className={classes.InputElement} />
                <input type='email' name='email' placeholder='Your Email' className={classes.InputElement} />
                <textarea placeholder="So what's up?" name='message' rows="5" className={classes.InputElement} />
                <button type='submit' className={classes.Button}>SUBMIT</button>


            </form>
        </div>
    )
}

export default form