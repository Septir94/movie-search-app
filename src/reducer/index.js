import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

const reducer = combineReducers({
	movie: movieReducer,
})
export default reducer;