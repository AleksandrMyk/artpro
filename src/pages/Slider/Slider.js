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
  state = {
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

  componentDidMount() {
    const pictures = pages.map(item => item.arts);
    this.setState({ data: pictures });

    this.setState({ data: pages });
  }
  render() {
    const { data } = this.state;
    console.log(data, 'data');
    return (
      <>
        <Swiper {...this.state}>
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <div
                className="swiper-zoom-container imgBox"
                data-swiper-zoom="3"
              >
                {item.arts.map(i => (
                  <img
                    src={i.pic}
                    className={style.img1}
                    alt={item.name}
                    key={i.id}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
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
