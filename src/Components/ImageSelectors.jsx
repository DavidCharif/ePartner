import React from 'react'

const ImageSelectors = () => {
  // Create array 7 elements
  const images = new Array(7).fill(
    <div 
      style={{
        height: '150px',
        width: '300px',
        backgroundColor: 'gray',
      }}
    >
    </div>
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20px',
        gap: '10px',
        width: '100vw',
        overflowX: 'scroll',
        backgroundColor: 'black',
      }}
    >
      {images.map((image, index) => {
        return <div key={index}>{image}</div>
      })}
    </div>
  )
}
export default ImageSelectors