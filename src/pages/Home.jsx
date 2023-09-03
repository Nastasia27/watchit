import React from 'react';
import FilmCard from '../components/ResponsiveAppBar/FilmCard/FilmCard';
import { Grid } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import useRequest from '../hooks/useRequest';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Swiper.css'
import 'swiper/css/effect-fade';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';





function Home() {
  const [search, setSearch] = useState('');
  const searchRef = useRef('');
  const apiData = useRequest(search);
  console.log(apiData);

  useEffect(() => {
    searchRef.current.focus();
  },[])

  const handleCardClick = (id) => {
    console.log("ID:", id)
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <input 
        type='text' 
        value={search} 
        onChange={handleSearch} 
        ref={searchRef}
      />
      <Grid container >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
      {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        navigation={true}

      >
        <SwiperSlide> <img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://static.tvmaze.com/uploads/images/original_untouched/100/250748.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://static.tvmaze.com/uploads/images/original_untouched/306/766262.jpg" /></SwiperSlide>
        
      </Swiper> */}
      </Grid>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        {apiData.map(({show}) =>  (
          <Grid item xs={3} key={show.id}>
            <FilmCard
             id={show.id}
             name={show.name}
             time={show.premiered}
             image={show.image ? show.image.medium : ''}
             eventClick={handleCardClick}
            />
          </Grid>
        ))}
      </Grid>    
    </>
  );
}

export default Home;
