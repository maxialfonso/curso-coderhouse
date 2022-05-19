import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount'

function Item({id}) {

  const url = `./assets/images/products/${id}/home.png`

  return (
    <Card>

      <CardActionArea>
        <CardMedia
          component="img"
          image={url}
          alt="Curso React"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Curso de React JS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Desarrolla aplicaciones web con React Hooks. Integra herramientas como Strapi, PayPal y Google Maps para desarrollar una tienda online con carrito
            de compras.
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardContent>
        <ItemCount stock={10} init={5} />
      </CardContent>

    </Card>
  )
}

export default Item