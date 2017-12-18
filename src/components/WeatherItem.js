import React from 'react';
import { Grid } from 'semantic-ui-react';
import WeatherDetail from './WeatherDetail';
import WeatherPrincipal from './WeatherPrincipal';
import PropTypes from 'prop-types';

class WeatherItem extends React.Component{
  render() {
        
    const detailedWeather = {
      tempMax: this.props.weather.main.temp_max,
      tempMin: this.props.weather.main.temp_min,
      pressure: this.props.weather.main.pressure,
      humidity: this.props.weather.main.humidity,
      weatherType: this.props.weather.weather[0].description,
      description: this.props.weather.weather[0].main,
    };
    
    const principalWeather = {
      icon: this.props.weather.weather[0].icon,
      city: this.props.weather.name,
      temp: this.props.weather.main.temp,
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

WeatherItem.propTypes = {
  weather: PropTypes.shape({
    coord: PropTypes.shape({
      lon: PropTypes.number,
      lat: PropTypes.number
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        main: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
    base: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number,
      pressure: PropTypes.number,
      humidity: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      deg: PropTypes.number,
    }),
    clouds: PropTypes.shape({
      all: PropTypes.number,
    }),
    rain: PropTypes.shape({
      '3h': PropTypes.number,
    }),
    dt: PropTypes.number,
    sys: PropTypes.shape({
      type: PropTypes.number,
      id: PropTypes.number,      
      message: PropTypes.number,
      country: PropTypes.string,
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
    }),    
    id: PropTypes.number,
    name: PropTypes.string,
    cod: PropTypes.number,
  })
};

export default WeatherItem;
