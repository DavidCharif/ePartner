import React from 'react'
import { GridStyled } from '../Styles/GridStyled'

const GridOptions = () => {
  return (
    <GridStyled>
      <div className="left">
        <div className="left-top">
          <div className="left-top-left">
            <p>Por que elegirnos</p>
          </div>
          <div className="left-top-right">
            <p>Tienda surtida</p>
          </div>
        </div>
        <div className="left-bottom">
          <div className="left-bottom-left">
            <p>Usuario interesado</p>
          </div>
          <div className="left-bottom-right">
            <p>servicio integral</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div>Gente informada</div>
      </div>
    </GridStyled>
  )
}

export default GridOptions