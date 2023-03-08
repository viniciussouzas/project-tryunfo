import { Component } from 'react';
import PropTypes from 'prop-types';

class FilterName extends Component {
  render() {
    const { inputSearch, searchByName } = this.props;

    return (
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Nome da carta"
        value={ inputSearch }
        onChange={ searchByName }
      />
    );
  }
}

FilterName.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  searchByName: PropTypes.func.isRequired,
};

export default FilterName;
