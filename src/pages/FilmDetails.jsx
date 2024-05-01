
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./FilmDetailscomponents/Header";
import Tags from "./FilmDetailscomponents/TegsComponent";
import Starring from "./FilmDetailscomponents/Starring";
import TabsComponent from "./FilmDetailscomponents/TabsComponent";
import useRequestNew from "../hooks/useRequestNew";


function FilmDetails() {
    const [showData, setShowData] = useState({});
    const {filmId} = useParams();

    useEffect(() => {
        async function requestAboutFilm(){
          try {
              const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}`, {
                params: {
                  language:'en-US',
                  api_key:'33584e6a5217392f99d9ce3ecf5ba429',
                }
              });
              console.log(filmId);
              setShowData(response.data);
              console.log(showData);
              console.log(response);
          } catch (error) {
            console.error(error);
          }
        }
        requestAboutFilm();
      }, [filmId]);

      useEffect(() => {
        console.log(showData);
      }, [showData]);

      if (Object.keys(showData).length === 0) {
        return <div>Loading...</div>
      }

      const {original_title, genres, release_date, runtime, poster_path, vote_average, overview } = showData;
      console.log(original_title, genres, release_date, runtime, poster_path, vote_average, overview);
      console.log(genres);

    return (
      <>
      <Header 
       name={original_title}
       genres={genres}
       premiered={release_date}
       averageRuntime={runtime}
       image={`https://image.tmdb.org/t/p/original${poster_path}`}
       rating={vote_average}
       />

       <Tags
        genres={genres}
        />
        <Starring/>
        <TabsComponent
        summary={overview}
        rating={vote_average}/>
      </>
       
       
    );
    
}

export default FilmDetails;