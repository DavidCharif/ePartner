import React from 'react'
import { AdditionalOptionsStyled } from '../Styles/AdditionalOptions'
import aditional1 from '../Assets/aditional1.jpg'
import aditional2 from '../Assets/aditional2.jpg'

const AdditionalOptions = () => {
  return (
    <AdditionalOptionsStyled>
      <div>
        <img src={aditional1} alt='aditional1'/>
      </div>
      <div>
        <img src={aditional2} alt='aditional2'/>
      </div>
    </AdditionalOptionsStyled>
  )
}

export default AdditionalOptions