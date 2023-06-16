import css from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className={css.bodyWrap}>
        <div className={css.message}>
          <h2>Please</h2>
          <Link to="/login" className={css.link}>
            LogIn
          </Link>
        </div>
        <div className={css.signUp}>
          <h3>Don't have an account?</h3>
          <Link to="/register" className={css.link}>
            SignUp
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
