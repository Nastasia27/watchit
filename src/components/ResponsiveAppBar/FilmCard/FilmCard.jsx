import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


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
    <Card sx={{ maxWidth: 395,
      height: 222,
      position: "relative", margin:'10px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="395"
          image={image}
          alt={name}
        />
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%", 
          backgroundImage:"linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)"}}>
            <Box sx={{
              position:"absolute",
              justifyContent:"space-evenly",
              alignItems:"flex-start",
              display:"flex",
              flexDirection:"column",
              left:10,
              top:100,  
             }}>
              <Typography gutterBottom variant="p" component="div" sx={{
                color:"#fff", fontSize:15, textTransform:'uppercase'
               }}>
               {name}
              </Typography>
              <Typography gutterBottom variant="p" component="div" sx={{
                color:"#fff", fontSize:12, paddingBottom:1, paddingTop:1
               }}>
                {time}
              </Typography>
              <Link 
              to={`/films/${id}`} 
              style={{
                textDecoration:'none',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                border: "1px solid #E50914", 
                background: "#E50914 ",
                width: 100,
                height: 30, 
                color: "#fff"
               }}>SHOW MORE</Link>

            </Box>
        </Box>
        
      </CardActionArea>
    </Card>
  );
}