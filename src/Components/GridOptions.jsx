import React from 'react'
import { GridStyled } from '../Styles/GridStyled'

import image1 from '../Assets/grid1.jpg'
import image2 from '../Assets/grid2.jpg'
import image3 from '../Assets/grid3.jpeg'
import image4 from '../Assets/grid4.jpg'
import image5 from '../Assets/grid5.jpg'


const GridOptions = () => {
  return (
    <GridStyled>
      <div className="left">
        <div className="left-top">
          <div className="left-top-left hover">
            <img src={image1} alt='header'/>
            <p>Por que elegirnos</p>
          </div>
          <div className="left-top-right hover">
            <img src={image2} alt='header'/>
            <p>Tienda surtida</p>
          </div>
        </div>
        <div className="left-bottom">
          <div className="left-bottom-left hover">
            <img src={image3} alt='header'/>
            <p>Usuario interesado</p>
          </div>
          <div className="left-bottom-right hover">
            <img src={image4} alt='header'/>
            <p>servicio integral</p>
          </div>
        </div>
      </div>
      <div className="right hover">
        <img src={image5} alt='header'/>
        <p>Gente informada</p>
      </div>
    </GridStyled>
  )
}

export default GridOptions