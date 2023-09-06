import { useParams } from "react-router";
import { Grid } from '@mui/material';
import { useState, useEffect} from 'react';
import axios from "axios";
import {Typography} from "@mui/material";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';



function Actor() {
  const [actorData, setActorData] = useState({});
  const {Id} = useParams();
  console.log(actorData);
  console.log(Id);

  useEffect(() => {
    async function actorRequest(){
      try {
        const response = await axios.get(
            `https://api.tvmaze.com/people/${Id}?embed=castcredits`);
        setActorData(response.data);
        
      } catch (error) {
        console.error(error);
      }
      
    }
    actorRequest();
  }, [Id]);

    return(
        <>
          <Grid container sm={12} sx={{display:'flex', direction:'row', margin:'20px'}}>
            <Grid item sm={3} sx={{margin:'40px'}}>
              <img 
                src={actorData.image ? actorData.image.medium : ''} 
                alt={actorData.name} 
                style={{width:'100%', maxWidth:'300px' }}
               />
            </Grid>
            <Grid item sx={{margin:'0 40px'}}>
                <h1 style={{textTransform:'uppercase'}}>{actorData.name}</h1>

                

            </Grid>         
          </Grid>
          <Grid sx={{margin:'0 40px'}}>
                <Typography  style={{paddingTop:'30px', textTransform:'uppercase'}}>Personal information</Typography>
                <Stack direction="row" spacing={1} style={{margin:'20px'}}>
                   <IconButton aria-label="delete" color="primary">
                     <FacebookIcon />
                   </IconButton>
                   <IconButton aria-label="delete" color="primary">
                     <TwitterIcon />
                   </IconButton>
                </Stack>
                <Typography variant="body2">Date of birth: {actorData.birthday}</Typography>
                <Typography variant="body2">Country: {actorData.country ? actorData.country.name : ""}</Typography>
          </Grid>
        </>
    )
}

export default Actor;