import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import './styles/style.scss';
import App from './components/App/App';
import { rootReducer } from './reducers/';
// import { searchReducer } from '../src/reducers/searchReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);