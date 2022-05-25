import React from 'react';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function BtnFinalizarCompra() {
  return (
    <Grid className='flex' item xs={12}>
                <Button color="primary">
                    <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                        Finalizar Compra
                    </Link>
                </Button>
            </Grid>
  )
}

export default BtnFinalizarCompra