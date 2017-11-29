import React from 'react';
import { Grid } from 'semantic-ui-react';

class WeatherPrincipal extends React.Component{
  render(){
    return (
      <div className="WeatherPrincipal">
        <Grid.Column width={16}>
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
