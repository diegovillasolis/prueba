import React, { Component } from 'react';
import {fetchWeather, fetchForecast } from './utils/api';
import Search from './components/Search';
import WeatherItem from './components/WeatherItem';
import { Container } from 'semantic-ui-react';
import WeatherWeek from './components/WeatherWeek';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      weather: null,
      forecast: null
    };
  }

  getData(city){
    Promise.all([fetchWeather(city), fetchForecast(city)]).then(values => {
      this.setState({
        weather: values[0],
        forecast: values[1]
      });
    }).catch(reason => { 
      console.log(reason);
    });
  }

  handleChange(city){
    this.getData(city);   
  }

  handleClick(newWeather){
    this.setState({
      weather: newWeather
    });
  }

  render() {
    if(this.state.weather && this.state.forecast)    
    return (
      <Container textAlign='center'>
        <div className="App" ref="myRef">
          <Search onChange={(city) => this.handleChange(city)} />
          <WeatherItem currentWeather={this.state.weather} /> 
          <WeatherWeek forecast={this.state.forecast} onClick={this.handleClick}/>         
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
