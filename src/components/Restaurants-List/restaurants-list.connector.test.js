import {mapStateToProps} from "./restaurants-list.connector";

const initialState = {
    restaurants: [1,2,3,4]
};

describe('Restuarant List connected component', function () {
    it('should restaurants from state', function () {
        expect(mapStateToProps(initialState).restaurants).toEqual([1,2,3,4]);
    });
});