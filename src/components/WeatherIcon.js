import React from 'react';

class WeatherIcon extends React.Component{
  render(){
    return(
      <div className="WeatherIcon">
        <span><img src={`./public/assets/images/${this.props.id}.png`} /></span>       
      </div>
    );
  }
}

export default WeatherIcon;
