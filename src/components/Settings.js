import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Dropdown } from 'semantic-ui-react';
import units from '../../public/assets/common/units';
import PropTypes from 'prop-types';

class Settings extends Component {
  constructor(props){
    super(props);    
    this.handleChangeScaleTemp = this.handleChangeScaleTemp.bind(this);
  }

  handleChangeScaleTemp(e, { value, options }){
    let text = options.find(e => e.value === value).text;
    this.props.onChangeScaleTemp(value, text);    
  }

  render() {
    const tempOptions = units
      .temperature
      .map(e => {return {text:e.name, value:e.symbol};});

    return (
      <div className="Settings">
        <Menu.Item name='Settings'>
          <Menu.Header>Settings</Menu.Header>
          <Dropdown selection options={tempOptions} onChange={this.handleChangeScaleTemp} compact placeholder='°C'  /> 
        </Menu.Item>
      </div>
    );
  }
}

Settings.propTypes = {
  onChangeScaleTemp: PropTypes.func.isRequired
}

export default Settings;
