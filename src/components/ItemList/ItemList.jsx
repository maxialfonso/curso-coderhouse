import React from 'react';
import { Grid } from '@mui/material';
import Item from '../Item/Item';

export default function ItemList({productos}) {

    return (
        <>
            <Grid sx={{ flexGrow: 1 }} container>
                <Grid container justifyContent="flex-start" rowSpacing={6}>
                    {productos.map((producto) => (
                        <Grid item key={producto.id} xs={4}>
                            <Item producto={producto}></Item>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}
