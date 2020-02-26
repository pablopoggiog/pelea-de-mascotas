import React, { useEffect } from 'react';
import classes from './styles/Ring.module.css';
import Perro from './Perro';
import Gato from './Gato';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/actions';

const Ring = () => {

    const counter = useSelector(store => store.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        if (counter[0] < 5 && counter[1] < 5)
        handleNewRound()
    }, [counter])

    
    const handleNewRound = () => {      
        btnAbrirPopup();
    }



function btnAbrirPopup(){        
    document.getElementById('gracias').classList.add(classes.active);
    setTimeout(() => {
        btnCerrarPopup()
    }, 2000);
};

function btnCerrarPopup(){
    document.getElementById('gracias').classList.remove(classes.active);
};

    let ring;

    const reinicioDeJuego = () => {
        dispatch(actionCreators.reiniciarJuego())
    }
    
    if (counter[0] == 5) {
        ring = (
            <div className={classes.containerGameOver}>
                    <div className={classes.ringContainerGameOver}>
                    <div id='peleador1' className={`${classes.peleador}`}>
                        <Perro gano='true'></Perro>
                    </div>
                    <div id='peleador2' className={`${classes.peleador}`}>
                    </div>
                
                <div className={classes.gracias} id="gracias">
                    <h4>FIGHT!  <p role='img' aria-label='emoji-huellas'>🐾</p></h4>
                </div>
                        {setTimeout(reinicioDeJuego, 3500)}
                    </div>
                </div>
        )
    }

    else if (counter[1] == 5) {
        ring = (
            <div className={classes.containerGameOver}>
                    <div className={classes.ringContainerGameOver}>
                    <div id='peleador1' className={`${classes.peleador}`}>
                    </div>
                    <div id='peleador2' className={`${classes.peleador}`}>
                        <Gato gano='true'></Gato>
                    </div>
                
                <div className={classes.gracias} id="gracias">
                    <h4>FIGHT!  <p role='img' aria-label='emoji-huellas'>🐾</p></h4>
                </div>
                        {setTimeout(reinicioDeJuego, 3500)}
                    </div>
                </div>
        )
    }
    
    else if (counter[1] == 6 || counter[0] == 6) {
        ring = (            
            <div className={classes.container}>
                <div className={classes.ringContainer}>
                    <div id='peleador1' className={`${classes.peleador}`}>
                        <Perro gano='false'></Perro>
                    </div>
                    <div id='peleador2' className={`${classes.peleador}`}>
                        <Gato gano='false'></Gato></div>
                </div>
                
                <div className={classes.gracias} id="gracias">
                    <h4>FIGHT!  <p role='img' aria-label='emoji-huellas'>🐾</p></h4>
                </div>
                        {reinicioDeJuego()}
            </div>
        )
    }

    else {
        ring = (            
            <div className={classes.container}>
                <div className={classes.ringContainer}>
                    <div id='peleador1' className={`${classes.peleador}`}>
                        <Perro gano='false'></Perro>
                    </div>
                    <div id='peleador2' className={`${classes.peleador}`}>
                        <Gato gano='false'></Gato>
                    </div>
                </div>
                
                <div className={classes.gracias} id="gracias">
                    <h4>FIGHT!  <p role='img' aria-label='emoji-huellas'>🐾</p></h4>
                </div>


            </div>
        )
    }

    return ring;
}

export default Ring;