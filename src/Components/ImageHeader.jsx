import React from 'react'
import image from '../Assets/Header.jpg'
const ImageHeader = ({
  activeImage,
}) => {
  return (
    <div
      style={{
        height: '50vh',
        backgroundColor: 'gray',
      }}
    >
      <img src={activeImage} alt='header'
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  )
}

export default ImageHeader