import React, { useState } from 'react';
import "./itemCount.css";
import { IconButton, Grid, Button, Input } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, init, onAdd }) => {

    const [cantidad, setCantidad] = useState(init);

    function restarCantidad() {
        const resultado = cantidad - 1;
        if (resultado < 0) {
            return;
        } else {
            setCantidad(cantidad - 1);
        }
    }

    function sumarCantidad() {
        const resultado = cantidad + 1;
        if (resultado > stock) {
            return;
        } else {
            setCantidad(cantidad + 1);
        }
    }

    return (
        <Grid container>
            <Grid className='flex' item xs={3}>
                <IconButton onClick={restarCantidad} color="primary" component="span">
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </Grid>
            <Grid className='flex' item xs={6}>
                <Input
                    value={cantidad}
                    variant='standard'
                    disableUnderline
                    inputProps={{
                        readOnly: true,
                        style: { textAlign: 'center' }
                    }}
                />
            </Grid>
            <Grid className='flex' item xs={3}>
                <IconButton onClick={sumarCantidad} color="primary" component="span">
                    <AddCircleOutlineIcon />
                </IconButton>
            </Grid>
            <Grid className='flex' item xs={12}>
                <Button color="primary" disabled={cantidad === 0} onClick={onAdd}>
                    Agregar al carrito
                </Button>
            </Grid>
            <Grid className='flex' item xs={12}>
                <Button color="primary">
                    <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                        Finalizar Compra
                    </Link>
                </Button>
            </Grid>
        </Grid>
    )
}

export default ItemCount