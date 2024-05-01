import { useParams } from "react-router";
import { Grid } from '@mui/material';
import { useState, useEffect} from 'react';
import axios from "axios";
import {Typography} from "@mui/material";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


import { Swiper, SwiperSlide } from 'swiper/react';
import useRequestNew from "../hooks/useRequestNew";
import 'swiper/css';
import 'swiper/css/pagination';

import '../../src/pages/FilmDetailscomponents/Slider/styles.css';
import { Pagination } from 'swiper/modules';



function Actor() {
  const [filmData, setFimData] = useState([]);
  const crimeFilms = useRequestNew('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Crime');
  const [actorData, setActorData] = useState({});
  const [filmDataArray, setFilmDataArray] = useState([]);
  const {Id} = useParams();

  useEffect(() => {
    async function actorRequest(){
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${Id}`, {
            params: {
              language:'en-US',
              api_key:'33584e6a5217392f99d9ce3ecf5ba429',
          }});
          const responseAboutFilm = await axios.get(
            `https://api.themoviedb.org/3/person/${Id}/movie_credits`, {
              params: {
                language:'en-US',
                api_key:'33584e6a5217392f99d9ce3ecf5ba429',
            }});
          console.log(responseAboutFilm);
        setActorData(response.data);
        setFimData(responseAboutFilm.data.cast);
      } catch (error) {
        console.error(error);
      }
      
    }
    actorRequest();
  }, [Id]);
  console.log(filmData);

  useEffect(() => {
    async function fetchFilmData() {
      try {
        const allFilmData = filmData.map(async(filmLink) => {const filmResponse = await axios.get(filmLink);
        return filmResponse.data;
      });
      const filmDataArray = await Promise.all(allFilmData);
      setFilmDataArray(filmDataArray);
      } catch (error) {
        console.error(error);
      }
    }
    if (filmData.length > 0) {
      fetchFilmData();
    }
  }, [filmData]);

    return(
        <>
          <Grid container sm={12} sx={{display:'flex', direction:'row', margin:'20px'}}>
            <Grid item sm={3} sx={{margin:'40px'}}>
              <img 
                src={`https://image.tmdb.org/t/p/original${actorData.profile_path}`} 
                alt={actorData.name} 
                style={{width:'100%', maxWidth:'300px' }}
               />
            </Grid>
            <h1 style={{textTransform:'uppercase', margin:'40px'}}>{actorData.name}</h1>
            <Grid item sx={{margin:'0 40px'}}>
                <h3>Acting</h3>
                <Grid sx={4}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        style={{padding:0}}
                    >
                        {filmData.map((data, index) =>  (
                            <Grid conteiner key={index}>
                                <SwiperSlide key={index} >
                                    
                                        <a  href={`/films/${data.id}`} >
                                        <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
                                    </a>
                                    
                                </SwiperSlide>
                        </Grid>
                        ))}
                        
                    </Swiper>
              </Grid>        
            </Grid>         
          </Grid>
          <Grid sx={{margin:'0 50px'}}>
                <Typography  style={{paddingTop:'30px', textTransform:'uppercase'}}>Personal information</Typography>
                <Typography style={{padding:'20px 0'}} variant="body2">{actorData.biography}</Typography> 
                <Typography variant="body2">Date of birth: {actorData.birthday}</Typography>
                <Typography variant="body2">Country: {actorData.place_of_birth}</Typography>
          </Grid>
        </>
    )
}

export default Actor;