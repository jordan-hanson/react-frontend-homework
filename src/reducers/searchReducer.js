import {
    TOGGLE_EDITING,
    UPDATE_SEARCH_INPUT
} from '../actions/searchActions';

export const initialState = {
    input: "",
    editing: false
};

export const searchReducer = (state = initialState, action) => {
    console.log(state, "state in search reducer")
    console.log(action, "action in search reducer")
    switch (action.type) {
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing,
            };
        case UPDATE_SEARCH_INPUT:
            return {
                ...state,
                input: action.payload,
                editing: false,
            };
        default:
            return state;
    }
};

export default searchReducer