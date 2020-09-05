import axios from "axios";
import { SECOND_PAGE,FIRST_PAGE } from "../reducers/actionType"
export const secondProduct = (searchId) => async (dispatch) => {
    try {
        dispatch({type:FIRST_PAGE, payload:null})
        const response = await axios.get(
            `https://forkify-api.herokuapp.com/api/get?rId=${searchId}`
        );
        console.log(response.data.recipe);
        dispatch({ type: SECOND_PAGE, payload: response.data.recipe });
        // https://forkify-api.herokuapp.com/api/get?rId=${repiid}
    } catch (err) {
        console.log(err.message);
    }
};
