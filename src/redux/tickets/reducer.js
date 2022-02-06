import { SET_IS_LOADED, SET_SEARCH_ID, SET_TICKETS } from "./actions"

const initialState = {
    searchId: '',
    isLoaded: false,
    list: []
}

const TicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS:
            return {
                ...state,
                list: action.tickets,
            }
        case SET_IS_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        case SET_SEARCH_ID:
            return {
                ...state,
                searchId: action.id
            }
        default:
            return state
    }
}

export default TicketsReducer