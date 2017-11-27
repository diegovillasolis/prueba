import React from 'react';

class WeatherItem extends React.Component{
  render() {
    return (
    <div className="WeatherItem">
      <h1>Temperatura Actual: {(this.props.currentWeather.main.temp).toFixed(2)} °C</h1>
    </div>
    )
  }
}

export default WeatherItem;