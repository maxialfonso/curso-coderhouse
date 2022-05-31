import React, { useState } from 'react';
import "./itemCount.css";
import { IconButton, Grid, Button, Input } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

//const ItemCount = ({ id, stock, init, onAdd }) => {
const ItemCount = ({ producto, init, onAdd }) => {

    const [value, setValue] = useState(init);

    function handleClickAddToCart() {
        onAdd(producto, value);
    }

    function handleClickRestarCantidad() {
        const resultado = value - 1;
        if (resultado < 0) {
            return;
        } else {
            setValue(value - 1); 
        }
    }

    function handleClickSumarCantidad() {
        const resultado = value + 1;
        if (resultado > producto.stock) {
            return;
        } else {
            setValue(value + 1);
        }
    }

    return (
        <Grid container>
            <Grid className='flex' item xs={3}>
                <IconButton onClick={ () => { handleClickRestarCantidad() }} color="primary" component="span">
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </Grid>
            <Grid className='flex' item xs={6}>
                <Input
                    value={value}
                    variant='standard'
                    disableUnderline
                    inputProps={{
                        readOnly: true,
                        style: { textAlign: 'center' }
                    }}
                />
            </Grid>
            <Grid className='flex' item xs={3}>
                <IconButton onClick={ () => { handleClickSumarCantidad() } } color="primary" component="span">
                    <AddCircleOutlineIcon />
                </IconButton>
            </Grid>
            <Grid className='flex' item xs={12}>
                <Button color="primary" disabled={value === 0}  onClick={ () => { handleClickAddToCart() } }>
                    Agregar al carrito
                </Button>
            </Grid>
        </Grid>
    )
}

export default ItemCount