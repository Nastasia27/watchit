import React from 'react';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import Stack from '@mui/material/Stack';
import FilmCard from '../components/ResponsiveAppBar/FilmCard/FilmCard';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Swiper.css'
import 'swiper/css/effect-fade';

import useRequestNew from '../hooks/useRequestNew';
import Button from '@mui/material/Button';

function Films() {
    const popular = useRequestNew('https://dolphin-app-pc6ii.ondigitalocean.app/article/popular');
    const [genres, setGenres] = useState(['popular']);
    const handleButtonClick = (genre) => {
        setGenres(genre);
    };
    console.log(genres)
    const filmsByGenre = useRequestNew(`https://dolphin-app-pc6ii.ondigitalocean.app/article/${genres}`);
    console.log(filmsByGenre);
 
    return(
        <Grid container direction="column"
        justifyContent="flex-start"
        alignItems="center">
        <Grid container  
              sx={{width:'100%', height:'500px', marginTop:'20px'}}>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 80,
                stretch: 0,
                depth: 10,
                modifier: 5,
                slideShadows: true,
            }}
            style={{height:'500px', padding:'0'}}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
            >
            {popular.map((show, index) =>  (
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
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Stack spacing={2} direction="row" alignItems='center' alignContent='center'  justifyContent='space-around'>
                    <Button  onClick={() => handleButtonClick('popular')} variant="outlined">Popular</Button>
                    <Button onClick={() => handleButtonClick('byGenre/Comedy')} variant="outlined">Comedy</Button>
                    <Button onClick={() => handleButtonClick('byGenre/Crime')} variant="outlined">Crime</Button>
                 </Stack>
            </Grid>
            <Grid item xs={12} sm={6} alignItems='center' justifyContent='center'>
                <Stack spacing={2} direction="row" alignItems='center' alignContent='center'  justifyContent='space-around'>
                    <Button onClick={() => handleButtonClick('byGenre/Drama')} variant="outlined">Drama</Button>
                    <Button onClick={() => handleButtonClick('byGenre/Action')} variant="outlined">Action</Button>
                    <Button onClick={() => handleButtonClick('byGenre/Adventure')} variant="outlined">Adventure</Button>
                 </Stack>
            </Grid>
        </Grid>
        <Grid container sx={{display:'flex', alignContent:"center", alignItems:"center", justifyContent:"center", marginTop:'10px'}}>
            
                {filmsByGenre.map((show, index) =>  (
                    <Grid conteiner key={index}>
                        <FilmCard
                        id={show.id} 
                        name={show.name} 
                        image={show.image.medium}>   
                        </FilmCard>
                </Grid>
                ))}
            </Grid> 
        </Grid>
    )
}

export default Films;