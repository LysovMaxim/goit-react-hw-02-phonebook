import { Component } from 'react';
import { Form } from './Form/Form';

export class App extends Component {

  formSubmitHendler = (data) => {
  console.log(data)
}

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHendler} />
      </>
    );
  }
}
