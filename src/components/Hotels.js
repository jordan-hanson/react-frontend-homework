import React, { useEffect, useState } from 'react';
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
    console.log(hotels)
    // console.log(hotels.hotels.length)
    return (
        <div className="hotel-list">
            {hotels ?
                hotels.hotels.length > 0 ?
                    (
                        hotels.hotels.map(hotel => (
                            <div className="hotel-card" key={hotel.id}>
                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})` }}>
                                </div>
                                <div className="hotel-details">
                                    <div className="hotel-name">
                                        {hotel.hotelStaticContent.name}
                                    </div>
                                    <div className="location">
                                        {hotel.hotelStaticContent.neighborhoodName}
                                    </div>
                                </div>
                                <div className="price-details">
                                    <span className="price">
                                        <span dangerouslySetInnerHTML={{ __html: hotel.lowestAveragePrice.symbol }}></span>
                                        {hotel.lowestAveragePrice.amount}
                                    </span>
                                    <span className="rewards">
                                        {hotel.rewards.miles} miles
                                </span>
                                    <button className="button">Select</button>
                                </div>
                            </div>
                        ))) :
                    <p>
                        No hotels available at this time..
                    </p> :
                <p>
                    No hotels available.
                    </p>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    console.log("hotels line 61", state.hotelReducer.hotels[0])
    return {
        hotels: state.hotelReducer.hotels[0],
        loading: state.loading,
        error: state.error
    }
}
export default connect(mapStateToProps, { getHotels })(Hotels);