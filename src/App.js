import React, { Component } from 'react';
import {fetchWeather, fetchForecast } from './utils/api';
import Search from './components/Search';
import WeatherItem from './components/WeatherItem';
import { Container } from 'semantic-ui-react';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      weather: null,
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

  handleChange(city){
    this.getWeather(city);  
  }

  render() {
    if(this.state.weather)    
    return (
      <Container textAlign='center'>
        <div className="App" ref="myRef">
          <Search onChange={(city) => this.handleChange(city)} />
          <WeatherItem currentWeather={this.state.weather} />          
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
