import React from "react";
import Enzyme, { shallow } from "enzyme";
import Grid from "./Grid";
import { AgGridReact } from 'ag-grid-react';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const columnDefs = [
    { field: "name", headerName: "Name" },
    { field: "address", headerName: "Address" },
    { field: "city", headerName: "City" },
    { field: "price", headerName: "Price" }
];

const rowData = [
    {
       name: 'abc',
       address: 'djljk',
       city: 'jhhjghghkj',
       price: 4800
    }
];

describe("Grid component", () => {
    test("renders correctly and has the neccessary child components", () => {
        const wrapper = shallow(<Grid columnDefs = {columnDefs} rowData = {rowData}/>);

        expect(wrapper.type()).toBe('div');
        expect(wrapper.childAt(0).type()).toBe(AgGridReact);
    });

    test("passes the props correctly to AG Grid", () => {
        const wrapper = shallow(<Grid columnDefs = {columnDefs} rowData = {rowData} />);

        expect(wrapper.childAt(0).props().columnDefs).toBe(columnDefs);
        expect(wrapper.childAt(0).props().rowData).toBe(rowData);
        expect(wrapper.childAt(0).props().deltaRowDataMode).toBe(true)
    });
});