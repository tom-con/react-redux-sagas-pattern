import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// import { getWeatherReq as getWeather, deleteWeatherReq as delWeather } from '../actions/weather.actions';
import Page from '../layout/page.presenter';

class WeatherContainer extends Component {
  render() {
    return (
      <Page
        title="Weather"
      >

      </Page>
    );
  }
}

const mapStateToProps = ({ weatherStore }) => {
  return { weatherStore }
}

export default withRouter(connect(mapStateToProps, { })(WeatherContainer));