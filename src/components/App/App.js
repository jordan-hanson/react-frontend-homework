import React, { useEffect, useState } from 'react';
import './App.style.scss';
import { connect } from "react-redux";
import { getHotels } from '../../actions/hotelListActions';
import Search from '../Search';
import Hotels from '../Hotels';
import axios from 'axios';


function App(props) {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/rest/rates`)
            .then((res) => setHotels(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="App">
            <h1>Hotel Search Application</h1>
            <Search />
            <Hotels hotelsFromState={hotels} />
        </div>
    );
}
const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { getHotels })(App);
