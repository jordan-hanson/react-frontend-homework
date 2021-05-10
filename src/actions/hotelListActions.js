import axios from 'axios';

export const FETCHING_HOTELS = 'FETCHING_HOTELS';
export const FETCHING_HOTELS_SUCCESS = 'FETCHING_HOTELS_SUCCESS';
export const FETCHING_HOTELS_FAILURE = 'FETCHING_HOTELS_FAILURE';
export const FILTERED_HOTEL_LIST = "FILTERED_HOTEL_LIST";

export const getHotels = () => dispatch => {
    dispatch({ type: FETCHING_HOTELS })

    axios
        .get('http://localhost:8080/rest/rates')
        .then(res => {
            console.log(res.data.results.hotels)
            dispatch({ type: FETCHING_HOTELS_SUCCESS, payload: res.data.results })
        })
        .catch(err => {
            dispatch({ FETCHING_HOTELS_FAILURE, payload: err })
        })
}

export const filteredHotels = (hotelArray, searchInput, selectedField) => dispatch => {
    console.log("hotellistaction")
    console.log(hotelArray)
    console.log(searchInput)
    console.log(selectedField)
    const newHotels = hotelArray.filter(h => h.hotelStaticContent.name.includes(searchInput));
    if (selectedField == "recommended") {
        dispatch({ type: FILTERED_HOTEL_LIST, payload: newHotels })
    }
    if (selectedField == "low-to-high") {
        const ascending = newHotels.sort(function (a, b) {
            return a.lowestAveragePrice.amount - b.lowestAveragePrice.amount
        })
        dispatch({ type: FILTERED_HOTEL_LIST, payload: ascending })
    }
    if (selectedField == "high-to-low") {
        const descending = newHotels.sort(function (a, b) {
            return b.lowestAveragePrice.amount - a.lowestAveragePrice.amount
        })
        console.log(descending)
        dispatch({ type: FILTERED_HOTEL_LIST, payload: descending })
    }
}