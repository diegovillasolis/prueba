import React from 'react';
import { Grid, Segment, Table } from 'semantic-ui-react';

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

export default WeatherDetail;
