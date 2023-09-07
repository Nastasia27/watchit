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
  const crimeFilms = useRequestNew('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Crime');


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
        style={{height:'400px'}}
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
      <Typography sx={{textTransform:'uppercase'}} margin='auto' paddingTop="80px" textAlign="center" variant='h6'>Crime films</Typography>
      <Grid container sx={{ display:'flex',
          justifyContent:'center',
            alignItems: 'center'}} >
          <Swiper
            slidesPerView={6}
            spaceBetween={20}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{height:'250px', width:'1000px', margin:'auto', display:'flex',
          justifyContent:'center',
            alignItems: 'center',
          padding:0}}
           >
            {crimeFilms.map((show, index) =>  (
                <Grid conteiner key={index}>
                    <SwiperSlide key={index} style={{height:'100%'}}>
                        {show.image && show.image.original &&(
                            <a  href={`/films/${show.id}`} >
                            <img  src={show.image.medium} />
                        </a>
                        )}
                    </SwiperSlide>
              </Grid>
            ))}
            
          </Swiper>
       </Grid>
    </Grid>
    </>
  );
}

export default Home;
