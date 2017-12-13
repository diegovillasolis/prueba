import React from 'react';
import { Grid } from 'semantic-ui-react';
import WeatherIcon from './WeatherIcon';
import PropTypes from 'prop-types';

class WeatherPrincipal extends React.Component{
  render(){
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
            {(this.props.data.temp).toFixed(2)} °C
          </span>
        </Grid.Column>
      </div>      
    );
  }
}

WeatherPrincipal.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string,
    city: PropTypes.string,
    temp: PropTypes.number
  })
};

export default WeatherPrincipal;
