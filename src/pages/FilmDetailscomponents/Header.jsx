import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



function Header({name, genres=[], premiered, averageRuntime, image, rating={}}) {
  console.log(rating);
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

      
      const card = (
        <Grid container xs={12} sx={{
            display:'flex',
            direction:"row",
            justifyContent:"space-between",
           }}>
          <CardContent>
            <Grid container xs={12} sx={{
                display:'flex',
                direction:"row",
                alignItems:"center"
                }}>
              <Typography sx={{textTransform:'uppercase', fontWeight:'500'}} variant="h4"  gutterBottom color="rgba(226, 226, 226, 1)">
                 {name}
              </Typography>
              <Stack spacing={1} sx={{marginLeft:'20px'}}>
                 <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly value={rating/2}/>
              </Stack>
              <Typography variant="body1" sx={{marginLeft:'10px'}} color="grey" >
                 {rating}
              </Typography>
            </Grid>
            <Typography variant="body1" sx={{fontWeight:'600'}} color="rgb(225, 0, 0)">
              {/* {genres.length > 0 && genres[0].name}  */}
            </Typography>
            <Typography variant="body2">
              {averageRuntime} min {bull} Premierd: {premiered} {bull} 449 views
            </Typography> 
            <Grid style={{marginTop:'20px'}}>
            <IconButton aria-label="add to favorites">
               <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" >
               <ShareIcon/>
            </IconButton>
            </Grid>
          </CardContent>
          <img 
          src={image}
          alt={name}image
          style={{height:'250px', margin:'auto 20px auto'}}/>
        </Grid>
      );
      return (
        <Box width={'100%'}>
          <Card variant="outlined">{card}</Card>
        </Box>
      );
}

export default Header;

