import React, { Component } from 'react';

class Form extends Component {
  componentDidMount() {
    console.log('Esto fue disparado despues del primer render');
  }
  componentWillUnmount() {
    console.log('El componente fue desmontado');
  }
  componentDidUpdate() {
    console.log(this.props.value);
    console.log('el componente se actualizo');
  }
  render() {
    return <p>Formulario</p>
  }
}

export default Form;