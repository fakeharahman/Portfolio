import React from 'react';
import classes from './Introduction.module.css'
import Picture from '../Picture/Picture';

const introduction = () => (
    <div className={classes.Introduction}>
        <Picture />
        <h1>Hi</h1>
        <p> Since you landed here you are probably looking
        for someone who can build your new website.
        Well done! You found the person for the job. I can design and build
        websites from scratch!  </p>
    </div>
)

export default introduction