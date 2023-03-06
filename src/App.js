import React from 'react';
import Card from './components/Card';
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
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(({
      [name]: value,
    }));
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
    } = this.state;

    const buttonDisabled = (name.length <= MIN_LENGTH)
    || (description.length <= MIN_LENGTH)
    || (imageURL.length <= MIN_LENGTH)
    || (Number(attr1) > MAX_POINTS_EACH || Number(attr1) < MIN_LENGTH)
    || (Number(attr2) > MAX_POINTS_EACH || Number(attr2) < MIN_LENGTH)
    || (Number(attr3) > MAX_POINTS_EACH || Number(attr3) < MIN_LENGTH)
    || Number(attr1) + Number(attr2) + Number(attr3) > ATTR_TOTAL;

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
      </div>
    );
  }
}

export default App;
