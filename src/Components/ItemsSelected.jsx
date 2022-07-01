import React from 'react'

const ItemsSelected = ({ title }) => {
  const items = new Array(4).fill(
    <div
      style={{
        height: '350px',
        width: '280px',
        backgroundColor: 'gray',
      }}></div>
  )
  return (
    <div
      style={{
        marginTop: '100px'
      }}
      className='itemsSelected'
    >
    <p
      style={{
        textAlign: 'center',
        margin: '0 auto',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#17559b'

      }}
    >{title}</p>
    <div
      style={{
        marginTop: '10px',
        height: '30vh',
        width: '100vw',
        padding: '20px',        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '5px',
        

      }}
    >      
      {
      items.map((item, index) => {
        return <div key={index}>{item}</div>
      }
      )
    }</div>
    </div>
  )
}

export default ItemsSelected