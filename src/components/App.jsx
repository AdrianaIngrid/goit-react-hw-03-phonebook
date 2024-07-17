import React from 'react';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import styles from './ContactForm/ContactForm.module.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
        { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
        { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
        { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  // Aici incarcam contactele prima oara cand se da mount la aplicație
  componentDidMount() {
    console.log('ContactList mounted');
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);
    if (parsedContacts) {
      
      this.setState({ storedContacts: parsedContacts });
 
    }
  }
  // Aici salvam contactele cand se face update la ele
  componentDidUpdate(prevProps) {
    if (prevProps.contacts !== this.state.contacts) {
      console.log('ContactList updated');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleNewContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.some(
      i => i.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };
  handleFilterChange = ev => {
    this.setState({ filter: ev.target.value });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm handleNewContact={this.handleNewContact}></ContactForm>

        <h2 className={styles.titleContact}>Contacts</h2>
        <Filter
          handleFilterChange={this.handleFilterChange}
          filter={filter}
        ></Filter>
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}

export default App;
