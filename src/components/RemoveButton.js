import { Component } from 'react';
import PropTypes from 'prop-types';

class RemoveButton extends Component {
  render() {
    const { removeCard, indexOfCard } = this.props;

    return (
      <button
        data-testid="delete-button"
        onClick={ () => removeCard(indexOfCard) }
      >
        Excluir
      </button>
    );
  }
}

RemoveButton.propTypes = {
  removeCard: PropTypes.func.isRequired,
  indexOfCard: PropTypes.number.isRequired,
};

export default RemoveButton;
