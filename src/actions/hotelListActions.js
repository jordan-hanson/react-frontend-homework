import axios from 'axios';

export const FETCHING_HOTELS = 'FETCHING_HOTELS';
export const FETCHING_HOTELS_SUCCESS = 'FETCHING_HOTELS_SUCCESS';
export const FETCHING_HOTELS_FAILURE = 'FETCHING_HOTELS_FAILURE';

export const getHotels = () => dispatch => {
    dispatch({ type: FETCHING_HOTELS })

    axios
        .get('http://localhost:8080/rest/rates')
        .then(res => {
            console.log(res)
            console.log(res.data)
            const hotelData = res.data
            dispatch({ type: FETCHING_HOTELS_SUCCESS, payload: hotelData })
        })
        .catch(err => {
            dispatch({ FETCHING_HOTELS_FAILURE, payload: err })
        })
}