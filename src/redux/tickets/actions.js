const URL = 'https://front-test.beta.aviasales.ru'

export const SET_SEARCH_ID = 'SET_SEARCH_ID'
export const SET_TICKETS = 'SET_TICKETS'
export const SET_IS_LOADED = 'SET_IS_LOADED'
export const SORT_TICKETS = 'SORT_TICKETS'
export const FILTER_TICKETS = 'FILTER_TICKETS'

// SearchId
export const fetchSearchId = () => {
    return (dispatch) => {
        fetch(`${URL}/search`)
            .then(res => res.json())
            .then(data => dispatch(setSearchId(data.searchId)))
    }
}

export const setSearchId = (id) => ({
    type: SET_SEARCH_ID,
    id
})

// Tickets
export const fetchTickets = (searchId) => {
    return (dispatch) => {
        fetch(`${URL}/tickets?searchId=${searchId}`)
            .then(res => res.json())
            .then(data => dispatch(setTickets(data.tickets)))
            .catch(() => dispatch(fetchTickets(searchId)))
            .finally(() => dispatch(setIsLoaded(true)))
    }
}

export const setTickets = (tickets) => ({
    type: SET_TICKETS,
    tickets
})

// isLoaded
export const setIsLoaded = (payload) => ({
    type: SET_IS_LOADED,
    payload
})

// sort
export const sortTickets = (sortType) => ({
    type: SORT_TICKETS,
    sortType
})

// filter
export const filterTickets = (filter) => ({
    type: FILTER_TICKETS,
    filter
})