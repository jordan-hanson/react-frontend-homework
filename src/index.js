import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';

import { createStore } from 'redux';
import Search from './components/Search';
import Properties from './components/Properties';
import './styles/style.scss';
// import {rootReducer} from './reducers/'
import { searchReducer } from '../src/reducers/searchReducer';

function App() {
    return (
        <div className="App">
            <Search />
            <Properties />
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
)