import React, { Component } from 'react';
import {fetchWeather} from './utils/api';
import Search from './components/Search';
import WeatherItem from './components/WeatherItem';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      weather: null
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
      console.log(response);
    });
  }

  handleChange(city){
    this.getWeather(city);    
  }

  render() {
    if(this.state.weather)   
    return (
      <div className="App" ref="myRef">
        <Search onChange={(city) => this.handleChange(city)}/>
        <WeatherItem currentWeather={this.state.weather}/>
      </div>
    );    
    return(
      <div className="App" ref="myRef">
      <Search onChange={(city) => this.handleChange(city)}/>
      </div>
    );
  }
}

export default App;
