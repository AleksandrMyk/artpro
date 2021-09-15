import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import style from './MainPageMobile.module.css';

class MainPageMobile extends Component {
  render() {
    return (
      <>
        <section className={style.sec}>
          <header className={style.header}>
            <nav className={classNames(style.navigation, style.navFooBg)}>
              <Link to="/gallery" className={style.LinkGallery}>
                gallery
              </Link>
              <Link to="/conditions" className={style.LinkCond}>
                something
              </Link>
              <Link to="/contacts" className={style.LinkContacts}>
                contacts
              </Link>
            </nav>
          </header>
          <div className={style.titleBox}>
            <h2 className={style.mainTitle}>
              <p className={style.title}>my abstract art.</p>
              <p className={style.subtitle}>Zhenya Zhelevska</p>
            </h2>
          </div>
          <footer className={classNames(style.footer, style.navFooBg)}>
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

export default MainPageMobile;

// <section className={style.sec}>
//   <header className={style.header}>
//     <nav className={classNames(style.navigation, style.navFooBg)}>
//       <Link to="/gallery" className={style.LinkGallery}>
//         gallery
//       </Link>
//       <Link to="/conditions" className={style.LinkCond}>
//         something
//       </Link>
//       <Link to="/contacts" className={style.LinkContacts}>
//         contacts
//       </Link>
//     </nav>
//   </header>
//   <div className={style.titleBox}>
//     <h2 className={style.mainTitle}>
//       <p className={style.title}>my abstract art.</p>
//       <p className={style.subtitle}>Zhenya Zhelevska</p>
//     </h2>
//   </div>
//   <footer className={classNames(style.footer, style.navFooBg)}>
//     <div className={style.followBox}>
//       <div className={style.social}>
//         <div className={style.linkBox}>
//           <Link
//             to={{
//               pathname: 'https://www.facebook.com/zhelevskaia',
//             }}
//             title="facebook"
//             target="blank"
//             className={style.socialLink}
//           >
//             <div className={classNames(style.fb, style.icons)}></div>
//           </Link>
//         </div>
//         <div className={style.linkBox}>
//           <Link
//             to={{
//               pathname: 'https://www.instagram.com/zhenyazhelevskaya/',
//             }}
//             title="instagram"
//             target="blank"
//             className={style.socialLink}
//           >
//             <div
//               className={classNames(style.instagram, style.icons)}
//             ></div>
//           </Link>
//         </div>
//         <div className={style.linkBox}>
//           <Link
//             to={{
//               path: 'https://www.pinterest.com/zhelevskaabstract/',
//             }}
//             title="pinterest"
//             target="blank"
//             className={style.socialLink}
//           >
//             <div
//               className={classNames(style.pinterest, style.icons)}
//             ></div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </footer>
// </section>
