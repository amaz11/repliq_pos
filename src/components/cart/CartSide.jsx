import React, { useState } from 'react'

// components
import Topbar from '../navigationBar/Cartbar/Topbar'
import Sidebar from '../navigationBar/Cartbar/Sidebar'
import Table from '../table/Table';

// icons
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegHandBackFist } from "react-icons/fa6";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { FaAmazonPay } from "react-icons/fa";

const CartSide = () => {
    const [sidebarShow, setsidebarShow] = useState(false)
    return (
        <div>
            <Topbar setsidebarShow={setsidebarShow} />
            <Sidebar sidebarShow={sidebarShow} setsidebarShow={setsidebarShow} />
            <div className='px-4 pt-3'>
                <div className='flex items-center justify-between px-4 py-3 rounded bg-[#E7E9F6] text-[#5C6AC4]'>
                    <div className='flex items-center gap-2'>
                        <IoPersonCircleOutline size={28} />
                        <span className='font-semibold text-lg'>Steve Jobs</span>
                    </div>
                    <GoPlusCircle className='cursor-pointer' size={28} />
                </div>
                <Table />
                <div className='my-3 flex items-center justify-between flex-wrap gap-4'>
                    <button className='flex gap-3 cursor-pointer items-center justify-center bg-red-200 py-3 px-4 rounded text-red-600 grow'>
                        <RxCrossCircled size={28} />
                        <span className='font-semibold text-xl'>Cancel</span>
                    </button>

                    <button className='flex gap-3 cursor-pointer items-center justify-center py-3 px-4 rounded bg-[#E7E9F6] text-[#5C6AC4] grow'>
                        <FaRegHandBackFist size={28} />
                        <span className='font-semibold text-xl'>Hold</span>
                    </button>

                    <button className='flex gap-3 cursor-pointer items-center justify-center py-3 px-4 rounded bg-[#E7E9F6] text-[#5C6AC4] grow'>
                        <TbShoppingBagDiscount size={28} />
                        <span className='font-semibold text-xl'>Discount</span>
                    </button>

                    <button className='flex gap-3 cursor-pointer items-center justify-center py-3 px-4 rounded bg-[#E7E9F6] text-[#5C6AC4] grow'>
                        <FaAmazonPay size={28} />
                        <span className='font-semibold text-xl'>Pay Now</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CartSide