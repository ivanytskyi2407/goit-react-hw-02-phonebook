import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import Contacts from './Phonebook/Contacts/Contacts';

export class App extends Component {
  static id = nanoid();
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };
  render() {
    return (
      <div>
        <Phonebook />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
