import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
class FilterBox extends React.Component {
  render() {
    return (
      <td>
        <Checkbox
          style={
            this.props.hideBox
              ? { display: 'none' }
              : { display: 'inlineBlock' }
          }
          checked={this.props.isChecked}
          id={this.props.id}
          onChange={this.props.onChange}
          value={this.props.value}
        />

        <InputLabel style={{ cursor: 'pointer' }} htmlFor={this.props.id}>
          {this.props.text}
        </InputLabel>
      </td>
    );
  }
}

export default FilterBox;
