import React, { useState } from 'react';
import { toggleEditing, updateSearchInput } from '../actions/searchActions';
import { filteredHotels } from '../actions/hotelListActions';

import { connect } from 'react-redux';
import './Hotels.style.scss';

const Search = ({ hotels, input, filteredHotels }) => {

    console.log(filteredHotels)
    const [searchInput, setSearchInput] = useState(input);
    const [selectedField, setSelectedField] = useState("");

    console.log(searchInput)

    const handleChanges = e => {
        e.preventDefault();
        setSearchInput(e.target.value)
        console.log(searchInput)
    };
    const onChange = e => {
        setSelectedField(e.target.value)
    }
    const newList = e => {
        e.preventDefault();
        let hotelArray = hotels
        filteredHotels(hotelArray, searchInput, selectedField)
    }
    // console.log(hotelsInState)
    return (
        <div className="filters">
            <h1>Hotel name</h1>
            <input
                className="input"
                type="text"
                name="searchInput"
                placeholder="Hotel"
                value={searchInput}
                onChange={handleChanges}
            />
            <select name="" className="select" onChange={onChange} value={selectedField}>
                <option name="recommended" value="recommended" >Recommended</option>
                <option name="low-to-high" value="low-to-high" >Price low-to-high</option>
                <option name="high-to-low" value="high-to-low" >Price high-to-low</option>
            </select>
            <button className="button" onClick={newList}>Submit</button>
        </div>

    )
};

const mapStateToProps = (state) => {
    console.log(state.searchReducer)
    console.log(state.hotelReducer)
    return {
        input: state.searchReducer.input,
        editing: state.searchReducer.editing,
        hotels: state.hotelReducer.hotels
    }
}

export default connect(mapStateToProps, { toggleEditing, updateSearchInput, filteredHotels })(Search);