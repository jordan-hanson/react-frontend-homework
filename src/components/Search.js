import React, { useState } from 'react';
import { toggleEditing, updateSearchInput } from '../actions/searchActions';

import { connect } from 'react-redux';

const Search = ({ input, editing }) => {

    console.log(props)

    const [searchInput, setSearchInput] = useState();


    const handleChanges = e => {
        setSearchInput(e.target.value)
    };

    return (
        <div>
            <h1 className="filters">Hotel name</h1>
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
            <button className="button">Submit</button>
            <button className="button">Reset</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        input: state.input,
        editing: state.editing
    }
}

export default connect(mapStateToProps, { toggleEditing, updateSearchInput })(Search);