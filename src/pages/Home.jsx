import React from 'react'
import CartSide from '../components/cart/CartSide'
import ProductSide from '../components/products/ProductSide'

const Home = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row'>
            <div className='lg:w-1/2'>
                <CartSide />
            </div>
            <div className='lg:w-1/2'>
                <ProductSide />
            </div>
        </div>
    )
}

export default Home