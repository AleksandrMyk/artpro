import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Masonry from 'react-masonry-component';

import Header from '../../pages/Header/Header';
import style from './Gallery.module.css';
import gallery from '../../db-title.json';

// const styleUl = {
//   display: 'flex',
//   flexWrap: 'wrpap',
//   width: '100%',
//   justifyContent: 'center',

//   // marginTop: '20px',
// };

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artsData: [],
    };
  }
  componentDidMount() {
    this.setState({ artsData: gallery });
  }

  render() {
    const { artsData } = this.state;
    return (
      <>
        <Header />
        <section className={style.photoSec}>
          <Masonry
            className={style.photoList}
            elementType={'div'}
            // className={style.styleUl}
          >
            {artsData.map(item => (
              <div key={item.id} className={style.photoItem}>
                <Link
                  to={{
                    pathname: `/artwork#${item.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <img
                    id={item.id}
                    src={item.pic}
                    className={style.photoImg}
                    alt={item.name}
                  />
                </Link>
              </div>
            ))}
          </Masonry>
        </section>
      </>
    );
  }
}
export default Gallery;
