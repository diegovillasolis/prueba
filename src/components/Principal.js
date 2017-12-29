import React, { Component } from 'react';
import {fetchWeather, fetchForecast } from '../utils/api';
import Search from './Search';
import WeatherItem from './WeatherItem';
import { Container } from 'semantic-ui-react';
import WeatherWeek from './WeatherWeek';
import math from 'mathjs';

class Principal extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      weather: null,
      forecast: null,
    };
  }

  getData(city){
    Promise
      .all([fetchWeather(city), fetchForecast(city)])
      .then(values => {
        this.setState({
          weather: values[0],
          forecast: values[1]
        });
      })
      .catch(
        reason => { 
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

  componentWillReceiveProps(nextProps){
    const currentScale = this.props.scales.temperature.symbol;    
    const targetScale = nextProps.scales.temperature.symbol;
    
    if (currentScale !== targetScale && this.state.weather) {
      const currentTemp = this.state.weather.main.temp;
      const currentTempMin = this.state.weather.main.temp_min;
      const currentTempMax = this.state.weather.main.temp_max;

      this.setState((prevState) => {
        return {
          weather: {
            ...prevState.weather,            
            main: {
              ...prevState.weather.main,
              temp: math.unit(currentTemp, currentScale).toNumber(targetScale),
              temp_min: math.unit(currentTempMin, currentScale).toNumber(targetScale),
              temp_max: math.unit(currentTempMax, currentScale).toNumber(targetScale)
            }
          }
        };
      });
    }    
  }

  render() {
    let weatherItem = null, weatherWeek = null;
    if(this.state.weather && this.state.forecast){
      weatherItem = <WeatherItem weather={this.state.weather} scales={this.props.scales} />;
      weatherWeek = <WeatherWeek forecast={this.state.forecast} onClick={this.handleClick} />
    }    
    return(
      <div className="Principal">
        <Container textAlign='center'>
          <div className="App" ref="myRef">
            <Search onChange={this.handleChange} />
            {weatherItem}
            {weatherWeek}
          </div>
        </Container>
      </div>
    );    
  }
}

export default Principal;