import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { fetchItems } from '../../services/fetch/fetchItems';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  const {categoryName} = useParams();
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState("NO PODEMOS MOSTRAR EL LISTADO. INTENTE MAS TARDE...");

  function fetchProductos() {
    setLoading(true);
    setError(false);

    const productsPromise = fetchItems({categoryName});
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
  }, [categoryName])

  if (error) { return (<>{mensajeError}</>) }

  return (
    <main>
      {loading && "Loading..."}
      <Container>
        <p>{greeting}</p>
        <ItemList productos={productos} />
      </Container>
    </main>
  )
}

export default ItemListContainer