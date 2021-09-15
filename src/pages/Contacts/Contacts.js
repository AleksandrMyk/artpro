import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import style from './Contacts.module.css';
import classNames from 'classnames';

const Contacts = () => (
  <>
    <section className={style.secContacts}>
      <Header />
      <div className={style.boxContacts}>
        <Link
          to={{ pathname: 'tel:+380986516565' }}
          title="mobile"
          target="blank"
          className={style.linkContacts}
        >
          +380.93.43.333.27
        </Link>

        <Link
          to={{ pathname: 'https://goo.gl/maps/WQsXaaPYMexxeFMS8' }}
          title="city"
          target="blank"
          className={style.cityContacts}
        >
          50°27′ 30°31′
        </Link>
        <Link
          to={{ pathname: 'mailto:zhelevska.art@gmail.com' }}
          title="mail"
          target="blank"
          className={style.mailContacts}
        >
          zhelevska.art@gmail.com
        </Link>
      </div>
      <footer className={style.footer}>
        <ul className={style.social}>
          <li className={style.linkBox}>
            <Link
              to={{ pathname: 'https://www.facebook.com/zhelevskaia}' }}
              title="facebook"
              target="blank"
              className={style.socialLink}
            >
              <div className={classNames(style.fb, style.icons)}></div>
            </Link>
          </li>
          <li className={style.linkBox}>
            <Link
              to={{ pathname: 'https://www.instagram.com/zhenyazhelevskaya/' }}
              title="instagram"
              target="blank"
              className={style.socialLink}
            >
              <div className={classNames(style.instagram, style.icons)}></div>
            </Link>
          </li>
          <li className={style.linkBox}>
            <Link
              to={{ pathname: 'https://www.pinterest.com/zhelevskaabstract/' }}
              title="pinterest"
              target="blank"
              className={style.socialLink}
            >
              <div className={classNames(style.pinterest, style.icons)}></div>
            </Link>
          </li>
          <li className={style.linkBox}>
            <Link
              to={{ pathname: 'whatsapp://send?phone=+380934333327' }}
              title="whatsapp"
              target="blank"
              className={style.socialLink}
            >
              <div className={classNames(style.whatsapp, style.icons)}></div>
            </Link>
          </li>
          <li className={style.linkBox}>
            <Link
              to={{ pathname: 'tg://resolve?domain=+380934333327' }}
              title="telegram"
              target="blank"
              className={style.socialLink}
            >
              <div className={classNames(style.telegram, style.icons)}></div>
            </Link>
          </li>
        </ul>
      </footer>
    </section>
  </>
);

export default Contacts;
