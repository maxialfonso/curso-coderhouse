import React, { useContext } from 'react'

import {
    TableContainer, Table, TableHead,
    TableBody, TableRow, TableCell, tableCellClasses,
    Paper, Typography, Divider
} from '@mui/material';

import { CartContext } from '../../contexts/CartContext/CartContext';
import "./orderDetail.css"
import { Container } from '@mui/system';

const CartDetail = () => {

    const { cart } = useContext(CartContext);

    return (
        <>
            <Container sx={{ marginTop: 5, width: 600 }}>
                <Paper elevation={3}>

                    <Typography variant='h5' component='h2' sx={{ marginBottom: '10px', textAlign: "center", paddingTop: 1 }}>
                        Resumen de Orden N°: 14sd5f4s5df4s5dfsd45f4
                    </Typography>

                    <Divider/>

                    <TableContainer>
                        <Table
                            sx={{
                                [`& .${tableCellClasses.root}`]: {
                                    borderBottom: "none"
                                }
                            }}
                            size="small"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Precio</TableCell>
                                    <TableCell align="center">Cantidad</TableCell>
                                    <TableCell align="right">Subtotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <div className="imagenTitulo">
                                                <img className='imagen' src={item.url} alt={item.name} />
                                                {item.name}
                                            </div>
                                        </TableCell>
                                        <TableCell>$ {item.price}</TableCell>
                                        <TableCell align="center">{item.cantidad}</TableCell>
                                        <TableCell align="right">$ {item.subtotal}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    <Typography variant='h5' component='h2' sx={{ marginBottom: '10px', textAlign: "center", paddingTop: 1 }}>
                        Total:  $15251
                    </Typography>
                </Paper>
            </Container>
        </>
    )
}

export default CartDetail