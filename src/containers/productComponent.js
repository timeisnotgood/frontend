import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector((state)=>state.allproducts.products)

    const dout = products.map((products)=>{
        const {id, title, price, category, image} = products
        return(
            <div className='four column wide' key={id} >
            <Link to={`/product/${id}`} >

              <div className='ui link cards' >
                  <div className='card' >
                      <div className='image'  >
                        <img src={image} alt={title} />
                      </div>
                      <div className='content' >
                          <div className='header' >{title}</div>
                          <div className='meta price' >{category}</div>
                          <div className='meta' >{price}</div>
                      </div>
                  </div>
              </div>
            </Link>
          </div>
        )
    })


  return (
    <>{dout}</>
  )
}

export default ProductComponent
