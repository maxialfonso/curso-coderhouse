// import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
// import Item from '../Item/Item'
import ItemList from '../ItemList/ItemList'



const ItemListContainer = ({ saludo }) => {

  return (
      <Container>
        <p>{saludo}</p>
        <ItemList />
      </Container>
  )
}

export default ItemListContainer