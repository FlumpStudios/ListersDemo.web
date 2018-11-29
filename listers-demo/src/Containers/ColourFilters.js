import React from 'react';
import FilterBox from '../Components/FilterBox';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

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

class ColourFilters extends React.Component {
  render() {
    const colourFilters = (
      <React.Fragment>
        <div style={styles.container}>
          <InputLabel>Colour Filters</InputLabel>
          <div style={styles.innerContainer}>
            <table style={styles.table}>
              <tbody>
                <tr>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.colour.red}
                      id="red"
                      onChange={this.props.onChange}
                      value="red"
                      text="Red"
                    />
                  </td>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.colour.blue}
                      id="blue"
                      onChange={this.props.onChange}
                      value="blue"
                      text="Blue"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.colour.silver}
                      id="silver"
                      onChange={this.props.onChange}
                      value="silver"
                      text="Silver"
                    />
                  </td>

                  <td>
                    <FilterBox
                      isChecked={this.props.filters.colour.white}
                      id="white"
                      onChange={this.props.onChange}
                      value="white"
                      text="White"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.colour.yellow}
                      id="yellow"
                      onChange={this.props.onChange}
                      value="yellow"
                      text="Yellow"
                    />
                  </td>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.colour.black}
                      id="black"
                      onChange={this.props.onChange}
                      value="black"
                      text="Black"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.colour.orange}
                      id="orange"
                      onChange={this.props.onChange}
                      value="orange"
                      text="Orange"
                    />
                  </td>
                  <td>
                    <FilterBox
                      isChecked={this.props.filters.colour.allColors}
                      id="allColors"
                      onChange={this.props.onChange}
                      value="allColors"
                      hideBox={true}
                      text={
                        this.props.filters.colour.allColors
                          ? 'Select All'
                          : 'Deselect All'
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );

    return colourFilters;
  }
}

export default ColourFilters;
