import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/FilterCards.css';

class FilterCards extends Component {
  render() {
    const { inputSearchName, searchByName,
      inputSearchSelect, searchByRare,
      inputSearchTrunfo, searchByTrunfo } = this.props;

    return (
      <div className="filterInputs">
        <label>
          <input
            type="text"
            data-testid="name-filter"
            placeholder="Nome da carta"
            value={ inputSearchName }
            onChange={ searchByName }
            disabled={ inputSearchTrunfo }
          />
        </label>

        <label>
          <h5>Raridade da Carta - </h5>
          <select
            data-testid="rare-filter"
            value={ inputSearchSelect }
            onChange={ searchByRare }
            disabled={ inputSearchTrunfo }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label>
          <h5>Super Trunfo - </h5>
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ searchByTrunfo }
            checked={ inputSearchTrunfo }
          />
        </label>
      </div>
    );
  }
}

FilterCards.propTypes = {
  inputSearchName: PropTypes.string.isRequired,
  searchByName: PropTypes.func.isRequired,
  inputSearchSelect: PropTypes.string.isRequired,
  searchByRare: PropTypes.func.isRequired,
  inputSearchTrunfo: PropTypes.bool.isRequired,
  searchByTrunfo: PropTypes.func.isRequired,
};

export default FilterCards;
