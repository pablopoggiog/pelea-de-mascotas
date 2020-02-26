import React, { useEffect } from 'react';
import Ring from '../components/Ring';
import classes from './styles/Pelea.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/actions';

const Pelea = () => {

    return (
        <div className={classes.container}>
            <Ring></Ring>
        </div>
    )
}

export default Pelea;