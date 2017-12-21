import React, { Component } from 'react';
import {fetchWeather, fetchForecast } from './utils/api';
import Search from './components/Search';
import WeatherItem from './components/WeatherItem';
import { Container } from 'semantic-ui-react';
import WeatherWeek from './components/WeatherWeek';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import Principal from './components/Principal';
import Settings from './components/Settings';

class App extends Component {
  constructor(props){
    super(props);        
    this.handleChangeScaleTemp = this.handleChangeScaleTemp.bind(this);
    this.state = {    
      scales: {
        temperature:'degC',
      }     
    };
  }

  handleChangeScaleTemp(value){
    if (value !== this.state.scales.temperature)
      this.setState((prevState) => {
        return {
          scales: {
            temperature: value
          }
        };
      });    
  }

  render() {
    const scales = this.state.scales;
    console.log(scales);
    return (      
      <div className="Principal" style={{height: '100vh'}}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='wide' visible={true} icon='labeled' vertical inverted>
            <Settings 
              onChangeScaleTemp={this.handleChangeScaleTemp} 
            />            
          </Sidebar>
          <Sidebar.Pusher>
            <Principal scales={scales}/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
