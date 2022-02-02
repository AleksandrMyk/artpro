// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import Masonry from 'react-masonry-component';

// import Header from '../../pages/Header/Header';
// import style from './Gallery.module.css';
// import gallery from '../../db-title.json';

// const styleUl = {
//   display: 'flex',
//   flexWrap: 'wrpap',
//   width: '100%',
//   justifyContent: 'center',

//   // marginTop: '20px',
// };

// class Gallery extends Component {
//   state = {
//     artsData: [],
//   };

//   componentDidMount() {
//     this.setState({ artsData: gallery });
//   }

//   render() {
//     const { artsData } = this.state;
//     console.log('Gallery ~ render ~ artsData', artsData);
//     return (
//       <>
//         <Header />
//         <section className={style.photoSec}>
//           <Masonry className={'photoList'} elementType={'div'} style={styleUl}>
//             {artsData.map(item => (
//               <div key={item.id} className={style.photoItem}>
//                 <Link
//                   id={item.id}
//                   to={{
//                     pathname: `/artwork#${item.id}`,
//                     state: { from: this.props.location },
//                   }}
//                 >
//                   <img
//                     id={item.id}
//                     src={item.pic}
//                     className={style.photoImg}
//                     alt={item.name}
//                   />
//                 </Link>
//               </div>
//             ))}
//           </Masonry>
//         </section>
//       </>
//     );
//   }
// }
// export default Gallery;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Masonry from 'react-masonry-component';

import Header from '../../pages/Header/Header';
import style from './Gallery.module.css';
import gallery from '../../db-title.json';

const styleUl = {
  display: 'flex',
  flexWrap: 'wrpap',
  width: '100%',
  justifyContent: 'center',

  // marginTop: '20px',
};

const Gallery = () => {
  return (
    <>
      <Header />
      <section className={style.photoSec}>
        <Masonry className={'photoList'} elementType={'div'} style={styleUl}>
          {artsData.map(item => (
            <div key={item.id} className={style.photoItem}>
              <Link
                id={item.id}
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
};

export default Gallery;
