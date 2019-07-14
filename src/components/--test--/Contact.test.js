import React from "react";
import Contact from "../Contact";
import { shallow } from "../../enzyme";
describe("Contact tests", () => {
  let mountedContact;
  it("renders without crashing", () => {
    mountedContact = shallow(<Contact />);
  });

  it("should contain button", () => {
    mountedContact = shallow(<Contact />);
    const button = mountedContact.find("button");
    expect(button.length).toBe(1);
  });
});
