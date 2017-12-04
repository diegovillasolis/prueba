import React from 'react';
import { Grid } from 'semantic-ui-react';


class WeatherPrincipal extends React.Component{
  render(){
    return (
      <div className="WeatherPrincipal">
        <Grid.Column width={8}>          
          <span><img src={`http://openweathermap.org/img/w/${this.props.data.icon}.png`}/></span>
        </Grid.Column>        
        <Grid.Column width={8}>          
          <h1>{this.props.data.city}</h1>
        </Grid.Column>
        <Grid.Column width={16}>
          <span>
            {(this.props.data.temp).toFixed(2)} °C
          </span>
        </Grid.Column>
      </div>      
    );
  }
}

export default WeatherPrincipal;
