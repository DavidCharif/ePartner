import React from 'react'
import { ProductSelectStyled } from '../Styles/ProductSelectStyled'
import ItemsSelected from './ItemsSelected'

const ProductSelect = () => {
  const [selectedItems, setSelectedItems] = React.useState('1')
  const [title, setTitle] = React.useState(getTitle(selectedItems))


 React.useEffect(() => {
    setTitle(getTitle(selectedItems))   
  }
  , [selectedItems])
  
  const handleClick = ({target:{value}}) => {
    setSelectedItems(value)    
  }
  
  return (
    <ProductSelectStyled>
      <div className="nav">
        <button type='button' value={1} onClick={handleClick}>
          Silla de ruedas
        </button>
        <button type='button' value={2} onClick={handleClick}>
          Terapia en el hogar
        </button>
        <button type='button' value={3} onClick={handleClick}>
          Movilidad
        </button>
      </div>
      <div className="backgroundImage"></div>
      <ItemsSelected title={title} />
    </ProductSelectStyled>
  )
}

export default ProductSelect

function getTitle(num) {
  switch(num){
    case '1':
      return 'Silla de ruedas'
    case '2':
      return 'Terapia en el hogar'
    case '3':
      return 'Movilidad'
    default:
      console.log('error')
}
}

