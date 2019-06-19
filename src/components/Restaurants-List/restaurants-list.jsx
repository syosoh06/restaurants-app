import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from "../Grid/grid";

const columns = [
    { key: "name", name: "Name" },
    { key: "address", name: "Address" },
    { key: "city", name: "City" },
    { key: "price", name: "Price" }
];

function RestaurantsList(props) {
    const [state, setState] = useState({restaurantName: ''});
    const handleChange = (event) => {
        setState({restaurantName: event.target.value});
        props.fetchRestaurantsByName(state.restaurantName);
    };

    return (<div>
        <div>
            <label>
                <span>Enter a City Name:  </span>
                <input type="text" value={state.restaurantName} onChange={handleChange} />
            </label>
        </div>
        <div>
            <Grid
                columns={columns}
                rows={props.restaurants}
            />
        </div>
    </div>);
}

RestaurantsList.defaultProps = {
    restaurants: []
};
RestaurantsList.propTypes = {
    restaurants: PropTypes.array,
    fetchRestaurantsByName: PropTypes.func
};

export default RestaurantsList;
