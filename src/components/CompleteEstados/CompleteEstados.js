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
        placeholder="Estados..."
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: 'manaus', label: 'Manaus' },
          { value: 'riodejaneiro', label: 'Rio de Janeiro' },
        ]}
      />
    );
  }

}

export default CompleteEstados;