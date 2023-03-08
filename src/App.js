import React from 'react';
import Card from './components/Card';
import FilterCards from './components/FilterCards';
import Form from './components/Form';
import RemoveButton from './components/RemoveButton';
import './styles/App.css';

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
    inputSearchName: '',
    inputSearchSelect: 'todas',
    inputSearchTrunfo: false,
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

  removeCard = (indexOfCard) => {
    this.setState((previousState) => ({
      cardsList: previousState.cardsList.filter((_card, index) => index !== indexOfCard),
    }));

    const { cardsList } = this.state;

    if (cardsList.some((card) => !card.hasTrunfo)) {
      this.setState({
        hasTrunfo: false,
      });
    }
  };

  searchByName = ({ target }) => {
    this.setState({
      inputSearchName: target.value,
    });
  };

  searchByRare = ({ target }) => {
    this.setState({
      inputSearchSelect: target.value,
    });
  };

  searchByTrunfo = ({ target }) => {
    this.setState({
      inputSearchTrunfo: target.checked,
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
      inputSearchName,
      inputSearchSelect,
      inputSearchTrunfo,
    } = this.state;

    const buttonDisabled = (name.length <= MIN_LENGTH)
    || (description.length <= MIN_LENGTH)
    || (imageURL.length <= MIN_LENGTH)
    || (Number(attr1) > MAX_POINTS_EACH || Number(attr1) < MIN_LENGTH)
    || (Number(attr2) > MAX_POINTS_EACH || Number(attr2) < MIN_LENGTH)
    || (Number(attr3) > MAX_POINTS_EACH || Number(attr3) < MIN_LENGTH)
    || Number(attr1) + Number(attr2) + Number(attr3) > ATTR_TOTAL;

    const verifyHasTrunfo = (hasTrunfo === true);

    const filteredByName = cardsList.filter((card) => {
      const nameOfCard = card.name;

      return nameOfCard.toUpperCase().includes(inputSearchName.toUpperCase());
    });

    const filteredByRarityOrTrunfo = filteredByName.filter((card) => {
      const rarityOfCard = card.rare;
      const trunfoCard = card.trunfo;

      if (inputSearchTrunfo) return trunfoCard;

      if (inputSearchSelect === 'todas') return filteredByName;

      return rarityOfCard === inputSearchSelect;
    });

    return (
      <div className="globalApp">
        <h1>Tryunfo</h1>
        <section className="formCardPreview">
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
        </section>

        <section className="cardContainer">
          <hr />
          <h1>Todas as Cartas</h1>
          <div className="filterContainer">
            <p>
              Filtrar por:
            </p>
            <FilterCards
              inputSearchName={ inputSearchName }
              searchByName={ this.searchByName }
              inputSearchSelect={ inputSearchSelect }
              searchByRare={ this.searchByRare }
              inputSearchTrunfo={ inputSearchTrunfo }
              searchByTrunfo={ this.searchByTrunfo }
            />
          </div>

          <div className="cardRendered">
            {filteredByRarityOrTrunfo.map((card, indexOfCard) => (
              <div key={ card.name } className="deckContainer">
                <Card
                  key={ card.name }
                  cardName={ card.name }
                  cardDescription={ card.description }
                  cardAttr1={ card.attr1 }
                  cardAttr2={ card.attr2 }
                  cardAttr3={ card.attr3 }
                  cardImage={ card.imageURL }
                  cardRare={ card.rare }
                  cardTrunfo={ card.trunfo }
                />
                <RemoveButton
                  removeCard={ this.removeCard }
                  indexOfCard={ indexOfCard }
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
