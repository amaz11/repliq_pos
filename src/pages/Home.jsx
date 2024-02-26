import React, { useContext } from 'react'
import CartSide from '../components/cart/CartSide'
import ProductSide from '../components/products/ProductSide'
import { CartContextCreate } from '../hoc/cartContext'
import PaymentSide from '../components/payment/PaymentSide'

const Home = () => {
    const { pay, setPay } = useContext(CartContextCreate)

    return (
        <div className='flex flex-col-reverse lg:flex-row'>
            <div className='lg:w-1/2  h-full'>
                <CartSide />
            </div>
            <div className='lg:w-1/2 bg-[#F4F6F8] '>
                {
                    pay ? <PaymentSide /> : <ProductSide />
                }
            </div>
        </div>
    )
}

export default Home