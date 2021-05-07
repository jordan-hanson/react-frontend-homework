export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';

export const toggleEditing = () => {
    return { type: TOGGLE_EDITING };
}
export const updateSearchInput = (input) => {
    console.log(input)
    return { type: UPDATE_SEARCH_INPUT, payload: input }
}
