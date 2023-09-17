import { Grid } from "@mui/material";
import FilmCard from "../components/ResponsiveAppBar/FilmCard/FilmCard";
import useRequestNew from "../hooks/useRequestNew";
import { useSelector} from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";


function FilmByGenre () {
    const {Genres} = useParams();
    const genresFilms = useRequestNew(`https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/${Genres}`);
    
    return(
        <Grid container sx={{marginTop:'20px'}}>
            <h2 style={{textTransform:'uppercase', margin:'auto'}}>Film {Genres}</h2> 
            
            <Grid container sx={{display:'flex', alignContent:"center", alignItems:"center", justifyContent:"center"}}>
                {genresFilms.map((show, index) =>  (
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

export default FilmByGenre;