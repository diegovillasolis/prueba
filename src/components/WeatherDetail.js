import React from 'react';
import { Grid, Segment, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class WeatherDetail extends React.Component{
  render(){
    const scale = this.props.scales.temperature.name;
    return (
      <div className="WheatherDetail">
        <Grid.Column width={16}>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>Weather Details</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Maximum temperature</Table.Cell>
                <Table.Cell>{`${(this.props.data.tempMax).toFixed(2)} ${scale}`}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Minimun temperature</Table.Cell>
                <Table.Cell>{`${(this.props.data.tempMin).toFixed(2)} ${scale}`}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Preasure</Table.Cell>
                <Table.Cell>{this.props.data.pressure}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Humidity</Table.Cell>
                <Table.Cell>{this.props.data.humidity} %</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Description</Table.Cell>
                <Table.Cell>{this.props.data.description}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </div>      
    );
  }
}

WeatherDetail.propTypes = {
  data: PropTypes.shape({
    tempMax: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    weatherType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  scales: PropTypes.shape({
    temperature: PropTypes.shape({
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default WeatherDetail;
