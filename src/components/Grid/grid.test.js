import React from "react";
import Enzyme, { shallow } from "enzyme";
import Grid from "./Grid";
import ReactDataGrid from "react-data-grid";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockColumns = [
    { key: "name", name: "Name" },
    { key: "address", name: "Address" },
    { key: "city", name: "City" },
    { key: "price", name: "Price" }
];

const mockRows = [
    {
       name: 'abc',
       address: 'djljk',
       city: 'jhhjghghkj',
       price: 4800
    }
];

describe("Grid component", () => {
    test("renders correctly and has the neccessary child components", () => {
        const wrapper = shallow(<Grid columns = {mockColumns} rows = {mockRows}/>);

        expect(wrapper.type()).toBe(ReactDataGrid);
    });

    test("passes the props correctly to React Data Grid", () => {
        const wrapper = shallow(<Grid columns = {mockColumns} rows = {mockRows} />);

        expect(wrapper.props().columns).toBe(mockColumns);
        expect(wrapper.props().rowsCount).toBe(mockRows.length);
    });
});