import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';

const Header = () => (
  <>
    <header className={style.header}>
      <nav>
        <h2 className={style.title}>
          <Link to="/contacts" className={style.titleLink}>
            Contact me..
          </Link>
        </h2>
      </nav>
    </header>
  </>
);

export default Header;
