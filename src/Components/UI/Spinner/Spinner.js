import React from 'react'
import classes from './Spinner.module.css'

const spinner = props => (
    // <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
    <div className={classes.loader}>Loading...</div>
    // </div>
)
export default spinner