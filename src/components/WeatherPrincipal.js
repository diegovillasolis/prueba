import React from 'react';
import { Grid } from 'semantic-ui-react';
import WeatherIcon from './WeatherIcon';

class WeatherPrincipal extends React.Component{
  render(){
    const scale = this.props.scales.temperature.name;
    return (
      <div className="WeatherPrincipal">
        <Grid.Column width={8}>          
          <WeatherIcon id={this.props.data.icon}/>
        </Grid.Column>        
        <Grid.Column width={8}>          
          <h1>{this.props.data.city}</h1>
        </Grid.Column>
        <Grid.Column width={16}>
          <span>
            {`${(this.props.data.temp).toFixed(2)} ${scale}`}
          </span>
        </Grid.Column>
      </div>      
    );
  }
}

export default WeatherPrincipal;
