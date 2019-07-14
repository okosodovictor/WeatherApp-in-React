import React from "react";
import weatherService from "../services/weatherService";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: {}, city: "" };
  }

  render() {
    const {
      updatetime,
      wxcondition,
      feels_like,
      temperature,
      temperature_unit,
      icon
    } = this.state.weather;
    return (
      <div className="container">
        <h2>City Weather</h2>
        <table className="table table-striped table-hover table-bordered">
          <tbody>
            <tr>
              <td>
                <strong>City Name</strong>
              </td>
              <td>{this.state.city}</td>
            </tr>
            <tr>
              <td>
                <strong> Condition</strong>
              </td>
              <td>
                {wxcondition}
                {icon && (
                  <img
                    src={
                      "https://s1.twnmm.com/images/en_ca/icons/wxicons_medium/" +
                      icon +
                      ".png"
                    }
                    alt=""
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Temperature</strong>
              </td>
              <td>
                {temperature}
                <span />{" "}
                {temperature_unit === "C" ? (
                  <span>&#x2103;</span>
                ) : (
                  <span>&#x2109;</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Feels like</strong>
              </td>
              <td>
                {feels_like}{" "}
                {temperature_unit === "C" ? (
                  <span>&#x2103;</span>
                ) : (
                  <span>&#x2109;</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Temperature Unit</strong>
              </td>
              <td>{temperature_unit}</td>
            </tr>
            <tr>
              <td>
                <strong>Date last updated time:</strong>
              </td>
              <td>{updatetime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  async loadWeatherData(city) {
    try {
      let response = await weatherService().getWeather(city);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    let city = this.props.match.params.city;
    let data = await this.loadWeatherData(city);
    this.setState({ weather: data, city: city });
  }

  async componentWillReceiveProps(nextProps) {
    let nextCity = nextProps.match.params.city;
    if (nextCity !== this.props.match.params.city) {
      let newData = await this.loadWeatherData(nextCity);
      this.setState({ weather: newData, city: nextCity });
    }
  }
}

export default Weather;
