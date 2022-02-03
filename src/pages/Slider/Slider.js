import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Zoom,
} from 'swiper';

import pages from '../../db-pages';
import Header from '../../pages/Header/Header';
import Footer from '../../Component/Footer/Footer';
import 'swiper/swiper-bundle.css';
import style from './Slider.module.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, Keyboard, Zoom]);

class Slider extends Component {
  constructor(props) {
    console.log('Slider ~ constructor ~ props', props);
    super(props);
    this.state = {
      slidesPerView: 1,
      navigation: true,
      pagination: {
        clickable: true,
      },
      scrollbar: {
        draggable: true,
      },
      keyboard: {
        enabled: true,
      },
      zoom: true,
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data: pages });
  }

  render() {
    const { data } = this.state;
    console.log('Slider ~ render ~ data', data);
    console.log(this.props, 'props');
    let paramsId = this.props.match.params.id;
    return (
      <>
        <Swiper {...this.state}>
          {data.map(item => {
            return (
              paramsId === item.id &&
              item.arts.map(i => {
                return (
                  <>
                    <SwiperSlide key={item.id}>
                      <div
                        className="swiper-zoom-container imgBox"
                        data-swiper-zoom="3"
                      >
                        <img
                          src={i.pic}
                          className={style.img1}
                          alt={item.name}
                          key={i.id}
                        />
                      </div>
                    </SwiperSlide>
                  </>
                );
              })
            );
          })}
        </Swiper>
        <section className={style.aboutSec}>
          <Header />
          {data.map(item => (
            <p className={style.aboutText} key={item.id}>
              {item.text}
            </p>
          ))}
          <Footer />
        </section>
      </>
    );
  }
}

export default Slider;

//   render() {
//     const { data } = this.state;
//     console.log('Slider ~ render ~ data', data);
//     console.log(this.props, 'props');
//     let paramsId = this.props.match.params.id;
//     return (
//       <>
//         <Swiper {...this.state}>
//           {data.map(item => {
//             return (
//               paramsId === item.id && (
//                 <>
//                   <SwiperSlide key={item.id}>
//                     <div
//                       className="swiper-zoom-container imgBox"
//                       data-swiper-zoom="3"
//                     >
//                       {item.arts.map(i => (
//                         <img
//                           src={i.pic}
//                           className={style.img1}
//                           alt={item.name}
//                           key={i.id}
//                         />
//                       ))}
//                     </div>
//                   </SwiperSlide>
//                 </>
//               )
//             );
//           })}
//         </Swiper>
//         <section className={style.aboutSec}>
//           <Header />
//           {data.map(item => (
//             <p className={style.aboutText} key={item.id}>
//               {item.text}
//             </p>
//           ))}
//           <Footer />
//         </section>
//       </>
//     );
//   }
// }
