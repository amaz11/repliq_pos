import React, { useContext } from 'react'

// Context api
import { CartContextCreate } from '../../hoc/cartContext'

// image
import errorImage from "../../assets/504708-200.png"

const ProductCard = ({ item }) => {
    const { addToCart } = useContext(CartContextCreate)
    const imageOnError = (event) => {
        event.currentTarget.src = errorImage;
    }
    return (
        <div className='border rounded group'>
            <div className='relative'>
                <img className='rounded-t w-full' src={item.category.image} onError={imageOnError} loading='lazy' alt="img" />
                <button className='group-hover:block top-1/2 left-1/2 z-10 absolute hidden bg-[#E7E9F6] px-2 py-2 rounded font-medium text-[#5C6AC4] text-xs transform -translate-x-1/2 -translate-y-1/2' onClick={() => addToCart(item)} >Add To Cart</button>
                <div className='group-hover:block top-0 left-0 absolute hidden bg-slate-300 opacity-50 w-full h-full'>
                </div>
            </div>
            <div className='text-center'>
                <p className='p-1 border-b font-semibold text-lg text-slate-600'>${item.price}</p>
                <p className='px-2 p-1 font-semibold text-lg text-slate-600 truncate'>{item.title}</p>
            </div>
        </div>
    )
}

export default ProductCard