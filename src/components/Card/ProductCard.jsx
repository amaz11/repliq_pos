import React from 'react'

// image
import errorImage from "../../assets/504708-200.png"

const ProductCard = ({ item }) => {
    const imageOnError = (event) => {
        event.currentTarget.src = errorImage;
    }
    return (
        <div className='border rounded'>
            <div className=''>
                <img className='w-full rounded-t' src={item.images[1]} alt="img" onError={imageOnError} />
            </div>
            <div className='text-center'>
                <p className='text-slate-600 text-lg font-semibold border-b p-1'>${item.price}</p>
                <p className='text-slate-600 text-lg font-semibold p-1 truncate px-2'>{item.title}</p>
            </div>
        </div>
    )
}

export default ProductCard