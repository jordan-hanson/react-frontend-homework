import React from 'react';
import { getHotels } from '../actions/hotelListActions';
import { connect } from 'react-redux';

const Hotels = (props) => {
    console.log(props)
    return (
        <div>
            Hotel List
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        hotels: state.hotels
    }
}
export default connect(mapStateToProps, { getHotels })(Hotels);