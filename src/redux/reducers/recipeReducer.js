import { FIRST_PAGE} from "./actionType";
const initialState = {
    product: []

};

const recipeReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FIRST_PAGE:
            return { ...state, product: [...state.product, payload] };
        default:
            return state;
    }
};




export default recipeReducer;
