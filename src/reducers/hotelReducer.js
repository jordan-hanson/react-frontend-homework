import {
    FETCHING_HOTELS,
    FETCHING_HOTELS_SUCCESS,
    FETCHING_HOTELS_FAILURE,
    FILTERED_HOTEL_LIST
} from "../actions/hotelListActions";

const initialState = {
    hotels: [],
    loading: false,
    error: ""
}

export const hotelReducer = (state = initialState, action) => {
    console.log(state, "state in hotel reducer")
    console.log(action, "action in hotel reducer")
    switch (action.type) {
        case FETCHING_HOTELS:
            return {
                ...state,
                loading: true
            };
        case FETCHING_HOTELS_SUCCESS:
            return {
                ...state,
                hotels: [action.payload],
                loading: false
            };
        case FETCHING_HOTELS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FILTERED_HOTEL_LIST:
            console.log("this was hit")
            return {
                ...state,
                hotels: [action.payload]
            }
        default:
            return state;
    }
};

export default hotelReducer;