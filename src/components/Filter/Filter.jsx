import { Component } from "react";
import styles from './Filter.module.css';
import propTypes from 'prop-types';
class Filter extends Component {
  
  render() {
    const { handleFilterChange, filter } = this.props;
  return (
    <div>
      <label className={styles.labelFilter}>
        Find Contacts by Name
        <br />
        <input type="text" onChange={handleFilterChange} value={filter}/>
      </label>
    </div>
  );
}    
}
Filter.propTypes = {
  handleFilterChange: propTypes.func,
  filter: propTypes.string,
}
export default Filter;