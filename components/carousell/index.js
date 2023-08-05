import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Pagination, Navigation, Autoplay} from 'swiper';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import userImg from '../../public/image/second-lp.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Carousell() {
  return (
    <>
      <style>
        {`
      .swiper-pagination{
        position: static !important;
      }
      `}
      </style>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        className="mySwipe"
      >
        <div className="container">
          <SwiperSlide className="shadow">
            <Card>
              <div className="d-flex justify-content-center m-4">
                <Image src={userImg} className="m-auto" alt="userImg" style={{height: 250, width: 250, borderRadius: '50%', objectFit: 'cover', marginLeft: 1000}} />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="shadow">
            <Card>
              <div className="d-flex justify-content-center m-4">
                <Image src={userImg} className="m-auto" alt="userImg" style={{height: 250, width: 250, borderRadius: '50%', objectFit: 'cover', marginLeft: 1000}} />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="shadow">
            <Card>
              <div className="d-flex justify-content-center m-4">
                <Image src={userImg} className="m-auto" alt="userImg" style={{height: 250, width: 250, borderRadius: '50%', objectFit: 'cover', marginLeft: 1000}} />
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
