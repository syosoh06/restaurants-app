import restaurantsReducers from './reducer'
import * as actionTypes from '../../actions/action-types';

describe('restaurants reducer', () => {
    it('should return the initial state', () => {
        expect(restaurantsReducers(undefined, {})).toEqual([])
    });

    it('should handle FETCH_RESTAURANTS_BY_NAME_SUCCESS', () => {
        expect(restaurantsReducers([1,2,3,4], {
            type: actionTypes.FETCH_RESTAURANTS_BY_NAME_SUCCESS,
            restaurants: [4,5,6,7,8]
        })).toEqual([4,5,6,7,8]);
    })
});