import React from "react"
import AdditionalOptions from "./Components/AdditionalOptions"
import Footer from "./Components/Footer"
import GridOptions from "./Components/GridOptions"
import ImageHeader from "./Components/ImageHeader"
import ImageSelectors from "./Components/ImageSelectors"
import ItemsSelected from "./Components/ItemsSelected"
import NavBar from "./Components/NavBar"
import ProductSelect from "./Components/ProductSelect"
import HeaderImage from "./Containers/HeaderImage"

function App() {
  return (
    <>
      <NavBar/>
      <HeaderImage>
        <ImageHeader/>
        <ImageSelectors />
        <ItemsSelected title={'NUEVA COLECCION'} />
      </HeaderImage>
      <GridOptions/>
      <ProductSelect/>
      <AdditionalOptions />
      <ItemsSelected title={'AYUDAS PARA LA MARCHA'} />
      <ItemsSelected title={'TERAPIAS RESPIRATORIAS'} />
      <Footer/>
    </>
  )
}

export default App
