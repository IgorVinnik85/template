import css from '../Layout/Layout.module.css';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <div className={css.wrapper}>
          <span className={css.spanWrapper}>Created by </span>
          <a
            target="blank"
            href="https://www.linkedin.com/in/igor-vinnik-371208273/"
          >
            Igor Vinnik
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
