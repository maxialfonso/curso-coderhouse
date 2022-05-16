import React from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <>
            <IconButton size="large" aria-label="show 4 new mails" sx={{color:"white"}}>
                <Badge badgeContent={4} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    )
}

export default CartWidget