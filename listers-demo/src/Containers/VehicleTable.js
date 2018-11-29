/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import VehicleForm from '../Components/VehicleForm';
import ManufacturerFilters from './ManufacturerFilters';
import ColourFilters from './ColourFilters';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const apiUrl = 'http://localhost:18299/api/v1.0/';

let _postObject = {
  id: null,
  registration: null,
  manufacturer: 'Ford',
  model: null,
  derivativeOrVariant: null,
  exteriorColour: 'Red',
  currentMileage: 0,
  retailPrice: 0,
};

let _filters = {
  manufacturer: {
    ford: true,
    kia: true,
    porche: true,
    ferrari: true,
    fiat: true,
    nissan: true,
    vauxhall: true,
    allMan: false,
  },
  colour: {
    red: true,
    blue: true,
    silver: true,
    white: true,
    yellow: true,
    black: true,
    orange: true,
    allColors: false,
  },
};

const styles = {
  drawerButton: {
    position: 'absolute',
    top: '15px',
    right: '30px',
    color: 'white',
  },
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
      postObject: _postObject,
      right: false,
      bottom: false,
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

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

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

  setAllColorFilters(x) {
    _filters.colour = {
      red: x,
      blue: x,
      silver: x,
      white: x,
      yellow: x,
      black: x,
      orange: x,
      allColors: x,
    };
  }

  setAllManufacturerFilters(x) {
    _filters.manufacturer = {
      ford: x,
      kia: x,
      porche: x,
      ferrari: x,
      fiat: x,
      nissan: x,
      vauxhall: x,
      allMan: x,
    };
  }

  handleAddNewVehicle() {
    console.log(_postObject);

    axios({
      method: 'post',
      url: apiUrl + 'vehicles',
      withCredentials: true,
      data: _postObject,
    })
      .then(() => {
        this.getlistdata();
        this.toggleDrawer('bottom', false);
      })
      .catch(() => {
        alert('Something went wrong posting your new vehicle!');
      });
  }

  handlePostTextChange(prop) {
    console.log(prop.target);
    _postObject[prop.target.name] = prop.target.value;

    //_postObject[prop] = event.target.value;
    this.setState({ postObject: _postObject });
  }

  handleManufacturerFilterClick(event) {
    if (event.target.value == 'allMan') {
      this.setAllManufacturerFilters(this.state.filters.manufacturer.allMan);
    }
    if (_filters.manufacturer[event.target.value]) {
      _filters.manufacturer[event.target.value] = false;
    } else {
      _filters.manufacturer[event.target.value] = true;
    }
    this.setState({ filters: _filters });
    this.getlistdata();
  }

  handleColourFilterClick(event) {
    if (event.target.value == 'allColors') {
      this.setAllColorFilters(this.state.filters.colour.allColors);
    }

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
      <Paper>
        <Table style={styles.table}>
          <TableHead>
            <TableRow style={styles.columns}>
              <TableCell
                onClick={this.handleSortClick.bind(this, 'registration')}
              >
                Registration
              </TableCell>
              <TableCell
                onClick={this.handleSortClick.bind(this, 'manufacturer')}
              >
                Manufacturer
              </TableCell>
              <TableCell onClick={this.handleSortClick.bind(this, 'model')}>
                Model
              </TableCell>
              <TableCell
                onClick={this.handleSortClick.bind(this, 'derivativeOrVariant')}
              >
                Derivative
              </TableCell>
              <TableCell
                onClick={this.handleSortClick.bind(this, 'currentMileage')}
              >
                Milage
              </TableCell>
              <TableCell
                onClick={this.handleSortClick.bind(this, 'retailPrice')}
              >
                Retail price
              </TableCell>
              <TableCell
                onClick={this.handleSortClick.bind(this, 'exteriorColour')}
              >
                Exterior colour
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.vehicleDetails.map(item => (
              <TableRow key={item.key}>
                <TableCell>{item.registration}</TableCell>
                <TableCell>{item.manufacturer}</TableCell>
                <TableCell>{item.model}</TableCell>
                <TableCell>{item.derivativeOrVariant}</TableCell>
                <TableCell>{item.currentMileage}</TableCell>
                <TableCell>{item.retailPrice}</TableCell>
                <TableCell>{item.exteriorColour}</TableCell>
                <TableCell
                  style={styles.delete}
                  onClick={this.handleDelete.bind(this, item.id)}
                >
                  [Delete Record]
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );

    return (
      <React.Fragment>
        <SearchBar
          value={this.state.requestData.SearchValue}
          onChange={this.handleSearchChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
        {tableContent}
        <Button
          style={styles.drawerButton}
          onClick={this.toggleDrawer('right', true)}
        >
          Open Filters
        </Button>
        <Button onClick={this.toggleDrawer('bottom', true)}>
          Add new vehicle
        </Button>

        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onKeyDown={this.toggleDrawer('right', false)}
          >
            <ManufacturerFilters
              filters={this.state.filters}
              onChange={this.handleManufacturerFilterClick.bind(this)}
            />

            <ColourFilters
              filters={this.state.filters}
              onChange={this.handleColourFilterClick.bind(this)}
            />
          </div>
        </Drawer>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onKeyDown={this.toggleDrawer('bottom', false)}
          />
          <VehicleForm
            handleTextChange={this.handlePostTextChange.bind(this)}
            values={this.state.postObject}
            onSubmit={this.handleAddNewVehicle.bind(this)}
          />
        </Drawer>
      </React.Fragment>
    );
  }
}

export default VehicleTable;
