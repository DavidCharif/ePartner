import React from "react";
import { ImageSelectorsStyled } from "../Styles/ImageSelectors";

const ImageSelectors = ({ images, setActiveImage }) => {
  // Create array 7 elements
  const imagesContainer = new Array(7).fill(
   ''
  );
  const [check , setCheck] = React.useState(false);
  
  const handleClick = ({target : { value }}) => {
    setCheck(true)
    console.log(images[value]);
    setActiveImage(images[value].src);
  }
  React.useEffect(() => {
    if(check){
      return 
    } else {
    let i = 1
    let interval = setInterval(() => {
      if(i < images.length){
      setActiveImage(images[i].src);
      i++;
      } else {
        setActiveImage(images[0].src);
        i = 0;
      }
    }    
    
    , check ? 6000 : 3000);
    console.log(i);    
    return () => clearInterval(interval);
  }
  }, []);

      

  return (
    <ImageSelectorsStyled>
      {images.map((image, index) => {
        return (
          <div
            className="imageContainer"
            key={index}            
            
          >
            <button type="button" value={index} onClick={handleClick} >
            <img src={image.src} alt={image.alt}              
            />
            </button>
            <p>{image.title}</p>

          </div>
        );
      })}
    </ImageSelectorsStyled>
  );
};
export default ImageSelectors;
