import React, { useContext } from 'react'

// Context api
import { CartContextCreate } from '../../hoc/cartContext'

// image
import errorImage from "../../assets/504708-200.png"

const ProductCard = ({ item }) => {
    const { addToCart } = useContext(CartContextCreate)
    const imageOnError = (event) => {
        event.currentTarget.src = errorImage;
        console.log('imageError');
    }
    return (
        <div className='border rounded group'>
            <div className='relative'>
                <img className='w-full rounded-t' src={item.category.image} onError={imageOnError} loading='lazy' alt="img" />
                <button className='group-hover:block hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E7E9F6] text-[#5C6AC4] z-10 text-xs font-medium rounded py-2 px-2' onClick={() => addToCart(item)} >Add To Cart</button>
                <div className='group-hover:block hidden absolute top-0 left-0 h-full w-full bg-slate-300 opacity-50'>
                </div>
            </div>
            <div className='text-center'>
                <p className='text-slate-600 text-lg font-semibold border-b p-1'>${item.price}</p>
                <p className='text-slate-600 text-lg font-semibold p-1 truncate px-2'>{item.title}</p>
            </div>
        </div>
    )
}

export default ProductCard