import React from 'react'

const ProductCard = ({dt}) => {
  return (
    <div className='product-card'>
      <img src={dt?.url}/>
      <div className='altmetin'>
        {dt.name}
        {dt.price}
      </div>
      </div>
  )
}

export default ProductCard