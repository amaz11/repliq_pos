import React, { useEffect, useState } from 'react'

// Components
import Topbar from '../navigationBar/productbar/Topbar'
import Sidebar from '../navigationBar/productbar/Sidebar'
import ProductCard from '../Card/ProductCard'
import SkeletonLoading from '../skeleton/skeletonLoading'

// icons 
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import ErrorMessage from '../error/ErrorMessage'

const ProductSide = () => {
    const [data, setData] = useState([])
    const [category, setCategory] = useState('')
    const [currentPage, setCurrentPage] = useState(0);
    const [isloading, setIsloading] = useState(false)
    const [iserror, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const getProduct = async () => {
        try {
            setIsloading(true)
            const res = await fetch(`https://api.escuelajs.co/api/v1/products/?offset=${currentPage}&limit=10&categoryId=${category}`, {
                method: 'GET',
            })
            const data = await res.json()
            setData(data)
            setIsloading(false)
        } catch (error) {
            setIsError(true)
            setErrorMessage(error.message)
            setTimeout(() => {
                setIsError(false)
            }, 5000);
        }
    }

    useEffect(() => {
        getProduct()
    }, [currentPage, category])

    return (
        <div>
            <Topbar />
            <div className='py-5 px-8 border-l border-l-slate-400 h-full'>
                <Sidebar setCategory={setCategory} setCurrentPage={setCurrentPage} />
                <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {isloading ? Array(10).fill(1).map((item, index) => <SkeletonLoading key={index} />) : data?.map(item => <ProductCard key={item.id} item={item} />)}
                </div>
                <div className='flex items-center gap-4 justify-center mt-4'>
                    <MdNavigateBefore size={28} className='text-[#5C6AC4] cursor-pointer' onClick={() => setCurrentPage(currentPage - 1)} />
                    <span className='text-slate-600 font-medium text-base'>{currentPage + 1}</span>
                    <MdNavigateNext size={28} className='text-[#5C6AC4] cursor-pointer ' onClick={() => setCurrentPage(currentPage + 1)} />
                </div>
            </div>
            <ErrorMessage iserror={iserror} setIsError={setIsError} errorMessage={errorMessage} />
        </div>
    )
}

export default ProductSide