import {
    FETCHING_HOTELS,
    FETCHING_HOTELS_SUCCESS,
    FETCHING_HOTELS_FAILURE
} from "../actions/hotelListActions";

const initialState = {
    hotels: [],
    loading: false,
    error: ""
}

export const hotelReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export default hotelReducer;