import { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cardsList } = { ...this.props };

    return (
      cardsList.map((card) => (
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
      ))
    );
  }
}

export default CardList;
