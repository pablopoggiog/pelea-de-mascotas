import React, { useEffect } from 'react';
import gato from './styles/gato.png';
import classes from './styles/Gato.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/actions';

const Gato = () => {

    const vida = useSelector(store => store.vida.vidaPeleador2);
    const dispatch = useDispatch();    

    const ataques = [
        {id: 'orinarleLaCuchita', accion: 'Le orina la cuchita!', puntos: 20},
        {id: 'comerleLaComida', accion: 'Le come la comida!', puntos: 30},
        {id: 'morderleUnaPatita', accion: 'Le muerde una patita!', puntos: 50},
        {id: 'arañarpancita', accion: 'Le araña la pancita!', puntos: 30},
        {id: 'gruñir', accion: 'Le gruñe!', puntos: 20},
        {id: 'cacaEnComida', accion: 'Se desgració sobre su comida! Eso no se hace', puntos: 60},
    ]

    let labelAtaque2;
  

    const elegirAtaque = () => {
        const azar = Math.random();
        if (azar < 0.17){
            document.getElementById('labelAtaque2').innerHTML = ataques[0].accion;
            document.getElementById('peleador1').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque2').innerHTML = '';
                document.getElementById('peleador1').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida1(ataques[0].puntos));
        }
        else if (0.34 > azar >= 0.17){
            document.getElementById('labelAtaque2').innerHTML = ataques[1].accion;
            document.getElementById('peleador1').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque2').innerHTML = '';
                document.getElementById('peleador1').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida1(ataques[1].puntos));
        }
        else if (0.51 > azar >= 0.34){
            document.getElementById('labelAtaque2').innerHTML = ataques[2].accion;
            document.getElementById('peleador1').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque2').innerHTML = '';
                document.getElementById('peleador1').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida1(ataques[2].puntos));
        }
        else if (0.68 > azar >= 0.51){
            document.getElementById('labelAtaque2').innerHTML = ataques[3].accion;
            document.getElementById('peleador1').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque2').innerHTML = '';
                document.getElementById('peleador1').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida1(ataques[3].puntos));
        }
        else if (0.85 > azar >= 0.68){
            document.getElementById('labelAtaque2').innerHTML = ataques[4].accion;
            document.getElementById('peleador1').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque2').innerHTML = '';
                document.getElementById('peleador1').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida1(ataques[4].puntos));
        }

        else {
            document.getElementById('labelAtaque2').innerHTML = ataques[5].accion;
            document.getElementById('peleador1').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque2').innerHTML = '';
                document.getElementById('peleador1').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida1(ataques[5].puntos));
        }
    }


    return (
        <>
            <p id='labelAtaque2' className={classes.labelAtaque2}>{labelAtaque2}</p>
            <p className={classes.vida}>{vida}</p>
            <img src={gato} className={classes.peleadorImg} onClick={elegirAtaque} ></img>
        </>
    )
}

export default Gato;