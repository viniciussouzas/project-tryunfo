import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="cardStyles">
        <h1 data-testid="name-card">
          {cardName}
        </h1>

        <img data-testid="image-card" src={ cardImage } alt={ cardName } />

        <p data-testid="description-card" placeholder="Descrição" className="">
          {cardDescription}
        </p>

        <h4 data-testid="attr1-card">
          {`Attr1: ${cardAttr1}`}
        </h4>

        <h4 data-testid="attr2-card">
          {`Attr2: ${cardAttr2}`}
        </h4>

        <h4 data-testid="attr3-card">
          {`Attr3: ${cardAttr3}`}
        </h4>

        <h5 data-testid="rare-card">
          {`Raridade: ${cardRare}`}
        </h5>

        {
          cardTrunfo === true && <h3 data-testid="trunfo-card">Super Trunfo</h3>
        }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
