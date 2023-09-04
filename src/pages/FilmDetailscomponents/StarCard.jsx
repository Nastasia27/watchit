import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function StarCard({
    name,
    role,
    image
}) {
  return (
    <Card sx={{ display: 'flex' , width:300, alignItems:'center' }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={image}
        title={name}
      />
      <Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          As {role}
        </Typography>
      </CardContent>
      </Box>
    </Card>
  );
}