import React, { useContext } from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../contexts/CartContext/CartContext';

const CartWidget = () => {

    const { cart } = useContext(CartContext);

    return (
        <>
            <IconButton size="large" sx={{ color: "white" }}>
                <Badge badgeContent={String(cart.length)} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    )
}

export default CartWidget