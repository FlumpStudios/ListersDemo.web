import React from 'react';
import FilterBox from '../Components/FilterBox';

class ColourFilters extends React.Component {
  render() {
    const colourFilters = (
      <div>
        <FilterBox
          isChecked={this.props.filters.colour.red}
          id="red"
          onChange={this.props.onChange}
          value="red"
          text="Red"
        />

        <FilterBox
          isChecked={this.props.filters.colour.blue}
          id="blue"
          onChange={this.props.onChange}
          value="blue"
          text="Blue"
        />

        <FilterBox
          isChecked={this.props.filters.colour.silver}
          id="silver"
          onChange={this.props.onChange}
          value="silver"
          text="Silver"
        />

        <FilterBox
          isChecked={this.props.filters.colour.white}
          id="white"
          onChange={this.props.onChange}
          value="white"
          text="White"
        />

        <FilterBox
          isChecked={this.props.filters.colour.yellow}
          id="yellow"
          onChange={this.props.onChange}
          value="yellow"
          text="Yellow"
        />

        <FilterBox
          isChecked={this.props.filters.colour.black}
          id="black"
          onChange={this.props.onChange}
          value="black"
          text="Black"
        />

        <FilterBox
          isChecked={this.props.filters.colour.orange}
          id="orange"
          onChange={this.props.onChange}
          value="orange"
          text="Orange"
        />
      </div>
    );

    return colourFilters;
  }
}

export default ColourFilters;
