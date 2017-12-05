import React from 'react';
import WeatherPrincipal from '../components/WeatherPrincipal';
import { Grid } from 'semantic-ui-react';

class WeatherList extends React.Component {
  render(){    
    const city = this.props.city;
    const list = this.props.forecast.list;
    const day1 = new Date(list[0].dt);
    const hour1 = day1.getHours();

    
    //console.log(hour1, (new Date(list[8].dt)).getHours());
    const weatherPrincipalList = list.filter( e => {    
      return (new Date(e.dt*1000)).getHours() === hour1;      
    }).map( e => {
        const principalWeather = {
          city: city,
          temp: e.main.temp
        };
        return (
        <WeatherPrincipal key={e.dt} data={principalWeather} />
        );
      });

    console.log(weatherPrincipalList);

    return(
      <div className="WeatherList">
        <Grid centered>
          <Grid.Row>
            {weatherPrincipalList}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default WeatherList;