import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Dropdown } from 'semantic-ui-react';
import { units } from '../../public/assets/common/units';

class Settings extends Component {
  constructor(props){
    super(props);    
    this.handleChangeScaleTemp = this.handleChangeScaleTemp.bind(this);
  }

  handleChangeScaleTemp(e, { value }){
    this.props.onChangeScaleTemp(value);    
  }

  render() {
    const tempOptions = units
      .filter(e => e.name === 'temperature')
      .shift()
      .scale.map(e => {return {text:e.name, value:e.symbol};});

    return (
      <div className="Config">
        <Menu.Item name='Settings'>
          <Menu.Header>Settings</Menu.Header>
          <Dropdown text='Temperature' selection options={tempOptions} className="Settings" onChange={this.handleChangeScaleTemp}/> 
        </Menu.Item>
      </div>
    );
  }
}

export default Settings;
