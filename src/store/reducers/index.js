import * as actionTypes from '../actions/actions';

const initialState = {
    counter: [0, 0],
    vida: {
        vidaPeleador1: 100,
        vidaPeleador2: 100
    },
    siendoAtacado: [true, true]
}

const unicoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISMINUYE_VIDA_1:
            if (state.vida.vidaPeleador1 - action.val <= 0) {
                return {
                    ...state,
                    counter: [state.counter[0], state.counter[1] + 1],
                    vida: {
                        vidaPeleador1: 100,
                        vidaPeleador2: 100
                    }
                }
            }
            return {
                ...state,
                vida: {
                    ...state.vida,
                    vidaPeleador1: state.vida.vidaPeleador1 - action.val,
                }
            };
        case actionTypes.DISMINUYE_VIDA_2:
            if (state.vida.vidaPeleador2 - action.val <= 0) {
                return {
                    ...state,
                    counter: [state.counter[0] +1, state.counter[1]],
                    vida: {
                            vidaPeleador1: 100,
                            vidaPeleador2: 100
                    }
                }
            }
            return {
                ...state,
                vida: {
                    ...state.vida,
                    vidaPeleador2: state.vida.vidaPeleador2 - action.val
                }
            };            
        case actionTypes.REINICIAR_JUEGO:
            return {
                ...state,
                counter: [0, 0],
                vida: {
                    vidaPeleador1: 100,
                    vidaPeleador2: 100
                }
            };
        case actionTypes.GANO1:
            return {
                ...state,
                counter: [state.counter[0] + 1, state.counter[1]],
            };
        case actionTypes.GANO2:
            return {
                ...state,
                counter: [state.counter[0], state.counter[1] + 1]
            }; 
        default:
            return state
    }
}

export default unicoReducer;