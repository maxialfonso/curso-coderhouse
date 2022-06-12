import React from 'react';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function BtnFinalizarCompra() {
  return (
      <Grid container direction="row" rowSpacing={4}>

        <Grid item xs={12}>
          <Button color="primary">
            <Link to={`/cart`} style={{ textDecoration: 'none' }}>
              Finalizar Compra
            </Link>
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Link to={`/tienda`} style={{ textDecoration: 'none', paddingLeft:"12px" }}>
            Seguir comprando
          </Link>
        </Grid>

      </Grid>
  )
}

export default BtnFinalizarCompra