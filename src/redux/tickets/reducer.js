import { FILTER_TICKETS, SET_IS_LOADED, SET_SEARCH_ID, SET_TICKETS, SORT_TICKETS } from "./actions"

const initialState = {
    searchId: '',
    isLoaded: false,
    initialList: [],
    currList: []
}

const TicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS:
            return {
                ...state,
                initialList: action.tickets,
                currList: action.tickets
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
        case SORT_TICKETS: {
            let sortedTickets = [...state.currList]
            if(action.sortType === 'price'){
                sortedTickets.sort((a,b) => a.price - b.price)
            }
            if(action.sortType === 'speed'){
                sortedTickets.sort((a,b) => {
                    const totalDurationA = a.segments[0].duration + a.segments[1].duration
                    const totalDurationB = b.segments[0].duration + b.segments[1].duration

                    return totalDurationA - totalDurationB
                })
            }
            return {
                ...state,
                currList: sortedTickets
            }
        }
        case FILTER_TICKETS: {
            const filteredTickets = [...state.initialList].filter(ticket => {
                const checkSegmentStops = (segmentNum) => {
                    return action.filter.includes(ticket.segments[segmentNum].stops.length)
                }
                return checkSegmentStops(0) && checkSegmentStops(1)
            })
            return {
                ...state,
                currList: filteredTickets
            }
        }
        default:
            return state
    }
}

export default TicketsReducer