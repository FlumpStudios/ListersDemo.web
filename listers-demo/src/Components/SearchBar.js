import React from 'react';

class SearchBar extends React.Component {
  render() {
    const s = (
      <div>
        <label htmlFor="search-bar">Search </label>
        <input
          id="search-bar"
          type="text"
          value={this.props.value}
          onKeyPress={this.props.onKeyPress}
          onChange={this.props.onChange}
        />
      </div>
    );
    return s;
  }
}

export default SearchBar;
