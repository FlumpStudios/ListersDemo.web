import React from 'react';

class FilterBox extends React.Component {
  render() {
    return (
      <td>
        <input
          type="checkBox"
          checked={this.props.isChecked}
          id={this.props.id}
          onChange={this.props.onChange}
          value={this.props.value}
        />

        <label htmlFor={this.props.id}>{this.props.text}</label>
      </td>
    );
  }
}

export default FilterBox;
