import React from 'react'

const Product  = (data) => {

    const {product} =data

  return (
    <div className='p-5 bg-red-500'>
        <p>Name:{product.Name}</p>
         <p>Price:{product.Price}</p>
          <p>Stock Status:{product.Stock_Status}</p>

    </div>
  )
}

export default Product 