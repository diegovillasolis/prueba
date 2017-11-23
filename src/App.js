import React, { Component } from 'react';
import {fetchWeather} from './utils/api';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: "Cochabamba",
      weather: null
    };
  }

  componentDidMount(){
    this.getWeather();
  }

  getWeather(){
    let searchedCity = this.state.city;
    fetchWeather(searchedCity)
    .then((response) => {
      if (this.refs.myRef) {
        this.setState({
          weather: response,
        });
      }
    });
  }

  render() {
    if(this.state.weather)    
    return (
      <div className="App" ref="myRef">
        <h1>Temperatura Actual: {(this.state.weather.main.temp-273.00).toFixed(2)} °C</h1>
      </div>
    );
    return(
      <div className="App" ref="myRef">
      </div>
    );
  }
}

export default App;