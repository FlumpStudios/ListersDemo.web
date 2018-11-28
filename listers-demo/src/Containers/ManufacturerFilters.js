import React from 'react';
import FilterBox from '../Components/FilterBox';

class ManufacturerFilters extends React.Component {
  state = {};
  render() {
    const manufacturerFilters = (
      <div>
        <FilterBox
          isChecked={this.props.filters.manufacturer.ford}
          id="ford"
          onChange={this.props.onChange}
          value="ford"
          text="Ford"
        />

        <FilterBox
          isChecked={this.props.filters.manufacturer.kia}
          id="kia"
          onChange={this.props.onChange}
          value="kia"
          text="kia"
        />

        <FilterBox
          isChecked={this.props.filters.manufacturer.porche}
          id="porche"
          onChange={this.props.onChange}
          value="porche"
          text="Porche"
        />

        <FilterBox
          isChecked={this.props.filters.manufacturer.ferrari}
          id="ferrari"
          onChange={this.props.onChange}
          value="ferrari"
          text="Ferrari"
        />

        <FilterBox
          isChecked={this.props.filters.manufacturer.fiat}
          id="fiat"
          onChange={this.props.onChange}
          value="fiat"
          text="Fiat"
        />

        <FilterBox
          isChecked={this.props.filters.manufacturer.nissan}
          id="nissan"
          onChange={this.props.onChange}
          value="nissan"
          text="Nissan"
        />

        <FilterBox
          isChecked={this.props.filters.manufacturer.vauxhall}
          id="vauxhall"
          onChange={this.props.onChange}
          value="vauxhall"
          text="Vauxhall"
        />
      </div>
    );

    return manufacturerFilters;
  }
}

export default ManufacturerFilters;
