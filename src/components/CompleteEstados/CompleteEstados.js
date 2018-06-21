import React from 'react';

import Select from 'react-select';
 
class CompleteEstados extends React.Component{

  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Estado: ${selectedOption.label}`);
    }
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        name="form-field-name"
        placeholder="Cidade"
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: 'belohorizonte', label: 'Belo Horizonte' },
          { value: 'belem', label: 'Belém' },
          { value: 'fortaleza', label: 'Fortaleza' },
          { value: 'floripza', label: 'Florianópolis' },
          { value: 'manaus', label: 'Manaus' },
          { value: 'riodejaneiro', label: 'Rio de Janeiro' },
          { value: 'sp', label: 'São Paulo' },
          { value: 'slz', label: 'São Luís' },
        ]}
      />
    );
  }

}

export default CompleteEstados;