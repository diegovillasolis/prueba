import React from 'react';
import { Select } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';
import { fetchWeather } from '../utils/api';

class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      value: '',
      selectedCity: '',
      cities: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('./assets/city.list.json')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        const cities = JSON.parse(res);
        this.setState({
          cities: cities.filter(e => e.country == 'BO').map(e => ({key:e.id, value:e.name, text:e.name}))
        });
      }).catch((error) => {
        console.log(error);
      });
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
        <Dropdown placeholder='City...' search selection options={this.state.cities}  onChange={this.handleChange}  value={this.state.value} />
      </div>
    );    
  }
}

export default Search