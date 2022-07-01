import React from 'react'
import { ProductSelectStyled } from '../Styles/ProductSelectStyled'
import ItemsSelected from './ItemsSelected'
import image1 from '../Assets/headerSelected1.jpg'
import image2 from '../Assets/headerSelected2.jpg'
import image3 from '../Assets/headerSelected3.jpg'
const ProductSelect = () => {
  const [selectedItems, setSelectedItems] = React.useState('1')
  const [title, setTitle] = React.useState(getTitle(selectedItems))
  const [image, setImage] = React.useState(image1)


 React.useEffect(() => {
    setTitle(getTitle(selectedItems))   
  }
  , [selectedItems])
  
  const handleClick = ({target:{value}}) => {
    if(typeof value !== 'string'){
      return console.log('error')
    }
    setSelectedItems(value)  
    setImage(getImage(value)) 
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
      <div className="backgroundImage">
        <img src={image} alt='header'
           style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
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
function getImage(num) {
  switch(num){
    case '1':
      return image1
    case '2':
      return image2
    case '3':
      return image3
    default:
      console.log('error')
}
}


