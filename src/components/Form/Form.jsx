import { Component } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  hendleSubmit = event => {
    event.preventDefault();
    this.state.contacts.push({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.props.onSubmit(this.state);

    this.reset();
  };

  hendleNameTelChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };



  reset = () => {
    this.setState({ name: '', number: '' });
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
        <h2>Phonebook</h2>
        <form onSubmit={this.hendleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.hendleNameTelChange}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.hendleNameTelChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts contacts={visiblContacts} />
      </>
    );
  }
}
