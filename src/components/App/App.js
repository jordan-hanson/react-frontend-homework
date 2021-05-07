import React, { useEffect, useState } from 'react';
import './App.style.scss';
import { connect } from "react-redux";
import { getHotels } from '../../actions/hotelListActions';
import Search from '../Search';
import Hotels from '../Hotels';


function App(props) {


    return (
        <div className="App">
            <h1>Hotel Search Application</h1>
            <Search />
            <Hotels />
        </div>
    );
}
const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { getHotels })(App);
