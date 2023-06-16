import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/selectors";
import { fillterContacts } from "redux/contactsSlice";

export const FindContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onInput = (event) => {
    console.log(event.target.value);
    dispatch(fillterContacts(event.target.value));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        placeholder="Enter find name"
        value={filter}
        onChange={onInput}
      />
    </div>
  );
};
