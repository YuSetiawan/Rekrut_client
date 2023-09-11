import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Pagination, Navigation, Autoplay} from 'swiper';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import userImg from '../../public/image/user.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import {Skeleton} from '@mui/material';

export default function Carousell() {
  const [profiles, setProfiles] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    axios
      .get(`https://zany-ruby-whale-veil.cyclic.app/user/profile`)
      .then((response) => {
        setProfiles(response.data.data);
        isLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
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
          {loading ? (
            <>
              <SwiperSlide className="shadow">
                <Card>
                  <div className="d-flex justify-content-center m-4">
                    <Skeleton variant="circular" width={230} height={230} />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <Skeleton variant="rounded" width={200} height={25} />
                    </Card.Title>
                    <Card.Text>
                      <Skeleton variant="rounded" width={200} height={25} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </>
          ) : (
            <>
              {profiles.map((item, index) => (
                <SwiperSlide className="shadow" key={index}>
                  <Card>
                    <div className="d-flex justify-content-center m-4">
                      {!item.photo ? (
                        <Image src={userImg} height="230" width="230" alt="avatar" style={{borderRadius: '50%', objectFit: 'cover', border: '5px solid #FFBF00'}} />
                      ) : (
                        <Image src={item.photo} height={230} width={230} alt="avatar" style={{borderRadius: '50%', objectFit: 'cover', border: '5px solid #FFBF00'}} />
                      )}
                    </div>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.job_position}</Card.Text>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </>
          )}
        </div>
      </Swiper>
    </>
  );
}
