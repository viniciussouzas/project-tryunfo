import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';

const MIN_LENGTH = 0;
const MAX_POINTS_EACH = 90;
const ATTR_TOTAL = 210;

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: '',
    attr2: '',
    attr3: '',
    imageURL: '',
    rare: '',
    trunfo: false,
    cardsList: [],
    hasTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(({
      [name]: value,
    }));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const newCardToAdd = { ...this.state };

    if (newCardToAdd.trunfo === true) this.state.hasTrunfo = true;

    this.setState((currentState) => ({
      cardsList: [...currentState.cardsList, newCardToAdd],
    }));

    this.setState({
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      imageURL: '',
      rare: 'normal',
      trunfo: false,
    });
  };

  render() {
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      imageURL,
      rare,
      trunfo,
      hasTrunfo,
      cardsList,
    } = this.state;

    const buttonDisabled = (name.length <= MIN_LENGTH)
    || (description.length <= MIN_LENGTH)
    || (imageURL.length <= MIN_LENGTH)
    || (Number(attr1) > MAX_POINTS_EACH || Number(attr1) < MIN_LENGTH)
    || (Number(attr2) > MAX_POINTS_EACH || Number(attr2) < MIN_LENGTH)
    || (Number(attr3) > MAX_POINTS_EACH || Number(attr3) < MIN_LENGTH)
    || Number(attr1) + Number(attr2) + Number(attr3) > ATTR_TOTAL;

    const verifyHasTrunfo = (hasTrunfo === true);

    return (
      <div>
        <h1>Tryunfo</h1>

        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imageURL }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ buttonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ verifyHasTrunfo }
        />

        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imageURL }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
        />

        <h1>Todas as Cartas</h1>
        <CardList cardsList={ cardsList } />
      </div>
    );
  }
}

export default App;
