import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import TicketsReducer from "./tickets/reducer";

const rootReducer = combineReducers({
    tickets: TicketsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store