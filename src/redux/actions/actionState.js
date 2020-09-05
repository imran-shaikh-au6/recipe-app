import axios from "axios";
export const firstProduct = (search) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://forkify-api.herokuapp.com/api/search?q=${search}`
        );
        console.log(response.data.recipes);
        console.log(response)
        if (response.data.recipes) {
            dispatch({ type: "FIRST_PAGE", payload: response.data.recipes });
        }
    } catch (err) {
        alert(err.message)
        console.log(err.message);
    }
};
