import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => (
  <>
    <header className={style.header}>
      <nav>
        <h2 className={style.title}>
          <Link to="/" className={style.titleLink}>
            Zhelevska Art
          </Link>
        </h2>
      </nav>
    </header>
  </>
);

export default Header;
