import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getWeather } from "../../actions/WeatherActions";

class Landing extends Component {
  constructor() {
    super();

    this.state = {
      weather: {},
      weatherList: []
    };
  }
  componentDidMount() {
    this.props.getWeather();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("weather : ");
    const weather = nextProps.weather;
    console.log(weather.list);
    this.setState({
      weather: weather,
      weatherList: weather.list
    });
  }
  render() {
    const weathers = this.state.weatherList.map((wt, index) => (
      <div key={index} className="row">
        <div className="col-md-12">
          {wt.dt} Date :{wt.dt_txt}
        </div>
      </div>
    ));
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <p className="lead">Begin .</p>
          <div className="container">{weathers}</div>
          <p className="lead">End.</p>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  getWeather: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather.weather
});
export default connect(mapStateToProps, { getWeather })(Landing);
