import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FilmCard({ 
    id, 
    name, 
    time, 
    image,
    eventClick
}) {

  const handleClik = () => {
    eventClick(id)

  } 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <button onClick={handleClik}>Clik me</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}