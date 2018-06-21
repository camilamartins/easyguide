import React from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
 
class AutoComplete extends React.Component{

  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Estou Procurando...: ${selectedOption.label}`);
    }
  }
  render() {
    const { selectedOption } = this.state;

    return (
      
      <Select
        name="form-field-name"
        value={selectedOption}
        placeholder="Estou Procurando..."
        onChange={this.handleChange}
        options={[
          { value: 'alimentacao', label: 'Alimentação' },
          { value: 'cafe', label: 'Café' },
          { value: 'vidaNoturna', label: 'Vida Noturna' },
          { value: 'diversao', label: 'Diversão' },
          { value: 'compras', label: 'Compras' },
          { value: 'cafeManha', label: 'Café da manhã' },
        ]}
      />
    );
  }

}

export default AutoComplete;