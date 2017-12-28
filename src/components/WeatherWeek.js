import React from 'react';
import WeatherPrincipal from '../components/WeatherPrincipal';
import { Grid } from 'semantic-ui-react';
import WeatherDay from './WeatherDay';
import PropTypes from 'prop-types';

class WeatherWeek extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(date){
    const weatherList = this.props.forecast.list;
    let newWeather = weatherList.filter(e => date===e.dt).shift();
    newWeather.name = this.props.forecast.city.name;
    this.props.onClick(newWeather);
  }

  render(){    
    const list = this.props.forecast.list;
    const day1 = new Date(list[0].dt*1000);
    const hour1 = day1.getHours();

    const weatherDayList = list.filter(e => {
      return (new Date(e.dt * 1000)).getHours() === hour1;
    }).map(e => {
      const dayWeather = {
        date: e.dt,
        tempMin: e.main.temp_min,
        tempMax: e.main.temp_max,
        icon: e.weather[0].icon
      };
      return (
        <WeatherDay key={e.dt} data={dayWeather} onClick={this.handleClick} />
      );
    });

    return(
      <div className="WeatherList">
        <Grid centered>
          <Grid.Row>
            {weatherDayList}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

WeatherWeek.propTypes = {
  forecast: PropTypes.shape({
    city: PropTypes.shape({
      id: PropTypes.number, 
      name: PropTypes.string
    }),
    coord: PropTypes.shape({ 
      lon: PropTypes.number,
      lat: PropTypes.number
    }),
    country: PropTypes.string,
    cod: PropTypes.string,
    message: PropTypes.number,
    cnt: PropTypes.number,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        dt: PropTypes.number,
        main: PropTypes.shape({
          temp: PropTypes.number,
          temp_min: PropTypes.number,
          temp_max: PropTypes.number,
          pressure: PropTypes.number,
          sea_level: PropTypes.number,
          grnd_level: PropTypes.number,
          humidity: PropTypes.number,
          temp_kf: PropTypes.number
        }),
        weather: PropTypes.arrayOf(
          PropTypes.shape({ 
            id: PropTypes.number, 
            main: PropTypes.string, 
            description: PropTypes.string, 
            icon: PropTypes.string })
          ),
        clouds: PropTypes.shape({ 
          all: PropTypes.number
        }),
        wind: PropTypes.shape({ 
          speed: PropTypes.number, 
          deg: PropTypes.number 
        }),
        sys: PropTypes.shape({ 
          pod: PropTypes.string 
        }),
        dt_txt: PropTypes.string
      })
    )
  })
};

export default WeatherWeek;
