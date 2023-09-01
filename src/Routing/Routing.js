import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Products } from '../Components/Products/Products'
import Product from '../Components/Products/Product'
import Cart from '../Components/cart/Cart'

function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default Routing