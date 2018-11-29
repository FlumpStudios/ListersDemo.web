import React from 'react';
import FilterBox from '../Components/FilterBox';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';

const styles = {
  table: {
    width: '100%',
  },
  columns: {
    width: '50%',
  },
  container: {
    width: '400px',
    margin: '9px',
    padding: '5px',
  },
  innerContainer: {
    borderStyle: 'outset',
  },
};

class ManufacturerFilters extends React.Component {
  state = {};
  render() {
    const manufacturerFilters = (
      <React.Fragment>
        <div style={styles.container}>
          <InputLabel>Manufacturer Filters</InputLabel>
          <div style={styles.innerContainer}>
            <table style={styles.table}>
              <tbody>
                <tr>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.manufacturer.ford}
                      id="ford"
                      onChange={this.props.onChange}
                      value="ford"
                      text="Ford"
                    />
                  </td>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.manufacturer.kia}
                      id="kia"
                      onChange={this.props.onChange}
                      value="kia"
                      text="kia"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.manufacturer.porche}
                      id="porche"
                      onChange={this.props.onChange}
                      value="porche"
                      text="Porche"
                    />
                  </td>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.manufacturer.ferrari}
                      id="ferrari"
                      onChange={this.props.onChange}
                      value="ferrari"
                      text="Ferrari"
                    />
                  </td>
                </tr>
                <tr>
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
                </tr>
                <tr>
                  <FilterBox
                    isChecked={this.props.filters.manufacturer.vauxhall}
                    id="vauxhall"
                    onChange={this.props.onChange}
                    value="vauxhall"
                    text="Vauxhall"
                  />

                  <FilterBox
                    isChecked={this.props.filters.manufacturer.allMan}
                    id="allMan"
                    onChange={this.props.onChange}
                    value="allMan"
                    hideBox={true}
                    text={
                      this.props.filters.manufacturer.allMan
                        ? 'Select All'
                        : 'Deselect All'
                    }
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );

    return manufacturerFilters;
  }
}

export default ManufacturerFilters;
