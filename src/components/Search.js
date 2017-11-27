import React from 'react';
import { Select } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { fetchWeather } from '../utils/api';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    console.log(e.target.value);
    const newValue = e.target.value;
    this.props.onChange(newValue);    
  }
  
  render(){
    return (
      <div className="Search">
        <Input list='cities' placeholder='Choose a city...' onChange={this.handleChange} />
        <datalist id='cities'>
          <option value='Cochabamba' />
          <option value='Sacaba' />
          <option value='Quillacollo' />
          <option value='Arani' />
          <option value='Arque' />
          <option value='Ayopaya' />
          <option value='Bolivar' />
          <option value='Carrasco' />
          <option value='Capinota' />
          <option value='Campero' />
          <option value='Cercado' />
          <option value='Chapare' />
          <option value='Mizque' />
          <option value='Punata' />
          <option value='Tiraque' />
        </datalist>
      </div>
    );    
  }
}

export default Search