
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./FilmDetailscomponents/Header";


function FilmDetails() {
    const [showData, setShowData] = useState([]);
    const {filmId} = useParams();
    console.log(filmId);

    useEffect(() => {
        async function requestAboutFilm(){
          try {
              const response = await axios.get(`https://api.tvmaze.com/shows/${filmId}`);
              setShowData(response.data);
              console.log(filmId);
              console.log(showData);
              console.log(response);
          } catch (error) {
            console.error(error);
          }
        }
        requestAboutFilm();
      }, [filmId]);

      const {name, genres, premiered, averageRuntime, image, rating } = showData;


    return (
       <Header 
       name={name}
       genres={genres}
       premiered={premiered}
       averageRuntime={averageRuntime}
       image={image}
       rating={rating}
       />
       
    );
    
}

export default FilmDetails;