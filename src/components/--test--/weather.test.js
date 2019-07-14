import React from "react";
import Weather from "../Weather";
import { shallow } from "../../enzyme";
import weatherService from "../../services/weatherService";
describe("Weather tests", () => {
  beforeEach(function() {
    let expectedResponse = {
      lbl_updatetime: "Updated on",
      updatetime: "Sat Jul 13 7:15 AM",
      updatetime_stamp_gmt: "1563016500000",
      wxcondition: "Partly cloudy",
      icon: "3",
      inic:
        "iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAMAAADzjKfhAAAAS1BMVEUAAADfqE/i1KyqqqruuFnkrlHCw8bssEjq2on74ZXux3P40XvMzM7Bp330wljh4eL3yGS9qo3p5uLusEbg4eDz8u//7Ib333n62zc3bsJYAAAAFHRSTlMAB/hNPS8UDP7tysWsi4iBdHBlGexLoNwAAAA2SURBVAjXFcrHEcAgDADBE9HZBBH6r5Rh3wtIZHPpcwL17sOUgD/n0dpPvIyqPuDza23YX4AFKzUBiDlmoFoAAAAASUVORK5CYII=",
      temperature: "19",
      feels_like: "19",
      temperature_unit: "C",
      placecode: "CAON0696"
    };

    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedResponse));
  });

  it("renders without crashing", () => {
    let weatherPage = shallow(<Weather />);
  });

  it("Should render weather Image", () => {
    let weatherPage = shallow(<Weather />);
    const image = weatherPage.find("img");
    expect(image).toBeDefined();
  });

  it("calls componentDidMount", () => {
    jest.spyOn(Weather.prototype, "componentDidMount");
    const wrapper = shallow(<Weather />);
    expect(Weather.prototype.componentDidMount.mock.calls.length).toBe(1);
    expect(wrapper.find("table").length).toBe(1);
  });

  // Montreal:
  it("load Weather Data for Montreal", async function() {
    const response = await weatherService().getWeather("Montreal");
    expect(response).toMatchSnapshot();
  });

  // Toronto:
  it("load Weather Data for Toronto", async function() {
    const response = await weatherService().getWeather("Toronto");
    expect(response);
  });
});
