import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialState } from '../reducers/searchReducer'

import Search from './Search';
import { rootReducer } from '../reducers/index';

function renderWithRedux(
    ui,
    { initialState, store = createStore(rootReducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>), store
    }

}
test("Should render Search without errors", () => {
    renderWithRedux(<Search />)
})