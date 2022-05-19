import { Box } from '@mui/material'
import React from 'react'
import Item from '../Item/Item'



const ItemListContainer = ({ saludo }) => {
  return (
    <>
      <p>{saludo}</p>
        
      <Box sx={{ width: 1/5 }}>
        <Item id={1}/>
      </Box>
    </>
  )
}

export default ItemListContainer