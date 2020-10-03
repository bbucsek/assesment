import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import Create from "./Create";
import {cleanup} from "@testing-library/react"


Enzyme.configure({ adapter: new Adapter() });

describe("", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Create />);
  });

  afterEach(cleanup)


  it("it renders", () => {
    //console.log(wrapper.debug())
    expect(wrapper).not.toBeNull();
  });

  it("it should have three input field", () => {
    expect(wrapper.find('.MuiFormControl-root').length).toEqual(3);
  });

  
});