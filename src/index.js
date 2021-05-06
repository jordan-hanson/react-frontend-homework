import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';

import { createStore } from 'redux';
import Search from './components/Search';
import Hotels from './components/Properties';
import './styles/style.scss';
import { rootReducer } from './reducers/'
// import { searchReducer } from '../src/reducers/searchReducer';

const store = createStore(rootReducer);

function App() {
    return (
        <div className="App">
            <Search />
            <Hotels />
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
)