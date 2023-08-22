
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";


function FilmDetails() {
    const [showData, setShowData] = useState([]);
    const {filmId} = useParams();
    console.log(filmId);

    useEffect(() => {
        async function requestAboutFilm(){
          try {
              const response = await axios.get(`http://www.tvmaze.com/shows/${filmId}`);
              setShowData(response.data);
              console.log(filmId);
              console.log(showData);
          } catch (error) {
            console.error(error);
          }
        }
        requestAboutFilm();
      }, [filmId]);

    return showData;
    
}
 

export default FilmDetails;