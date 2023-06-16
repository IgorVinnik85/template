import css from '../ContactsPhonebook/ContactsPhonebook.module.css';
import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getFilter, getToken } from 'redux/selectors';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contactsSlice';

export const ContactsPhonebookItem = () => {
  const token = useSelector(getToken);
  const { data: contacts, isLoading } = useGetContactsQuery(token);
  const [deleteContact] = useDeleteContactsMutation();

  const filter = useSelector(getFilter);
  const filteredContacts = () =>
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  const handleDelete = async id => {
    try {
      await deleteContact({ id, token });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading && (
        <div className={css.spinner}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
      {contacts &&
        filteredContacts()?.map(el => {
          return (
            <li className={css.item} key={el.id}>
              <span> {el.name}</span>
              <span> {el.number}</span>
              <button
                className={css.btn}
                type="button"
                onClick={() => handleDelete(el.id)}
              >
                delete
              </button>
            </li>
          );
        })}
    </>
  );
};
