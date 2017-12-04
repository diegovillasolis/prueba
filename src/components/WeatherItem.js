import React from 'react';
import { Grid } from 'semantic-ui-react';
import WeatherDetail from './WeatherDetail';
import WeatherPrincipal from './WeatherPrincipal';

class WeatherItem extends React.Component{
  render() {
        
    const detailedWeather = {
      tempMax: this.props.currentWeather.main.temp_max,
      tempMin: this.props.currentWeather.main.temp_min,
      pressure: this.props.currentWeather.main.pressure,
      humidity: this.props.currentWeather.main.humidity,
      weatherType: this.props.currentWeather.weather[0].description,
      description: this.props.currentWeather.weather[0].main,
    };
    
    const principalWeather = {
      city: this.props.currentWeather.name,
      temp: this.props.currentWeather.main.temp,
      icon: this.props.currentWeather.weather[0].icon
    };

    return (
      <div className="WeatherItem">
        <Grid centered>
          <Grid.Row>
            <WeatherPrincipal data={principalWeather} />
          </Grid.Row>
          <Grid.Row>
            <WeatherDetail data={detailedWeather} />
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default WeatherItem;
