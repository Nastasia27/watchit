import React from 'react';
import FilmCard from '../components/ResponsiveAppBar/FilmCard/FilmCard';
import { Grid } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import useRequest from '../hooks/useRequest';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import useRequestCrime from '../hooks/useRequestNew';
import {Typography} from '@mui/material';
import { Link } from 'react-router-dom';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Swiper.css'
import 'swiper/css/effect-fade';

import {useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/SearchSlice';
import useRequestNew from '../hooks/useRequestNew';
import Slider from './FilmDetailscomponents/Slider/Slider';




function Home() {
  //const [search, setSearch] = useState('');
  const apiSearch = useSelector((state) => state.search.search)
  const searchRef = useRef('');


  const comedyFilms = useRequestNew('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Comedy');
  console.log(comedyFilms);


  const apiData = useRequest(apiSearch);
  const dispatch = useDispatch();

  const handleCardClick = (id) => {
    console.log("ID:", id)
  }
  const handleSearch = (e) => {
    dispatch (setSearch(e.target.value));
  }


  return (
    <>
    <Grid container>
      <Typography sx={{textTransform:'uppercase'}} margin='auto' paddingTop="40px" textAlign="center" variant='h5'>Comedy films</Typography>
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
        {comedyFilms.map((show, index) =>  (
          <Grid item xs={3} key={index}>
            <SwiperSlide>
            <a 
              href={`/films/${show.id}`} >
                <img src={show.image.original} />
              </a>
        </SwiperSlide>
          </Grid>
        ))}
      </Swiper>
      </Grid>  
          <Grid>
            <Slider></Slider> 
          </Grid>  
    </Grid>
    </>
  );
}

export default Home;
