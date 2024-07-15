import React from "react";
import { Component } from "react";
import propTypes from 'prop-types';
import styles from './ContactItem.module.css';
class ContactItem extends Component {
    render() {
        const { id, name, number, deleteContact} = this.props;
  return (
    <div>
    
        <li key= {id} className={styles.contactItem}>
              {name} : {number}
                  <button type="submit" onClick={()=> deleteContact(id)} className={styles.deleteBtn}>Delete</button>
        </li>
      
    </div>
  );
    }
}
ContactItem.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
    number: propTypes.number,
    deleteContact: propTypes.func,
}
export default ContactItem;