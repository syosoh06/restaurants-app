import * as actionTypes from '../action-types';
import Axios from 'axios';

const apiUrl = 'https://opentable.herokuapp.com/api/restaurants';

const fetchRestaurantsByNameSuccess = (restaurants) => {
    return {
        type: actionTypes.FETCH_RESTAURANTS_BY_NAME_SUCCESS,
        restaurants
    }
};

export const fetchRestaurantsByName = (restaurantName) => {
    return (dispatch) => {
        return Axios.get(apiUrl, {
            params: {
                city: restaurantName,
                per_page: 100
            }
        }).then(response => {
                dispatch(fetchRestaurantsByNameSuccess(response.data.restaurants ? response.data.restaurants : []));
            })
            .catch(error => {
                throw(error);
            });
    };
};
