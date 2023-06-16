import { Navigate } from 'react-router-dom';

const { useSelector } = require('react-redux');

export const PrivatRouteContacts = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.token);
  // console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const PrivatRouteHome = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.token);
  // console.log(isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }
  return children;
};
