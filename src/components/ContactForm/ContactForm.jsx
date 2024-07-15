import { Component } from "react";
import propTypes from 'prop-types';
import styles from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleContact = ev => {
    ev.preventDefault();
    this.props.handleNewContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit= {this.handleContact} className={styles.form}>
        <label className={styles.label}>
          {' '}
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange = {this.handleChange}
            // pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={styles.label}>
          {' '}
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button type="submit" className={styles.addbtn}>Add Contacts</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  handleNewContact: propTypes.func,
};
export default ContactForm;