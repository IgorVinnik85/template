import css from '../App/App.module.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout/Layout';
import {
  PrivatRouteHome,
  PrivatRouteContacts,
} from '../PrivateRoute/PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Registration = lazy(() => import('pages/Registration'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  return (
    <div className={css.wrap}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivatRouteHome>
                <Home />
              </PrivatRouteHome>
            }
          />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route
            path="contacts"
            element={
              <PrivatRouteContacts>
                <Contacts />
              </PrivatRouteContacts>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
