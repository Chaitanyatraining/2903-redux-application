import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/product-actions/ProductActions'

 const Cart = () => {
    // const [total, setTotal] = useState(0)
    // we have a hook to access the redux store state -- useSelector hook
    const cart_data = useSelector((state) => state.ProductsData.cartData)
    const dispatch = useDispatch()
    console.log(cart_data)

    const totalPrice = cart_data.reduce((prevsValue, currentValue) => {
      return prevsValue + currentValue.price
    }, 0)

  return (
    <div>
        <h2>Cart</h2>
        <div>
            <h3>Total Price: {totalPrice}</h3>
        </div>
        <div className='container mt-2 border border-dark'>
        {cart_data && cart_data.length ? (
          cart_data.map((product) => (
            <div className='row border'>
                    <div className='col-md-4'>
                      <div className=''>
                      <img src={product.image} className='img img-fluid h-50' />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <h4 className='mt-3'>{product.title}</h4>
                      <h3 className='bg-secondary text-white'>{product.category}</h3>
                      <p>{product.description}</p>
                    </div>
                    <div className='col-md-2'>
                      <div>Price: {product.price}</div>
                      <div>
                        <button className='btn btn-danger'
                        onClick={()=>{dispatch(removeFromCart(product.id))}}
                        >Remove</button>
                      </div>
                    </div>
            </div>
          ))
        ): <p>Please add some products to the cart</p>}
        </div>

    </div>
  )
}

export default Cart
