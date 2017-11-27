import React from 'react';
import { Select } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';
import { fetchWeather } from '../utils/api';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.cityOptions = [
      { key: 'CB', value: 'Cochabamba', text: 'Cochabamba' },
      { key: 'SB', value: 'Sacaba', text: 'Sacaba' },
      { key: 'AR', value: 'Arani', text: 'Arani' },
      { key: 'CR', value: 'Carrasco', text: 'Carrasco' },
      { key: 'CP', value: 'Capinota', text: 'Capinota' },
      { key: 'MZ', value: 'Mizque', text: 'Mizque' },
      { key: 'PN', value: 'Punata', text: 'Punata' },
    ];
    this.state = {value: ""};
  }

  handleChange(e, { value }){
    this.setState({
      value
    });
    this.props.onChange(value);    
  }
  
  render(){
    return (
      <div className="Search">
        <Dropdown placeholder='City...' search selection options={this.cityOptions}  onChange={this.handleChange}  value={this.state.value} />
      </div>
    );    
  }
}

export default Search