import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useRequestNew from '../../../hooks/useRequestNew';
import {Grid} from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Pagination } from 'swiper/modules';
import { Box } from '@mui/material';

function Slider() {
   const crimeFilms = useRequestNew('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Crime');

    return(
       <Grid >
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            loop={true} 
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
           >
            {crimeFilms.map((show, index) =>  (
                <Grid conteiner key={index}>
                    <SwiperSlide key={index}>
                        {show.image && show.image.original &&(
                            <a  href={`/films/${show.id}`} >
                            <img src={show.image.medium} />
                        </a>
                        )}
                    </SwiperSlide>
              </Grid>
            ))}
            
          </Swiper>
       </Grid>

    )
}

export default Slider;