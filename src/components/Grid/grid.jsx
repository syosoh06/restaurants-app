import React from "react";
import ReactDataGrid from "react-data-grid";

export default function Grid(props) {
    const {columns, rows} = props;

    return (<ReactDataGrid
        columns={columns}
        rowGetter={i => rows[i]}
        rowsCount={rows.length}
    />);
}


