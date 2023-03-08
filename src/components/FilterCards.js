import { Component } from 'react';
import PropTypes from 'prop-types';

class FilterCards extends Component {
  render() {
    const { inputSearchName, searchByName, inputSearchSelect, searchByRare } = this.props;

    return (
      <>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Nome da carta"
          value={ inputSearchName }
          onChange={ searchByName }
        />

        <select
          data-testid="rare-filter"
          value={ inputSearchSelect }
          onChange={ searchByRare }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </>
    );
  }
}

FilterCards.propTypes = {
  inputSearchName: PropTypes.string.isRequired,
  searchByName: PropTypes.func.isRequired,
  inputSearchSelect: PropTypes.string.isRequired,
  searchByRare: PropTypes.func.isRequired,
};

export default FilterCards;
