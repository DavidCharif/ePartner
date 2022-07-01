import React from 'react'
import { ProductSelectStyled } from '../Styles/ProductSelectStyled'
import ItemsSelected from './ItemsSelected'

const ProductSelect = () => {
  return (
    <ProductSelectStyled>
      <div className="nav">
        <button type='button'>
          Silla de ruedas
        </button>
        <button type='button'>
          Terapia en el hogar
        </button>
        <button type='button'>
          Movilidad
        </button>
      </div>
      <div className="backgroundImage"></div>
      <ItemsSelected title={'SILLA DE RUEDAS'} />
    </ProductSelectStyled>
  )
}

export default ProductSelect