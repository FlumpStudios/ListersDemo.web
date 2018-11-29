import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

const manufacturerOptions = [
  {
    value: 'Ford',
    label: 'Ford',
  },
  {
    value: 'Kia',
    label: 'Kia',
  },
  {
    value: 'Porche',
    label: 'Porche',
  },
  {
    value: 'Ferrari',
    label: 'Ferrari',
  },
  {
    value: 'Fiat',
    label: 'Fiat',
  },
  {
    value: 'Nissan',
    label: 'Nissan',
  },
  {
    value: 'Vauxhall',
    label: 'Vauxhall',
  },
];

const colorOptions = [
  {
    value: 'Red',
    label: 'Red',
  },
  {
    value: 'Blue',
    label: 'Blue',
  },
  {
    value: 'Silver',
    label: 'Silver',
  },
  {
    value: 'White',
    label: 'White',
  },
  {
    value: 'Yellow',
    label: 'Yellow',
  },
  {
    value: 'Black',
    label: 'Black',
  },
  {
    value: 'Orange',
    label: 'Orange',
  },
];

class VehicleForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <FormControl fullWidth>
            <TextField
              label="Registration"
              name="registration"
              onChange={this.props.handleTextChange}
              value={this.props.values.registration}
              required
            />

            <TextField
              select
              label="Manufacturer"
              name="manufacturer"
              onChange={this.props.handleTextChange}
              value={this.props.values.manufacturer}
              onChange={this.props.handleTextChange}
              required={true}
              InputProps={{
                startAdornment: <InputAdornment position="start" />,
              }}
            >
              {manufacturerOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Model"
              name="model"
              required
              onChange={this.props.handleTextChange}
              value={this.props.values.model}
            />
            <TextField
              label="Derivative"
              name="derivativeOrVariant"
              onChange={this.props.handleTextChange}
              value={this.props.values.derivativeOrVariant}
            />
            <TextField
              label="Milage"
              name="currentMileage"
              type="number"
              onChange={this.props.handleTextChange}
              value={this.props.values.currentMileage}
            />
            <TextField
              label="Price"
              name="retailPrice"
              type="number"
              onChange={this.props.handleTextChange}
              value={this.props.values.retailPrice}
            />
            <TextField
              select
              label="Color"
              name="exteriorColour"
              required={true}
              onChange={this.props.handleTextChange}
              value={this.props.values.exteriorColour}
              InputProps={{
                startAdornment: <InputAdornment position="start" />,
              }}
            >
              {colorOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(VehicleForm);
