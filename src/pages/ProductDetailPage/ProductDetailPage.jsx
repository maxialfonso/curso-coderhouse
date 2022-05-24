import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'

export default function ProductDetailPage() {

    const { id } = useParams();

    return (
        <main>
            <ItemDetailContainer id={id} />
        </main>
    )
}
