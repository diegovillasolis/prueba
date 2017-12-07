import React from 'react';
import WeatherPrincipal from '../components/WeatherPrincipal';
import { Grid } from 'semantic-ui-react';
import WeatherDay from './WeatherDay';

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
        <WeatherDay key={e.dt} data={dayWeather} onClick={(newWeather) => this.handleClick(newWeather)} />
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

export default WeatherWeek;