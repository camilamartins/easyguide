import React from 'react';

import Select from 'react-select';
// import 'react-select/dist/react-select.css';
 
import ModalPlace from '../ModalPlace';

class AutoComplete extends React.Component{

  state = {
    selectedOption: '',
    modalPlaceVisible: false,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Estou Procurando...: ${selectedOption.label}`);
      this.setState({ modalPlaceVisible: true });
    }
  }
  render() {
    const { selectedOption, modalPlaceVisible } = this.state;

    return (
      <div>
      {modalPlaceVisible &&
      <ModalPlace
        modalVisible={this.state.modalPlaceVisible}
        onClose={() => this.setState({
          modalPlaceVisible: false,
        })}
      />
      }
      <Select
        name="form-field-name"
        value={selectedOption}
        placeholder="Estou procurando..."
        onChange={this.handleChange}
        options={[
          { value: 'alimentacao', label: 'Alimentação' },
          { value: 'cafe', label: 'Café' },
          { value: 'vidaNoturna', label: 'Vida Noturna' },
          { value: 'diversao', label: 'Diversão' },
          { value: 'compras', label: 'Compras' },
          { value: 'cafeManha', label: 'Café da manhã' },
          { value: 'crepe', label: 'Crêpe Bistrô' },
        ]}
      />
      </div>
    );
  }

}

export default AutoComplete;