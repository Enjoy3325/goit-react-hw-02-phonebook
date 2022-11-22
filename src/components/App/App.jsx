import { ListContacts } from '../ListContacts/ListContacts';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  ChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // deleteContacts = contactsId => {};
  formSubmitHandler = data => {
    console.log('data :>> ', data);
  };
  render() {
    const { filter, contacts, id } = this.state;
    const filterNormalized = this.state.filter.toLowerCase();
    const visiableContacts = this.state.contacts.filter(contact =>
      contact.text.toLowerCase().includes(filterNormalized)
    );
    return (
      <div>
        <section>
          <div>
            <h2>Phonebook</h2>
            <ContactForm onSubmit={this.formSubmitHandler} />
          </div>
        </section>
        <section>
          <div>
            <Filter value={filter} onChange={this.ChangeFilter} />
            <h2>Contacts</h2>
            <ListContacts contacts={visiableContacts} />
          </div>
        </section>
      </div>
    );
  }
}
