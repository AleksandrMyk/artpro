import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Masonry from 'react-masonry-component';

import Header from '../../pages/Header/Header';
import style from './Gallery.module.css';
import gallery from '../../db-title.json';

const styleUl = {
  display: 'flex',
  width: '100%',
  margin: '0 auto',
  marginTop: '20px',
};

class Gallery extends Component {
  state = {
    artsData: [],
  };

  componentDidMount() {
    Object.entries(gallery);
    this.setState({ artsData: gallery });
  }

  render() {
    const { artsData } = this.state;
    return (
      <>
        <Header />
        <section className={style.photoSec}>
          <Masonry className={'photoList'} elementType={'ul'} style={styleUl}>
            {artsData.map(item => (
              <li key={item.id} className={style.photoItem}>
                <Link
                  to={{
                    pathname: `/artwork#${item.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <img
                    src={item.pic}
                    className={style.photoImg}
                    alt={item.name}
                  />
                </Link>
              </li>
            ))}
          </Masonry>
        </section>
        ;
      </>
    );
  }
}
export default Gallery;

// to={{
//                   pathname: `${this.props.match.url}/cast`,
//                   state: { from: this.props.location },
//                 }}

//  <Header />
//         <section className={style.photoSec}>
//           <ul className={style.photoList}>
//             {pics.map(item => (
//               <li key={item.id} className={style.photoItem}>
//                 <Link
//                   onClick={this.handleOnClick}
//                   to={{
//                     pathname: `/mygallery/artwork#${item.id}`,
//                   }}
//                 >
//                   <img
//                     src={item.pic}
//                     className={style.photoImg}
//                     alt={item.name}
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </section>

/* <section className={style.photoSec}>
  <Masonry className={'photoList'} elementType={'ul'} style={styleUl}>
    {arts.map(item => (
      <li key={item.id} className={style.photoItem}>
        <Link
          onClick={this.handleOnClick}
          to={{
            pathname: `/mygallery/artwork#${item.id}`,
          }}
        >
          <img src={item.pic} className={style.photoImg} alt={item.name} />
        </Link>
      </li>
    ))}
  </Masonry>
</section> */
