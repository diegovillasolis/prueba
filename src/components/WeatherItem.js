import React from 'react';
import { Grid } from 'semantic-ui-react';
import WeatherDetail from './WeatherDetail';
import WeatherPrincipal from './WeatherPrincipal';
import PropTypes from 'prop-types';

class WeatherItem extends React.Component{
  render() {

    const {main: { temp_max: tempMax, temp_min: tempMin, pressure, humidity, temp}, weather: [first], name: city, } = this.props.weather;
    const description = first.description;
    const icon = first.icon;
    const detailedWeather = { tempMax, tempMin, pressure, humidity, description};
    console.log(detailedWeather);

        
    const principalWeather = { icon, city, temp };

    return (
      <div className="WeatherItem">
        <Grid centered>
          <Grid.Row>
            <WeatherPrincipal data={principalWeather} scales={this.props.scales} />
          </Grid.Row>
          <Grid.Row>
            <WeatherDetail data={detailedWeather} scales={this.props.scales} />
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
  }),
  scales: PropTypes.shape({
    temperature: PropTypes.shape({
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default WeatherItem;
