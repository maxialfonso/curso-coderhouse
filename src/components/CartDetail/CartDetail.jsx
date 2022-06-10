import React, { useContext } from 'react'
import { Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, tableCellClasses } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../contexts/CartContext/CartContext';
import "./cartDetail.css"

const CartDetail = () => {

    const { cart, removeToCart } = useContext(CartContext);

    return (
        <>
            <TableContainer sx={{ minWidth: 650 }} >
                <Table
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                            borderBottom: "none"
                        }
                    }}
                >
                    <TableHead className='tableHead'>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="center">Precio</TableCell>
                            <TableCell align="center">Cantidad</TableCell>
                            <TableCell align="center">Subtotal</TableCell>
                            <TableCell align="center">Acción</TableCell>
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
                                <TableCell align="right">$ {item.price}</TableCell>
                                <TableCell align="center">{item.cantidad}</TableCell>
                                <TableCell align="right">$ {item.subtotal}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => { removeToCart(item.id) }}
                                    >
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CartDetail