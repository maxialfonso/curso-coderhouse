//@ts-check
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import "./itemDetailContainer.css"
import { fetchItems } from '../../services/fetch/fetchItems';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {
  //Estados
  const [producto, setProducto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [mensajeError, setMensajeError] = useState("PROBLEMAS PARA MOSTRAR ESTE ITEM. INTENTE MAS TARDE...");

  //Param Route
  let { id } = useParams();

  //UseEffect
  useEffect(() => {

    function fetchProducto() {
      setLoading(true);
      setError(false);

      const productPromise = fetchItems({ id });

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

    fetchProducto();

  }, [id]);

  if (error) { return (<>{mensajeError}</>) }

  return (
    <main>
      {loading &&
        <Container>
          <Spinner />
        </Container>
      }
      {producto && <>
        <Container>
          <ItemDetail producto={producto} />
        </Container>
      </>}
    </main>
  )
}

export default ItemDetailContainer