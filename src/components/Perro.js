import React, { useEffect } from 'react';
import perro from './styles/perro.png';
import classes from './styles/Perro.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actions/actions';

const Perro = () => {

    const vida = useSelector(store => store.vida.vidaPeleador1);
    const dispatch = useDispatch();

    const ataques = [
        {id: 'ladrarle', accion: 'Le ladra!', puntos: 20},
        {id: 'orinarleLaCuchita', accion: 'Le orina la cuchita!', puntos: 30},
        {id: 'comerleLaComida', accion: 'Le come la comida!', puntos: 50},
        {id: 'morderleUnaPatita', accion: 'Le muerde una patita!', puntos: 40},
        {id: 'morderleLaColita', accion: 'Le muerde la colita, sanguinario!', puntos: 60},
        {id: 'despertarlo', accion: 'Lo despierta de un mordisquito!', puntos: 30},
        {id: 'romperJuguete', accion: 'Le rompe un juguete', puntos: 20},
    ]
    
    let labelAtaque1 = '';

    const elegirAtaque = () => {
        const azar = Math.random();
        if (azar < 0.17){
            document.getElementById('labelAtaque1').innerHTML = ataques[0].accion;
            document.getElementById('peleador2').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque1').innerHTML = '';
                document.getElementById('peleador2').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida2(ataques[0].puntos));
        }
        else if (0.34 > azar >= 0.17){
            document.getElementById('labelAtaque1').innerHTML = ataques[1].accion;
            document.getElementById('peleador2').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque1').innerHTML = '';
                document.getElementById('peleador2').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida2(ataques[1].puntos));
        }
        else if (0.51 > azar >= 0.34){
            document.getElementById('labelAtaque1').innerHTML = ataques[2].accion;
            document.getElementById('peleador2').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque1').innerHTML = '';
                document.getElementById('peleador2').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida2(ataques[2].puntos));
        }
        else if (0.68 > azar >= 0.51){
            document.getElementById('labelAtaque1').innerHTML = ataques[3].accion;
            document.getElementById('peleador2').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque1').innerHTML = '';
                document.getElementById('peleador2').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida2(ataques[3].puntos));
        }
        else if (0.85 > azar >= 0.68){
            document.getElementById('labelAtaque1').innerHTML = ataques[4].accion;
            document.getElementById('peleador2').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque1').innerHTML = '';
                document.getElementById('peleador2').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida2(ataques[4].puntos));
        }

        else {
            document.getElementById('labelAtaque1').innerHTML = ataques[5].accion;
            document.getElementById('peleador2').classList.add('atacado');
            setTimeout(() => {                
                document.getElementById('labelAtaque1').innerHTML = '';
                document.getElementById('peleador2').classList.remove('atacado');
            }, 1500);
            return dispatch(actionCreators.disminuyeVida2(ataques[5].puntos));
        }
    }
    
    return (
        <>
            <p id='labelAtaque1' className={classes.labelAtaque1}>{labelAtaque1}</p>
            <p className={classes.vida}>
                {vida}
            </p>
            <img src={perro} className={classes.peleadorImg} onClick={elegirAtaque} ></img>
        </>
    )
}

export default Perro;