import React from 'react';
import styles from '../contactForm/form.module.css';
import { filteredItems } from '../redux/contacts/actions';
import { connect } from 'react-redux';

function Filter({ filteredItems, items }) {
  const getValue = ({ target: { value } }) => {
    const filterItems = (myArr, myValue) => {
      return myArr.filter(item =>
        item.name.toLowerCase().includes(myValue.toLowerCase()),
      );
    };
    const resultArr = filterItems(items, value);
    filteredItems(resultArr);
  };

  return (
    <div className={styles.formSection}>
      <label className={styles.label}>
        Find contacts by name
        <input
          onChange={getValue}
          type="text"
          className={styles.input}
          name="filter"
          placeholder="Enter name"
        />
      </label>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = {
  filteredItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
