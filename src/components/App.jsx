import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
// import { nanoid } from 'nanoid';
import Contacts from './Phonebook/Contacts/Contacts';

export class App extends Component {
  // id = nanoid();

  state = {
    contacts: [],
    name: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Phonebook
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Contacts contacts={this.state} />
      </div>
    );
  }
}
