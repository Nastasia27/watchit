
import { Grid } from '@mui/material';
import { useState, useEffect} from 'react';
import StarCard from './StarCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


function Starring() {
  const [starringData, setStarringData] = useState([]);
  const {filmId} = useParams();
  const [visibleStarring, setVisibleStarring] = useState(2);


    
    useEffect(() => {
        async function starringRequest(){
          try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}/credits`, {
              params: {
                language:'en-US',
                api_key:'33584e6a5217392f99d9ce3ecf5ba429',
              }
            });
            console.log(response.data.cast);
            setStarringData(response.data.cast);
            console.log(starringData);
          } catch (error) {
            console.error(error);
          }
        }
        starringRequest();
      }, [filmId]);
  const showMoreStarring = () => {
    if (visibleStarring === 2) {
      setVisibleStarring(starringData.length)
    } else {
      setVisibleStarring(2);
    }
  };
  const visibleCards = starringData.slice(0,visibleStarring);
  console.log(visibleCards);

  return (
    <div>
      <Typography  sx={{margin:'60px auto 10px', textAlign:'center', fontWeight:'600'}}>
        STARRING
      </Typography>
      <Grid container spacing={2} sx={{ margin: 'auto' }}>
        {visibleCards.map(({name, character, profile_path, id, index}) =>  (
          <Grid item xs={12} sm={6} md={6} key={index} direction="row"
          justifyContent="center"
          alignItems="center">
            <Link 
              to={`/films/actor/${id}`} 
              style={{
                textDecoration:'none',
               }}>
                <StarCard
            name={name}
            role={character}
            image={`https://image.tmdb.org/t/p/original${profile_path}`} 
            />
               </Link>
          </Grid>
        ))}
      </Grid> 
      {starringData.length > 2  && (
      <Stack  alignContent='center' alignItems='center' sx={{margin:'20px'}}>
         <Button variant="outlined" onClick={showMoreStarring} sx={{color:"red"}}>{visibleStarring === 2 ? 'SHOW MORE' : 'SHOW LESS'}</Button>
      </Stack> 
      )}
    </div>
  );
}

export default Starring;
