import React, { useContext, useState } from 'react'
import { Divider, Paper, Typography, Button } from '@mui/material';
import { CartContext } from "../../contexts/CartContext/CartContext";
import "./checkout.css";

import { newOrder } from "../../services/fetch/fetchOrders.js"


function Checkout() {

    const { getPriceTotal, getCantidadUnidadesEnCarro, clearCart, cart } = useContext(CartContext)
    const [disabled, setDisabled] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);

        const myOrder = {
            buyer: {
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value
            },
            items: cart,
            total: getPriceTotal()
        }

        const orderId = await newOrder(myOrder);

        clearCart();

        alert(`Orden confirmada: ${orderId}`);
    }
    

    return (
        <Paper className='paper' elevation={4} >
            <div className="parrafoPaper">
                <Typography variant="h6" >
                    Subtotal
                </Typography>
                <Typography variant="subtitle1" >
                    $ {getPriceTotal()}
                </Typography>
            </div>
            <div className="parrafoPaper">
                <Typography variant="h6" >
                    Envío&nbsp;
                    <Typography variant="caption" >
                        ({getCantidadUnidadesEnCarro()} unidades)
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" >
                    (Sin Cargo)
                </Typography>
            </div>
            <div className="parrafoPaper">
                <Typography variant="h6" >
                    Total
                </Typography>
                <Typography variant="subtitle1" >
                    $ {getPriceTotal()}
                </Typography>
            </div>
            <Divider />
            <div className='divDatos'>
                <Typography variant="h6" > Formulario para envío  </Typography>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder='Nombre completo' className='inputCustom' required />
                    <input type="email" name="email" placeholder='Email' className='inputCustom' required />
                    <input type="tel" name="phone" placeholder='Teléfono' className='inputCustom' required />

                    <div className='divBtn'>
                        <Button variant="contained" type='submit' disabled={disabled} >Finalizar compra</Button>
                    </div>
                </form>

            </div>
        </Paper>
    )
}

export default Checkout