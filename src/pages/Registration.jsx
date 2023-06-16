import css from "../components/FormPhonebook/FormPhonebook.module.css";
import { nanoid } from "nanoid";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "redux/authSlice";

const Registration = () => {
  const navigate = useNavigate();
  const [registrate] = useRegisterMutation();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  let userNameInputId = nanoid();
  let emailInputId = nanoid();
  let passwordId = nanoid();

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "name") setName(value);
    if (name === "number") setMail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = {
        name,
        email: mail,
        password,
      };

      const response = await registrate(userData).unwrap();
      navigate("/login");

      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form} htmlFor={userNameInputId}>
        User Name
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={userNameInputId}
        />
      </label>
      <label className={css.form} htmlFor={emailInputId}>
        Email
        <input
          type="email"
          value={mail}
          onChange={handleInputChange}
          name="number"
          //   pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          //   title="Please enter a valid email address"
          required
          id={emailInputId}
        />
      </label>

      <label className={css.form} htmlFor={passwordId}>
        Password
        <input
          type="password"
          value={password}
          onChange={handleInputChange}
          name="password"
          //   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          //   title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
          required
          id={passwordId}
        />
      </label>

      <button className={css.btn} type="submit">
        Registrate
      </button>
    </form>
  );
};

export default Registration;
