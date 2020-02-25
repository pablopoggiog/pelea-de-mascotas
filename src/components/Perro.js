import React from 'react';
import perro from './styles/perro.png';
import classes from './styles/Perro.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/actions';

const Perro = () => {

    const vida = useSelector(store => store.vida.vidaPeleador1)

    return (
        <div>
            <p className={classes.vida}>{vida}</p>
            <img src={perro} className={classes.peleadorImg} ></img>
        </div>
    )
}

export default Perro;