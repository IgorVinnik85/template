import React from 'react';
import css from '../components/FormPhonebook/FormPhonebook.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { setToken, useLogInMutation } from 'redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Login = () => {
  const [logIn, { isSuccess }] = useLogInMutation();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let emailInputId = nanoid();
  let passwordId = nanoid();
  console.log(isSuccess);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'number') setMail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const userData = {
        email: mail,
        password,
      };

      const response = await logIn(userData).unwrap();
      console.log(response.token);
      dispatch(setToken(response.token));
      navigate('/contacts');

      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
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
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
