import React from 'react';
import classes from './styles/Ring.module.css';
import Perro from './Perro';
import Gato from './Gato';

const Ring = () => {
    return (
        <div className={classes.container}>
            <div className={classes.ringContainer}>
                <div className={`${classes.peleador1} ${classes.peleador}`}>
                    <Perro></Perro>
                </div>
                <div className={`${classes.peleador2} ${classes.peleador}`}>
                    <Gato></Gato></div>
            </div>
        </div>
    )
}

export default Ring;