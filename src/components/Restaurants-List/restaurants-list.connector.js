import { connect } from 'react-redux';

import RestaurantsList from './restaurants-list';
import * as restaurantActions from '../../actions/Restuarants-List/actions';

export const mapStateToProps = (state) => ({
    restaurants: state.restaurants
});

export const mapDispatchToProps = dispatch => ({
    fetchRestaurantsByName: restaurantName => dispatch(restaurantActions.fetchRestaurantsByName(restaurantName))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RestaurantsList);
