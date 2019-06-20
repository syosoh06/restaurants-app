import React from "react";
import Enzyme, { shallow } from "enzyme";
import RestaurantsList from "./restaurants-list";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const restaurants = [
    {
        name: 'abc',
        address: 'djljk',
        city: 'jhhjghghkj',
        price: 4800
    }
];

describe("RestaurantsList component", () => {
    test("renders correctly and has the neccessary child components", () => {
        const wrapper = shallow(<RestaurantsList restaurants = {restaurants}/>);

        expect(wrapper.type()).toBe('div');
        expect(wrapper.childAt(0).type()).toBe('div');
        expect(wrapper.childAt(0).childAt(0).type()).toBe('form');
    });
});