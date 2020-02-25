import React from 'react';
// import classes from './styles/Contador.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/actions';

const Contador = () => {

    const counter = useSelector(store => store.counter);
    const dispatch = useDispatch();

    return (
        <div style={{marginBottom: '40px', color: 'white', fontSize: '32px', fontWeight: 'bold'}}>
        {/* <div className={classes.container}> */}
            <button onClick={() => {dispatch(actionCreators.gano1())}}>tocame para que gane el perro</button>

            <span style={{margin: '0 40px'}}>
                {counter.counter[0]} vs {counter.counter[1]}
            </span>
            
            <button onClick={() => {dispatch(actionCreators.gano2())}}>tocame para que gane el gato</button>
        </div>
    )
}

export default Contador;