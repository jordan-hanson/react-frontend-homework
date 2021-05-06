import React from 'react';
import './App.style.scss';

import Search from '../Search';
import Hotels from '../Hotels';

function App() {
    console.log("App is rendered")
    return (
        <div className="App">
            <h1>Hotel Search Application</h1>
            <Search />
            <Hotels />
        </div>
    );
}
export default App;
