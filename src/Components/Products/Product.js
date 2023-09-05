import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addToCart } from '../../redux/product-actions/ProductActions'
import { useDispatch } from 'react-redux'

 const Product = () => {
    const [product, setproduct] = useState({})
    const [isProductAdded, setIsProductAdded] = useState(false)
    const {id} = useParams();
    const dispatch = useDispatch()

    const getProductData = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setproduct(data)
    } 

    useEffect(()=>{
        getProductData()
    }, [])
    //array.length
    // for object to the data is available or not we use Object.keys
  return (
    <>
    <h2>Product Page</h2>
    <div className='container'>
        {
            Object.keys(product).length ? (
                <div className='row border'>
                    <div className='col-md-6 p-5'>
                        <div>
                            <img src={product.image} className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                    <div className='mt-4'>
                            <h3>{product.title}</h3>
                        </div>
                       
                       
                        <div className='mt-4'>
                            <span className='bg-primary p-2 text-white'>price: {product.price}</span>
                        </div>
                        <div className='mt-4'>
                            <h3 className='bg-secondary p-2 text-white'>{product.category}</h3>
                        </div>
                        <div className='mt-4'>
                            <p>{product.description}</p>
                        </div>
                        <div>
                            <button className='btn btn-primary'
                            onClick={()=>{
                                dispatch(addToCart(product))
                                setIsProductAdded(true)
                            }}
                            >{isProductAdded ? "Added" : "Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            ) : <p>loading...</p> 
        }
    </div>
    </>
  )
}
export default Product