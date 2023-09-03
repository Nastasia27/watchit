import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



export default function InputList({ 
    name, 
    image,
}) {

 
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 50 , height: 60}}
        image={image}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body2" sx={{textTransform:'uppercase'}}>
            {name}
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
  );
}