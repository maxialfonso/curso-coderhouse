import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Item from '../Item/Item';
import { fetchItems } from '../../services/fetch/fetchItems';


export default function ItemList() {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [mensajeError, setMensajeError] = useState("NO PODEMOS MOSTRAR EL LISTADO. INTENTE MAS TARDE...");

    function fetchProductos() {
        setLoading(true);
        setError(false);

        const productsPromise = fetchItems();
        productsPromise
            .then((resultado) => {
                if (Array.isArray(resultado)) {
                    setProductos(resultado)
                } else {
                    throw new Error("Problema con el tipo de elemento");
                }
            })
            .catch((error) => {
                setError(true);
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchProductos();
    }, [])

    if (error) { return (<>{mensajeError}</>) }

    return (
        <>
            {loading && "Loading..."}
            <Grid sx={{ flexGrow: 1 }} container>
                <Grid item xs={12}>
                    <Grid container justifyContent="flex-start" rowSpacing={6}>
                        {productos.map((producto) => (
                            <Grid item key={producto.id} xs={4}>
                                <Item producto={producto}></Item>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
