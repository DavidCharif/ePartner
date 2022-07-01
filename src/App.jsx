import React from "react"
import GridOptions from "./Components/GridOptions"
import ImageHeader from "./Components/ImageHeader"
import ImageSelectors from "./Components/ImageSelectors"
import ItemsSelected from "./Components/ItemsSelected"
import NavBar from "./Components/NavBar"
import HeaderImage from "./Containers/HeaderImage"

function App() {
  return (
    <>
      <NavBar/>
      <HeaderImage>
        <ImageHeader/>
        <ImageSelectors />
        <ItemsSelected />
      </HeaderImage>
      <GridOptions/>
    </>
  )
}

export default App
