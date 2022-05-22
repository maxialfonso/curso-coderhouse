import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { fetchItems } from '../../services/fetch/fetchItems';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {
  const [producto, setProducto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [mensajeError, setMensajeError] = useState("PROBLEMAS PARA MOSTRAR ESTE ITEM. INTENTE MAS TARDE...");

  function fetchProducto() {
    setLoading(true);
    setError(false);

    const productPromise = fetchItems("14");
    
    productPromise
      .then((resultado) => {
        if (typeof resultado === 'object') {
          setProducto(resultado)
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
    fetchProducto();
  }, [])

  if (error) { return (<>{mensajeError}</>) }

  return (
    <>
      {loading && "Loading..."}
      {producto && <>
        <Container>
          <ItemDetail producto={producto} />
        </Container>
      </>}

    </>
  )
}

export default ItemDetailContainer