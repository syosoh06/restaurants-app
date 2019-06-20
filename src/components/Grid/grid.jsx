import React from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import PropTypes from "prop-types";

export default function Grid(props) {
    const {columnDefs, rowData} = props;

    return (<div className="ag-theme-balham-dark ag-grid-container">
        <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            deltaRowDataMode
            getRowNodeId={(data) => data.id}
        >
        </AgGridReact>
    </div>);
}

Grid.defaultProps = {
    columnDefs: [],
    rowData: []
};
Grid.propTypes = {
    columnDefs: PropTypes.array,
    rowData: PropTypes.array
};


