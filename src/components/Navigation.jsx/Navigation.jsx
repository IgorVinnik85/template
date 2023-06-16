import css from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setToken, useLogOutMutation } from 'redux/authSlice';
import { getToken } from 'redux/selectors';

const Navigation = () => {
  const token = useSelector(getToken);
  const [logOut] = useLogOutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(token);

  const onHandleLogOut = async () => {
    try {
      const response = await logOut(token).unwrap();
      // console.log(response.token);
      dispatch(setToken(''));
      navigate('/');

      console.log('Logout successful:', response);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <div className={css.authWrapper}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <div className={css.navWrapper}>
        {!token && (
          <>
            <NavLink className={css.link} to="/register">
              Registration
            </NavLink>
            <NavLink className={css.link} to="/login">
              LogIn
            </NavLink>
          </>
        )}

        {token && (
          <NavLink className={css.link} to="/" onClick={onHandleLogOut}>
            LogOut
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navigation;
