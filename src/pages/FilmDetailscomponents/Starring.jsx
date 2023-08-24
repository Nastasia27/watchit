
import { Grid } from '@mui/material';
import { useState, useEffect} from 'react';
import StarCard from './StarCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Starring() {
  const [starringData, setStarringData] = useState([]);
  const {filmId} = useParams();
  console.log(filmId)
  console.log(starringData)
    
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



  return (
    <>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        {starringData.map(({person, character, index}) =>  (
          <Grid item xs={3} key={index}>
            <StarCard
            name={person.name}
            role={character.name}
            
            />
          </Grid>
        ))}
      </Grid>    
    </>
  );
}

export default Starring;
