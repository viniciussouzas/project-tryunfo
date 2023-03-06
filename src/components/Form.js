import { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="cardForm">
        <label>
          <input type="text" data-testid="name-input" name="cardName" />
        </label>

        <label>
          <input type="textarea" data-testid="description-input" name="cardDescription" />
        </label>

        <label>
          <input type="number" data-testid="attr1-input" name="attr1" />
        </label>

        <label>
          <input type="number" data-testid="attr2-input" name="attr2" />
        </label>

        <label>
          <input type="number" data-testid="attr3-input" name="attr3" />
        </label>

        <label>
          <input type="text" data-testid="image-input" name="imageURL" />
        </label>

        <label>
          <select data-testid="rare-input" name="selectRare">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label>
          <input type="checkbox" data-testid="trunfo-input" name="superTrunfo" />
        </label>

        <button data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
