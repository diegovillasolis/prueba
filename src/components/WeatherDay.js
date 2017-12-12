import React from 'react';
import { Grid } from 'semantic-ui-react';

class WeatherDay extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onClick(this.props.data.date);    
  }

  render(){
    const weatherDay = this.props.data;
    const weekDay = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday');
    return (
      <div className="WeatherDay" onClick={this.handleClick}>
        {weekDay[(new Date(weatherDay.date*1000)).getDay()]}
        <Grid.Column width={16}>          
          <span><img src={`http://openweathermap.org/img/w/${weatherDay.icon}.png`}/></span>
        </Grid.Column>
        <Grid.Column width={8}>
            {weatherDay.tempMax} °C
        </Grid.Column>
        <Grid.Column width={8}>
            {weatherDay.tempMin} °C        
        </Grid.Column>
      </div>
    );
  }
}

export default WeatherDay;
