import ContactItem from './ContactItem';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
class ContactList extends Component {
    render() {
        const { contacts, deleteContact } = this.props;
        return (
            <>
                <ul>
                {contacts.map(contact =>
                    <ContactItem
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                        key={nanoid()}
                        deleteContact={deleteContact}
                    >

                    </ContactItem>)}
            </ul>
            </>
            
        );    
}
}
ContactList.propTypes = {
    contacts: propTypes.array,
    deleteContact: propTypes.func,
}
export default ContactList;