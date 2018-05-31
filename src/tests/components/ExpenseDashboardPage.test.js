import React from "react";
import {shallow} from "enzyme";
import DashboardPage from "../../components/DashboardPage.jsx";
import toJSON from "enzyme-to-json";


test("Should render DashboardPage",()=>{
    const wrapper = shallow(<DashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});