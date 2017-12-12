import React from 'react';
import { Select } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';
import { fetchWeather } from '../utils/api';

class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedCity: '',
      cities: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('./assets/city.list.json')
      .then(
        response => response.json()
      ).then(
        cities => this.setState({
          cities: cities
            .filter(e => e.country == 'BO')
            .map(e => ({ key: e.id, value: e.id, text: e.name }))
        })
      ).catch(
        error => console.log(error)
    );
  }

  handleChange(e, { value }){
    this.props.onChange(value);    
  }
  
  render(){
    return (
      <div className="Search">
        <Dropdown placeholder='City...' search selection options={this.state.cities}  onChange={this.handleChange}  />
      </div>
    );    
  }
}

export default Search
