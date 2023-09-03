
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./FilmDetailscomponents/Header";
import Tags from "./FilmDetailscomponents/TegsComponent";
import Starring from "./FilmDetailscomponents/Starring";
import TabsComponent from "./FilmDetailscomponents/TabsComponent";


function FilmDetails() {
    const [showData, setShowData] = useState([]);
    const {filmId} = useParams();
    console.log(showData)

    useEffect(() => {
        async function requestAboutFilm(){
          try {
              const response = await axios.get(`https://api.tvmaze.com/shows/${filmId}`);
              setShowData(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        requestAboutFilm();
      }, [filmId]);

      const {name, genres, premiered, averageRuntime, image, rating, summary } = showData;


    return (
      <>
      <Header 
       name={name}
       genres={genres}
       premiered={premiered}
       averageRuntime={averageRuntime}
       image={image}
       rating={rating}
       />

       <Tags
        genres={genres}
        />
        <Starring/>
        <TabsComponent
        summary={summary}
        rating={rating}/>
      </>
       
       
    );
    
}

export default FilmDetails;