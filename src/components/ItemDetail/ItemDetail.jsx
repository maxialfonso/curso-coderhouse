import React, { useContext, useState } from 'react';
import { CardMedia, Divider, Typography, Box, Rating } from '@mui/material';
import { Container } from '@mui/system';

import "./itemDetail.css";

import ItemCount from "../ItemCount/ItemCount";
import BtnFinalizarCompra from '../BtnFinalizarCompra/BtnFinalizarCompra';
import { CartContext } from '../../contexts/CartContext/CartContext';

export default function ItemDetail({ producto }) {

    const { addToCart } = useContext(CartContext)

    const [visibility, setVisibility] = useState(true);

    function onAdd(item, value) {
        addToCart(item, value);
        setVisibility(false);
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: "2rem",
                }}
            >
                <Box className="gridImagen">
                    <CardMedia
                        component="img"
                        image={producto.url}
                        alt={producto.name}
                        sx={{ width: 400 }}
                    />
                </Box>

                <Box className="gridDetalles">
                    <Box
                        sx={{
                            display: 'flex',
                            gap: "1rem",
                            width: 'fit-content',
                            bgcolor: 'background.paper',
                            color: 'text.secondary',
                        }}>

                        <Typography variant="subtitle1" component="div"> {producto.type} </Typography>

                        <Divider orientation="vertical" flexItem variant="middle" />

                        <Typography variant="subtitle1" component="div"> {producto.category_label} </Typography>
                    </Box>

                    <Typography variant="h4" component="div"> {producto.name} </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: 'background.paper',
                            color: 'text.secondary',
                            gap: "1rem"
                        }}
                    >
                        <Rating defaultValue={2} size="small" readOnly />
                        
                         16 opiniones
                    </Box>

                    <Typography variant="body1" component="div"> {producto.description} </Typography>

                    <Typography variant="h3" component="div"> $ {producto.price} </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: "1rem",
                            width: 'fit-content',
                            bgcolor: 'background.paper',
                            color: 'text.secondary',
                        }}>

                        <Typography variant="subtitle1" component="div"> Stock Disponible</Typography>

                        <Divider orientation="vertical" flexItem variant="middle" />

                        <Typography variant="subtitle1" component="div"> {producto.stock} </Typography>
                    </Box>

                    <Container maxWidth="xs">
                        {visibility
                            ? <ItemCount producto={producto} init={0} onAdd={onAdd} />
                            : <BtnFinalizarCompra/>
                        }
                    </Container>

                </Box>
            </Box>
        </>
    )
}
