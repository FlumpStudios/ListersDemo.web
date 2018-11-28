/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import ManufacturerFilters from './ManufacturerFilters';
import ColourFilters from './ColourFilters';

const apiUrl = 'http://localhost:18299/api/v1.0/';

let _filters = {
  manufacturer: {
    ford: true,
    kia: true,
    porche: true,
    ferrari: true,
    fiat: true,
    nissan: true,
    vauxhall: true,
  },
  colour: {
    red: true,
    blue: true,
    silver: true,
    white: true,
    yellow: true,
    black: true,
    orange: true,
  },
};

const styles = {
  table: {
    width: '100%',
  },
  columns: {
    width: '10%',
    cursor: 'pointer',
  },
  delete: {
    cursor: 'pointer',
  },
};

class VehicleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleDetails: [
        {
          id: null,
          registration: null,
          manufacturer: null,
          model: null,
          derivativeOrVariant: null,
          exteriorColour: null,
          currentMileage: 0,
          retailPrice: 0,
        },
      ],
      requestData: {
        searchValue: null,
        reverseResults: false,
        sortBy: null,
      },
      filters: _filters,
    };
  }
  componentDidMount() {
    this.getlistdata();
  }

  getlistdata() {
    axios
      .get(apiUrl + 'vehicles', {
        params: {
          sortBy: this.state.requestData.SortBy,
          reverseResults: this.state.requestData.ReverseResults,
          searchValue: this.state.requestData.SearchValue,
          filtersJson: JSON.stringify(this.state.filters),
        },
        withCredentials: true,
      })
      .then(response => {
        this.setState({
          vehicleDetails: response.data,
        });
      });
  }

  handleDelete(id) {
    console.log(id);
    if (confirm('Are your sure you would like to delete item?') === true) {
      axios({
        method: 'delete',
        url: apiUrl + 'vehicles/' + id,
        withCredentials: true,
      }).then(this.getlistdata.bind(this));
    }
  }

  handleSearchChange(event) {
    this.setState({
      requestData: {
        SearchValue: event.target.value,
        ReverseResults: this.state.requestData.ReverseResults,
        SortBy: this.state.requestData.SortBy,
      },
    });
  }

  handleManufacturerFilterClick(event) {
    if (_filters.manufacturer[event.target.value]) {
      _filters.manufacturer[event.target.value] = false;
    } else {
      _filters.manufacturer[event.target.value] = true;
    }
    this.setState({ filters: _filters });
    this.getlistdata();
  }

  handleColourFilterClick(event) {
    if (_filters.colour[event.target.value]) {
      _filters.colour[event.target.value] = false;
    } else {
      _filters.colour[event.target.value] = true;
    }
    this.setState({ filters: _filters });
    this.getlistdata();
  }

  handleColourFilterClick(event) {
    if (_filters.colour[event.target.value]) {
      _filters.colour[event.target.value] = false;
    } else {
      _filters.colour[event.target.value] = true;
    }
    this.setState({ filters: _filters });
    this.getlistdata();
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      if (this.state.requestData.SearchValue === null) return;
      this.getlistdata();
    }
  };

  handleSortClick(event) {
    this.setState(
      {
        requestData: {
          SearchValue: this.state.requestData.SearchValue,
          ReverseResults: (this.state.requestData.ReverseResults = !this.state
            .requestData.ReverseResults),
          SortBy: event,
        },
      },
      () => {
        this.getlistdata();
      }
    );
  }
  render() {
    //TODO: Move into smaller componets...ran out of time :(
    const tableContent = (
      <table style={styles.table}>
        <thead>
          <tr style={styles.columns}>
            <th onClick={this.handleSortClick.bind(this, 'id')}>id</th>
            <th onClick={this.handleSortClick.bind(this, 'registration')}>
              Registration
            </th>
            <th onClick={this.handleSortClick.bind(this, 'manufacturer')}>
              Manufacturer
            </th>
            <th onClick={this.handleSortClick.bind(this, 'model')}>Model</th>
            <th
              onClick={this.handleSortClick.bind(this, 'derivativeOrVariant')}
            >
              Derivative
            </th>
            <th onClick={this.handleSortClick.bind(this, 'currentMileage')}>
              Milage
            </th>
            <th onClick={this.handleSortClick.bind(this, 'retailPrice')}>
              Retail price
            </th>
            <th onClick={this.handleSortClick.bind(this, 'exteriorColour')}>
              Exterior colour
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.state.vehicleDetails.map(item => (
            <tr key={item.key}>
              <td>{item.id}</td>
              <td>{item.registration}</td>
              <td>{item.manufacturer}</td>
              <td>{item.model}</td>
              <td>{item.derivativeOrVariant}</td>
              <td>{item.currentMileage}</td>
              <td>{item.retailPrice}</td>
              <td>{item.exteriorColour}</td>
              <td
                style={styles.delete}
                onClick={this.handleDelete.bind(this, item.id)}
              >
                [Delete Record]
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    return (
      <React.Fragment>
        <ManufacturerFilters
          filters={this.state.filters}
          onChange={this.handleManufacturerFilterClick.bind(this)}
        />

        <ColourFilters
          filters={this.state.filters}
          onChange={this.handleColourFilterClick.bind(this)}
        />

        <SearchBar
          value={this.state.requestData.SearchValue}
          onChange={this.handleSearchChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />

        {tableContent}
      </React.Fragment>
    );
  }
}

export default VehicleTable;
