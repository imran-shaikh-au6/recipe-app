import { SECOND_PAGE } from "./actionType";
const initialState = {
    prd: []
};

const secondPageReducer = (state = initialState, action) => {
    // const { type, payload } = action;
    // switch (type) {
    //     case SECOND_PAGE:
    //         return { ...state, main: [...state.main, payload] };
    //     default:
    //         return state;
    // }
    const { type, payload } = action;
    switch (type) {
        case SECOND_PAGE:
            return { ...state, prd: [...state.prd, payload] };
        default:
            return state;
    }
};

export default secondPageReducer;
