import React from 'react'
import { PiBarcodeLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
const Topbar = () => {
    return (
        <div className='flex justify-between items-center bg-white shadow-md px-2 md:px-5 py-3'>
            <div className='flex items-center gap-4'>
                <IoSearchOutline size={28} />
                <input type="text" placeholder='Search Products...' className='focus:outline-none py-2 text-xl' />
            </div>
            <div>
                <PiBarcodeLight size={28} />
            </div>
        </div>
    )
}

export default Topbar