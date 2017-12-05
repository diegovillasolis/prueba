import React, { Component } from 'react';
import {fetchWeather, fetchForecast } from './utils/api';
import Search from './components/Search';
import WeatherItem from './components/WeatherItem';
import { Container } from 'semantic-ui-react';
import WeatherList from './components/WeatherList';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      weather: null,
      forecast: null
    };
  }

  getWeather(city){
    fetchWeather(city)
    .then((response) => {
      if (this.refs.myRef) {
        this.setState({
          weather: response,
        });
      }
    });
  }

  getForecast(city){
    fetchForecast(city)
    .then((response) => {
      if (this.refs.myRef) {
        this.setState({
          forecast: response,
        });
      }
    });  
  }

  handleChange(city){
    this.getWeather(city);
    this.getForecast(city);    
  }

  render() {
    if(this.state.weather && this.state.forecast)    
    return (
      <Container textAlign='center'>
        <div className="App" ref="myRef">
          <Search onChange={(city) => this.handleChange(city)} />
          <WeatherItem currentWeather={this.state.weather} /> 
          <WeatherList city={this.state.weather.name} forecast={this.state.forecast}/>         
        </div>
      </Container>
    );    
    return(
      <Container textAlign='center'>
        <div className="App" ref="myRef">
          <Search onChange={(city) => this.handleChange(city)} />
        </div>
      </Container>
    );
  }
}

export default App;
