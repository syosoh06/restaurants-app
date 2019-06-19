import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import RestaurantsList from './components/Restaurants-List/restaurants-list.connector';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
    test("renders correctly and has the neccessary child components", () => {
        const wrapper = shallow(<App />);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.type()).toBe('div');
        expect(wrapper.childAt(0).type()).toBe(RestaurantsList);
    });
});