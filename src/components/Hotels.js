import React, { useEffect } from 'react';
import { getHotels } from '../actions/hotelListActions';
import { connect } from 'react-redux';
import './Hotels.style.scss';

const Hotels = ({ hotels, loading, error, getHotels }) => {

    useEffect(() => {
        console.log("got hotels")
        getHotels()
    }, [])

    if (loading) {
        return <h2>Hotels are loading!</h2>
    }
    if (error) {
        return <h2>Woops! Something went wrong. Try again.</h2>
    }
    return (
        <div>
            {hotels}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        hotels: state.hotels,
        loading: state.loading,
        error: state.error
    }
}
export default connect(mapStateToProps, { getHotels })(Hotels);