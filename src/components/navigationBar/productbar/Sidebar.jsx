import React, { useEffect, useState } from 'react'
//icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import CategorySkeleton from '../../skeleton/categorySkeleton';



const Sidebar = ({ setCategory, setCurrentPage }) => {
    const [isloading, setIsloading] = useState(false)
    const [categoryListShow, setCategoryListShow] = useState(false)
    const [activeId, setActiveId] = useState('allcat')
    const [data, setData] = useState([])
    const getCategoryList = async () => {
        try {
            setIsloading(true)
            const res = await fetch('https://api.escuelajs.co/api/v1/categories', {
                method: 'GET',
            })
            const data = await res.json()
            setData(data)
            setIsloading(false)
        } catch (error) {

        }
    }

    useEffect(() => {
        getCategoryList()
    }, [])

    return (
        <div >
            <div className='flex gap-4 lg:justify-between items-center flex-wrap'>
                <button className={`py-2 px-3 ${activeId === 'allcat' ? 'border-2 text-[#5C6AC4] border-[#5C6AC4]' : 'border border-slate-500 text-slate-700'} rounded font-semibold grow`} onClick={() => {
                    setActiveId('allcat')
                    setCategory('')
                    setCurrentPage(0)
                }}>
                    All Category
                </button>
                {
                    isloading ? Array(4).fill(1).map((item, index) => <CategorySkeleton key={index} />) : data?.map((item, index) => {
                        if (index <= 4) {
                            return <button key={item.id} className={`py-2 px-3 ${activeId === item.id ? 'border-2 text-[#5C6AC4] border-[#5C6AC4]' : 'border border-slate-500 text-slate-700'} rounded font-semibold grow`} onClick={() => {
                                setActiveId(item.id)
                                setCategory(item.id)
                            }}>
                                {item.name}
                            </button>

                        } else {
                            return
                        }
                    })

                }
                <BsThreeDotsVertical className='cursor-pointer' size={24} onClick={() => setCategoryListShow(!categoryListShow)} />
            </div>

            <div className={`bg-white fixed ${categoryListShow ? '' : "-mr-[450px]"} w-72  sm:w-80 md:w-96 top-0 right-0 h-full z-30 py-4 px-8 transition-all duration-500`}>
                <div className='absolute top-2 -left-8 text-white'><RxCross2 size={30} className='cursor-pointer' onClick={() => setCategoryListShow(!categoryListShow)} /></div>
                <h2 className='font-semibold text-3xl text-center mb-8'>Categories</h2>
                <div className='flex items-center flex-wrap gap-4'>
                    {

                        isloading ? Array(4).fill(1).map((item, index) => <CategorySkeleton key={index} />) : data?.map((item, index) => <button key={item.id} className={`py-2 px-3 ${activeId === item.id ? 'border-2 text-[#5C6AC4] border-[#5C6AC4]' : 'border border-slate-500 text-slate-700'} rounded font-semibold grow`} onClick={() => setActiveId(item.id)}>
                            {item.name}
                        </button>

                        )
                    }
                </div>

            </div>
            {categoryListShow ? <div className='absolute top-0 left-0 w-full h-full bg-[#B8BBBF] opacity-70 z-20' onClick={() => setCategoryListShow(!categoryListShow)}></div> : null}
        </div>
    )
}

export default Sidebar