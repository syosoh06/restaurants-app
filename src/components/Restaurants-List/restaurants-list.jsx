import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from "../Grid/grid";

const columnDefs = [
    { field: "name", headerName: "Name" },
    { field: "address", headerName: "Address" },
    { field: "city", headerName: "City" },
    { field: "price", headerName: "Price" }
];

function RestaurantsList(props) {
    const [state, setState] = useState({restaurantName: ''});
    const handleChange = (event) => {
        setState({restaurantName: event.target.value});

        if(state.restaurantName.length) {
            props.fetchRestaurantsByName(state.restaurantName);
        }
    };
    const displayNoResultsWell = () => (state.restaurantName && !props.restaurants.length) ?
          (<div className=" well well-lg ">
              No Results Found
          </div>) : null;

    return (<div>
        <div>
            <form className = "search-form">
                <div className="input-group">
                    <input type="text"
                           value={state.restaurantName}
                           onChange={handleChange}
                           className="form-control"
                           placeholder="Enter a city name" />
                </div>
            </form>
        </div>
        {
            props.restaurants.length && state.restaurantName.length ? (<div>
            <Grid
                columnDefs={columnDefs}
                rowData={props.restaurants}
            />
        </div>) : displayNoResultsWell()
        }
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
