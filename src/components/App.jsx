import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Forma } from './Forma/Forma';
import { nanoid } from 'nanoid';

export class App extends Component {
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

  addContacts = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(pravState => {
      return { contacts: [contact, ...pravState.contacts] };
    });
  };

  deleteContact = (contactId) => {
    this.setState(prevState =>({contacts: prevState.contacts.filter(contact => contact.id !== contactId)})
      
    )
  };

  render() {
    const visiblContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Forma onSubmit={this.addContacts} arr={this.state.contacts} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visiblContacts}
          onDeleteContacts={this.deleteContact}
        />
      </div>
    );
  }
}
