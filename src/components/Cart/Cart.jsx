import { Grid, Box, Button } from '@mui/material';
import React, { useContext } from 'react';
import CartDetail from '../../components/CartDetail/CartDetail';
import Checkout from '../../components/Checkout/Checkout';
import "./cart.css";
import { CartContext } from '../../contexts/CartContext/CartContext';


function Cart() {

    const { clearCart } = useContext(CartContext);


    return (
        <Box sx={{ paddingTop: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}> </Grid>
                <Grid item xs={5}>
                    <Button variant="contained" onClick={()=>{clearCart()}}>Vaciar carrito</Button>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                    <CartDetail />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <Checkout />
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Box>
    )
}

export default Cart