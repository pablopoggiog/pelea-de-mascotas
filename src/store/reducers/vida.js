import { DISMINUYE_VIDA_1, DISMINUYE_VIDA_2 } from '../actions/actions';

const initialState = {
    vidaPeleador1: 300,
    vidaPeleador2: 200
}

const vidaReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISMINUYE_VIDA_1:
            return {
                ...state,
                vidaPeleador1: state.vidaPeleador1 - action.val
            };
        case DISMINUYE_VIDA_2:
            return {
                ...state,
                vidaPeleador2: state.vidaPeleador2 - action.val
            };
        default:
            return state
    }
}

export default vidaReducer;