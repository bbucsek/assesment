import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import Navbar from "./Navbar";
import {cleanup} from "@testing-library/react"

Enzyme.configure({ adapter: new Adapter() });

describe("", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Navbar />);
  });

  afterEach(cleanup)

  it("it renders", () => {
    //console.log(wrapper.debug())
    expect(wrapper).not.toBeNull();
  });

  
});