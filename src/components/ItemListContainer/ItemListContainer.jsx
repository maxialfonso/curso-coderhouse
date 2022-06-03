import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { fetchItems } from '../../services/fetch/fetchItems';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = ({ greeting }) => {

  const { categoryKey } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState("NO PODEMOS MOSTRAR EL LISTADO. INTENTE MAS TARDE...");


  useEffect(() => {

    function fetchProductos() {
      setLoading(true);
      setError(false);

      const productsPromise = fetchItems({ categoryKey });
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

    fetchProductos();

  }, [categoryKey])

  if (error) { return (<>{mensajeError}</>) }

  return (
    <main>
      {loading &&
        <Container >
          <Spinner />
        </Container>
      }
      {!loading &&
        <Container>
        <p>{greeting}</p>
        <ItemList productos={productos} />
      </Container>
      }
      
    </main >
  )
}

export default ItemListContainer