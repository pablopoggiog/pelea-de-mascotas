import React from 'react';
import gato from './styles/gato.png';
import classes from './styles/Gato.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/actions';

const Gato = () => {

    const vida = useSelector(store => store.vida.vidaPeleador2);
    const dispatch = useDispatch();


    return (
        <div>
            <p className={classes.vida}>{vida}</p>
        <img src={gato} className={classes.peleadorImg} onClick={() => dispatch(actionCreators.disminuyeVida1(20))} ></img>
        </div>
    )
}

export default Gato;