import * as actionTypes from '../actions/actions';

const initialState = {
        vidaPeleador1: 100,
        vidaPeleador2: 100
}

const vidaReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.DISMINUYE_VIDA_1:
            // if (state.vidaPeleador1 - action.val <= 0) {
            //     return {
            //         ...state,
            //         counter: [state.counter[0], state.counter[1] + 1],
            //         vidaPeleador1: 100,
            //         vidaPeleador2: 100
            //     }
            // }
            return {
                ...state,
                vidaPeleador1: state.vidaPeleador1 - action.val
            };
        case actionTypes.DISMINUYE_VIDA_2:
            // if (state.vidaPeleador1 - action.val <= 0) {
            //     actionTypes.gano1();
            //     return {
            //         ...state,
            //         counter: [state.counter[0] +1, state.counter[1]],
            //         vidaPeleador1: 100,
            //         vidaPeleador2: 100
            //     }
            // }
            return {
                ...state,
                vidaPeleador2: state.vidaPeleador2 - action.val
            };            
        case actionTypes.REINICIAR_JUEGO:
            return {
                ...state,
                vidaPeleador1: 100,
                vidaPeleador2: 100
            };    
        default:
            return state
    }
}

export default vidaReducer;