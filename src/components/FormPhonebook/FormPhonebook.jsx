import { useSelector } from 'react-redux';
import { useState } from 'react';
import css from './FormPhonebook.module.css';
import { nanoid } from 'nanoid';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import { getToken } from 'redux/selectors';

export const FormPhonebook = () => {
  const token = useSelector(getToken);
  const { data: contacts } = useGetContactsQuery(token);
  const [addContact] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let nameInputId = nanoid();
  let numberInputId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    if (contacts.find(element => element.name === name.value)) {
      alert(`${name.value} is alredy in contacts`);
      return;
    }
    try {
      await addContact({
        contactData: {
          name: name.value,
          number: number.value,
          id: nanoid(),
        },
        token,
      });
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.form} htmlFor={nameInputId}>
          Name
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameInputId}
          />
        </label>
        <label className={css.form} htmlFor={numberInputId}>
          Number
          <input
            type="tel"
            value={number}
            onChange={handleInputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={numberInputId}
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
