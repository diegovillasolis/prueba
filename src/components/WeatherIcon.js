import React from 'react';
import PropTypes from 'prop-types';

class WeatherIcon extends React.Component{
  render(){
    return(
      <div className="WeatherIcon">
        <span><img src={`./public/assets/images/${this.props.id}.png`} /></span>       
      </div>
    );
  }
}

WeatherIcon.propTypes = {
  id: PropTypes.string.isRequired
};

export default WeatherIcon;
