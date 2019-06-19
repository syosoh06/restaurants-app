import * as actionTypes from '../../actions/action-types';

const restaurantsReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_RESTAURANTS_BY_NAME_SUCCESS:
            return action.restaurants;
        default:
            return state;
    }
};

export default restaurantsReducer;