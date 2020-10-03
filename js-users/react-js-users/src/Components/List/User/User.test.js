import React from "react";
import { mount } from "enzyme";
import User from "./User";

const user = {
    id: 100,
    first_name: "Giorgio",
    last_name: "Perlasca",
    status: "locked",
    created_at: "2014-04-04T02:32:07.719Z",

  };

describe("", () => {
    it("accepts user account props", () => {
      const wrapper = mount(<User user={user} />);
      expect(wrapper.props().user).toEqual(user);
    });

    it("name is equal", () => {
      const wrapper = mount(<User user={user} />);
      const value = wrapper.find("p").text();
      expect(value).toEqual("Giorgio Perlasca");
    });

    it("created at time is right", () => {
        const wrapper = mount(<User user={user} />);
        const value = wrapper.find(".user-created-at").text();
        expect(value).toEqual("Created at Fri Apr 04 2014");
      });
      
  /*   it("user is disabled", () => {
      const wrapper = mount(<User user={user} />);
      expect(wrapper.find('.user-info .locked').length).toEqual(1);
    }); */
  });