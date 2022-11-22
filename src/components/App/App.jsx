import { nanoid } from 'nanoid';
import React, { Component } from 'react';
const inputsContact = { name: '', number: '' };
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    inputsContact,
  };
  handleChange = e => {
    this.setState({ inputsContact: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state.inputsContact}`);

    this.props.onSubmit({ ...this.state.inputsContact });
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };
  render() {
    const { name, number, filter } = this.state;

    return (
      <div>
        <section>
          <div>
            <h2>Phonebook</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name
                <input
                  id={nanoid()}
                  type="text"
                  name={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Number
                <input
                  id={nanoid()}
                  type="tel"
                  name={number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={this.handleChange}
                />
              </label>

              <button type="submit">Add contact</button>
            </form>
          </div>
        </section>
        <section>
          <div>
            <h2>Contacts</h2>
            <input
              id={nanoid()}
              type="text"
              value={filter}
              onChange={this.handleChange}
            />
            <ul>
              <li>
                <p>Rosie Simpson</p>
              </li>
              <li>
                <p>Hermione Kline</p>
              </li>
              <li>
                <p>Eden Clements</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
