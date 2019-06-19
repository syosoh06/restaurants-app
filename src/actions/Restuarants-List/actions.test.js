import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from './actions';
import * as actionTypes from '../action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const restaurantsData = {
        restaurants: [1,2,3,4]
};

describe('fetchRestaurantsByName actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates FETCH_RESTAURANTS_BY_NAME_SUCCESS after successfuly fetching restaurants', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: restaurantsData,
            });
        });

        const expectedActions = [
            { type: actionTypes.FETCH_RESTAURANTS_BY_NAME_SUCCESS, restaurants: restaurantsData.restaurants },
        ];

        const store = mockStore({ restaurants: [] });

        return store.dispatch(actions.fetchRestaurantsByName()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});