import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form className="cardForm">
        <label>
          <input
            type="text"
            name="name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            placeholder="Nome da Carta"
          />
        </label>

        <label>
          <input
            type="textarea"
            name="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            placeholder="Descrição"
          />
        </label>

        <label>
          <input
            type="number"
            name="attr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            placeholder="Atributo 1"
          />
        </label>

        <label>
          <input
            type="number"
            name="attr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            placeholder="Atributo 2"
          />
        </label>

        <label>
          <input
            type="number"
            name="attr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            placeholder="Atributo 3"
          />
        </label>

        <label>
          <input
            type="text"
            name="imageURL"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="Insira URL da Imagem"
          />
        </label>

        <label>
          Raridade:
          <select
            name="rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        {
          hasTrunfo === true ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
            type="checkbox"
            name="trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        }
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
