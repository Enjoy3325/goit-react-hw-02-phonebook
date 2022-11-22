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

  getNewContact = dataValue => {
    if (this.checkContacts(dataValue.name)) {
      return alert(`${dataValue.name} is already in contacts`);
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, dataValue],
      };
    });
    console.log(this.state);
  };

  ChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handlDeleteContacts = contactsId => {
    this.setState({
      contacts: this.state.contacts.filter(element => {
        return element.contactsId !== contactsId;
      }),
    });
  };
  formSubmitHandler = name => {
    console.log('name :>> ', name);
    const newTodo = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      names: [name, ...prevState],
    }));
  };
  filterContact = () => {
    const filterNormalized = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterNormalized);
    });
  };
  render() {
    const { filter } = this.state;
    return (
      <div>
        <section>
          <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.formSubmitHandler} />
          </div>
        </section>
        <section>
          <div>
            <Filter value={filter} onChange={this.ChangeFilter} />
            <h2>Contacts</h2>
            <ListContacts
              contacts={this.filterContact()}
              deleteContact={this.handlDeleteContacts}
            />
          </div>
        </section>
      </div>
    );
  }
}
