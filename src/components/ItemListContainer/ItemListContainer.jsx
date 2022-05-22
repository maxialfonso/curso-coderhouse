import { Container } from '@mui/system'
import React from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {

  return (
      <Container>
        <p>{greeting}</p>
        <ItemList />
      </Container>
  )
}

export default ItemListContainer