import { combineReducers } from "redux"
import recipeReduecr from "./recipeReducer"
import secondPageReducer from "./secondPageReducer"

const rootReducer = combineReducers({
    recipeReduecr:recipeReduecr,
    secondPageReducer:secondPageReducer
})

export default rootReducer