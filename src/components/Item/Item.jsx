import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

function Item({ producto }) {

  const { id, name, description, category } = producto;

  const url = `./assets/images/products/1/home.png`

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={url}
          alt={name}
          height="200"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Item