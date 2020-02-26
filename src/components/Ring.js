import React from 'react';
import classes from './styles/Ring.module.css';
import Perro from './Perro';
import Gato from './Gato';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/actions';

const Ring = () => {

    const counter = useSelector(store => store.counter);
    const dispatch = useDispatch();
    
    let ring;

    const reinicioDeJuego = () => {
        dispatch(actionCreators.reiniciarJuego())
    }
    
    if (counter[0] == 5) {
        ring = (
            <div className={classes.containerGameOver}>
                    <div className={classes.ringContainerGameOver}>
                        <Perro gano='true'/>
                        {setTimeout(reinicioDeJuego, 3500)}
                    </div>
                </div>
        )
    }

    else if (counter[1] == 5) {
        ring = (
            <div className={classes.containerGameOver}>
                    <div className={classes.ringContainerGameOver}>
                        <Gato gano='true'/>
                        {setTimeout(reinicioDeJuego, 3500)}
                    </div>
                </div>
        )
    }
    
    else if (counter[1] == 6 || counter[0] == 6) {
        ring = (            
            <div className={classes.container}>
                <div className={classes.ringContainer}>
                    <div className={`${classes.peleador1} ${classes.peleador}`}>
                        <Perro gano='false'></Perro>
                    </div>
                    <div className={`${classes.peleador2} ${classes.peleador}`}>
                        <Gato gano='false'></Gato></div>
                </div>
                        {reinicioDeJuego()}
            </div>
        )
    }

    else {
        ring = (            
            <div className={classes.container}>
                <div className={classes.ringContainer}>
                    <div className={`${classes.peleador1} ${classes.peleador}`}>
                        <Perro gano='false'></Perro>
                    </div>
                    <div className={`${classes.peleador2} ${classes.peleador}`}>
                        <Gato gano='false'></Gato></div>
                </div>
            </div>
        )
    }

    return ring;
}

export default Ring;