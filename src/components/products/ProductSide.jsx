import React, { useEffect, useState } from 'react'

// Components
import Topbar from '../navigationBar/productbar/Topbar'
import Sidebar from '../navigationBar/productbar/Sidebar'
import ProductCard from '../Card/ProductCard'

const ProductSide = () => {
    const [data, setData] = useState([])
    const getProduct = async () => {
        try {
            const res = await fetch('https://api.escuelajs.co/api/v1/products/?offset=1&limit=10', {
                method: 'GET',
            })
            const data = await res.json()
            setData(data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div>
            <Topbar />
            <div className='py-5 px-8 border-l border-l-slate-400 h-full'>
                <Sidebar />
                <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {data?.map(item => <ProductCard key={item.id} item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default ProductSide