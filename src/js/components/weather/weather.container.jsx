import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { getWeatherReq as getWeather } from '../../actions/weather.actions';
import Page from '../layout/page.presenter';
import WeatherInput from '../common/input.presenter';
import { WeatherList } from './weatherList.presenter';

class WeatherContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getWeather(this.state.inputText);
    this.setState({ inputText: '' })
  }

  renderLoading() {
    const { showLoading, loadingMessage } = this.props;
    if(showLoading){
      return (
        <div>{loadingMessage}</div>
      )
    }
  }

  render() {
    return (
      <Page
        title="Weather"
      >
        <WeatherInput
          buttonText="Get Weather for City"
          inputText={this.state.inputText}
          handleChange={text => this.setState({ inputText: text })}
          handleSubmit={this.handleSubmit}
        />
        {this.renderLoading()}
        <WeatherList 
          cities={this.props.cities}
        /> 
      </Page>
    );
  }
}

const mapStateToProps = ({ weatherStore }) => {
  const { cities } = weatherStore
  const { showLoading, loadingMessage } = weatherStore;
  return { cities, showLoading, loadingMessage }
}

export default withRouter(connect(mapStateToProps, { getWeather })(WeatherContainer));