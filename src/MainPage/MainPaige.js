import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import style from './MainPage.module.css';

class MainPage extends Component {
  render() {
    return (
      <>
        <section className={style.sec}>
          <p className={style.subtitle}>Zhenya Zhelevska</p>

          <header className={style.header}>
            <h2 className={style.mainTitle}>
              <p className={style.title}>my abstract art.</p>
            </h2>
            <nav className={classNames(style.hoverBox, style.shadowpulse)}>
              <Link to="/gallery" className={style.LinkHoverGallery}></Link>
              <Link to="/conditions" className={style.LinkHoverCond}></Link>
              <Link to="/contacts" className={style.LinkHoverContacts}></Link>
            </nav>
          </header>
          <footer>
            <div className={style.followBox}>
              <div className={style.social}>
                <div className={style.linkBox}>
                  <Link
                    to={{
                      pathname: 'https://www.facebook.com/zhelevskaia',
                    }}
                    title="facebook"
                    target="blank"
                    className={style.socialLink}
                  >
                    <div className={classNames(style.fb, style.icons)}></div>
                  </Link>
                </div>
                <div className={style.linkBox}>
                  <Link
                    to={{
                      pathname: 'https://www.instagram.com/zhenyazhelevskaya/',
                    }}
                    title="instagram"
                    target="blank"
                    className={style.socialLink}
                  >
                    <div
                      className={classNames(style.instagram, style.icons)}
                    ></div>
                  </Link>
                </div>
                <div className={style.linkBox}>
                  <Link
                    to={{
                      path: 'https://www.pinterest.com/zhelevskaabstract/',
                    }}
                    title="pinterest"
                    target="blank"
                    className={style.socialLink}
                  >
                    <div
                      className={classNames(style.pinterest, style.icons)}
                    ></div>
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </>
    );
  }
}

export default MainPage;
