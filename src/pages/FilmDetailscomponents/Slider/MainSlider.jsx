import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from '@mui/material';
import useRequestNew from '../../../hooks/useRequestNew';
import { Pagination, Autoplay } from 'swiper/modules';
import Button from '@mui/material/Button';
import {Typography} from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import './mainStyle.css';
import { Navigation } from 'swiper/modules';

export default function App() {
  const crimeFilms = useRequestNew('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Crime');

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
        {crimeFilms.map((show, index) =>  (
                <Grid conteiner key={index}>
                    <SwiperSlide className='swiper-slide-main' style={{height:'100%'}} key={index}>
                        {show.image && show.image.original &&(
                            
                            <img src={show.image.original} />
                        )}
                        <div className='gradient-block'>
                          <div className='text-block'>
                            <h1 style={{textTransform:'uppercase'}}>{show.name}</h1>
                            <Typography>{}</Typography>
                            <a  href={`/films/${show.id}`} >
                            <Button variant="outlined">Show more</Button>
                            </a>
                          </div>
                        </div>
                    </SwiperSlide>
              </Grid>
            ))}
      </Swiper>
    </Grid>
    </>
  );
}
