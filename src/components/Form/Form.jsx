import { Component } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter'
import { Forma } from "../Forma/Forma"


export class Form extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

    changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const visiblContacts = this.getVisibleContacts();

    return (
      <>
        <Forma contacts={this.state.contacts}/>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts contacts={visiblContacts} />
      </>
    );
  }
}
