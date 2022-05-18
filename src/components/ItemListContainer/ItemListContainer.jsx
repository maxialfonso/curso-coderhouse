import { Box } from '@mui/material'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = ({ saludo }) => {
  return (
    <>
      <p>{saludo}</p>
      <Box sx={{ width: "170px" }}>
        <ItemCount stock={10} init={5}/>
      </Box>
    </>
  )
}

export default ItemListContainer