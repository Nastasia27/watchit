
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
            const response = await axios.get(`https://api.tvmaze.com/shows/${filmId}/cast`);
            setStarringData(response.data);
            
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

  return (
    <div>
      <Typography  sx={{margin:'60px auto 10px', textAlign:'center', fontWeight:'600'}}>
        STARRING
      </Typography>
      <Grid container spacing={2} sx={{ margin: 'auto' }}>
        {visibleCards.map(({person, character, index}) =>  (
          <Grid item xs={12} sm={6} md={6} key={index} direction="row"
          justifyContent="center"
          alignItems="center">
            <Link 
              to={`/films/actor/${person.id}`} 
              style={{
                textDecoration:'none',
               }}>
                <StarCard
            name={person.name}
            role={character.name}
            image={person.image ? person.image.medium : ''} 
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
