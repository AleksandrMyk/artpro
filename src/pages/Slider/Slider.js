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
    id: this.props.match.params.id,
  };

  componentDidMount() {
    Object.entries(pages);
    this.setState({ data: pages });
    console.log(pages);
    let id = this.state.id;
    console.log(id);
  }

  chekedID = () => {
    let goodId = [];
    Object.entries(pages)
      .map(item => item.id)
      .push(goodId);
    console.log(goodId);
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <>
        <Swiper {...this.state}>
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <div
                className="swiper-zoom-container imgBox"
                data-swiper-zoom="3"
              >
                <img
                  src={item.pic}
                  className={style.img1}
                  id="img"
                  alt={item.name}
                />
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
