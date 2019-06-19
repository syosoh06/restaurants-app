import { combineReducers } from 'redux';
import restaurantsReducer from './Restaurants/reducer'

export default combineReducers({
    restaurants: restaurantsReducer
});