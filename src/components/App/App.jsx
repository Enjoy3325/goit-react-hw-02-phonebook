import { nanoid } from 'nanoid';
import React, { Component } from 'react';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);

    // Проп, який передається формі для виклику під час сабміту
    this.props.onSubmit({ ...this.state.name });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
