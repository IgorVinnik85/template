// import PropTypes from 'prop-types';
import { ContactsPhonebookItem } from 'components/ContactsPhonebookItem/ContactsPhonebookItem';
import css from './ContactsPhonebook.module.css';

export const ContactsPhonebook = () => {
  return (
    <>
      <h2>Contacts</h2>
      <ul className={css.list}>
        <ContactsPhonebookItem/>
      </ul>
    </>
  );
};

// axelocc1233@gmail.com
