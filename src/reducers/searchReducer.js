import {
    TOGGLE_EDITING
    // UPDATE_SEARCH_INPUT
} from '../actions/searchActions';

export const initialState = {
    editing: false
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing
            }
        default:
            return state;
    }
}