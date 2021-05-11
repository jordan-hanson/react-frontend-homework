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
    const h1Title = screen.getByText(/hotel name/i)
    const recommended = screen.getByText(/recommended/i)
    const ascending = screen.getByText(/high-to-low/i)
    const descending = screen.getByText(/low-to-high/i)

    // const submitButton = fireEvent.click(screen.getByText(/submit/i))
})