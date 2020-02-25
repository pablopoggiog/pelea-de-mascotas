import { GANO1, GANO2 } from '../actions/actions';

const initialState = {
    counter: [0, 0]
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GANO1:
            return {
                ...state,
                counter: [state.counter[0] + 1, state.counter[1]]
            };
        case GANO2:
            return {
                ...state,
                counter: [state.counter[0], state.counter[1] + 1]
            };
        default:
            return state
    }
}

export default counterReducer;