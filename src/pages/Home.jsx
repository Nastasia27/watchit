import React from 'react';
import { Grid } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import useRequest from '../hooks/useRequest';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import {Typography} from '@mui/material';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Swiper.css'
import 'swiper/css/effect-fade';

import {useDispatch, useSelector } from 'react-redux';
import useRequestNew from '../hooks/useRequestNew';
import Button from '@mui/material/Button';


function Home() {
  const crimeFilms = useRequestNew('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Crime');
  const comedyFilms = useRequestNew('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Comedy');
  const popular = useRequestNew('https://dolphin-app-pc6ii.ondigitalocean.app/article/popular');


  const [genres, setGenres] = useState([]);
  const handleCardClick = (id) => {
    console.log("ID:", id)
  };
  const handleButtonClick = (genre) => {
    setGenres(genre);
  };

  return (
    <>
    <Grid container >
    <Swiper style={{margin:'0', paddingTop:'0', width:'100%', height: "100vh", pagination: {
    el: '.swiper-pagination',
    type: 'bullets'}}} 
    loop={true} pagination={true} 
    autoplay={{
      delay: 2000,
    }}
    modules={[Pagination, Autoplay]} className="mySwiper">
        {popular.map((show, index) =>  (
                <Grid conteiner key={index}>
                    <SwiperSlide className='swiper-slide-main' style={{height:'100%'}} key={index}>
                        {show.image && show.image.original &&(
                            
                            <img src={show.image.original} />
                        )}
                        <div className='gradient-block'>
                          <div className='text-block'>
                            <h1 style={{textTransform:'uppercase'}}>{show.name}</h1>
                            <Typography>{}</Typography>
                            <a style={{textDecoration:'none'}} href={`/films/${show.id}`} >
                            <Button  variant="outlined">Show more</Button>
                            </a>
                          </div>
                        </div>
                    </SwiperSlide>
              </Grid>
            ))}
      </Swiper>
    </Grid>
    <Grid container>
      <Grid container sx={{display:'flex', direction:'row', justifyContent:'space-between', alignItems:'flex-end', margin:'60px 40px 0'}}>
        <Typography sx={{textTransform:'uppercase'}}  textAlign="center" variant='h5'>Comedy films</Typography>
        <a style={{textDecoration:'none'}} href={`/films/Genre/${genres}`}>
          <Button onClick={() => handleButtonClick('Comedy')} variant="text">Show all</Button>
        </a>
      </Grid>
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
        style={{height:'450px'}}
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
        <Grid container sx={{display:'flex', direction:'row', justifyContent:'space-between', alignItems:'flex-end', margin:'60px 40px 10px'}}>
          <Typography sx={{textTransform:'uppercase'}}  textAlign="center" variant='h6'>Crime films</Typography>
         <a style={{textDecoration:'none'}} href={`/films/Genre/${genres}`}> 
            <Button onClick={() => handleButtonClick('Crime')} variant="text">Show all</Button>
         </a>
        </Grid>
      <Grid container sx={{ display:'flex',
          justifyContent:'center',
            alignItems: 'center'}} >
          <Swiper
            slidesPerView={4}
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
