import React, { useState } from 'react';
import { toggleEditing, updateSearchInput } from '../actions/searchActions';

import { connect } from 'react-redux';
import './Hotels.style.scss';

const Search = ({ hotels, input, editing }) => {

    console.log(hotels)

    const [searchInput, setSearchInput] = useState(input);

    console.log(searchInput)
    const handleChanges = e => {
        e.preventDefault();
        setSearchInput(e.target.value)
        console.log(searchInput)
    };
    // h => h.name.includes(searchInput)
    const onClick = () => {
        console.log(hotels.hotels)
        let hotelArray = hotels.hotels
        const newHotels = hotelArray.map(h => console.log(h.hotelStaticContent.name));
        console.log(newHotels)
    }


    return (
        <div className="filters">
            <h1>Hotel name</h1>
            <input
                className="input"
                type="text"
                name="searchInput"
                value={searchInput}
                onChange={handleChanges}
            />
            <select name="" className="select">
                <option value="">Recommended</option>
                <option value="">Price low-to-high</option>
                <option value="">Price high-to-low</option>
            </select>
            <button className="button" onClick={onClick}>Submit</button>
            <button className="button">Reset</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state.searchReducer)
    console.log(state.hotelReducer)
    return {
        input: state.searchReducer.input,
        editing: state.searchReducer.editing,
        hotels: state.hotelReducer.hotels[0]
    }
}

export default connect(mapStateToProps, { toggleEditing, updateSearchInput })(Search);