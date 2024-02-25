import React from 'react'
import { PiBarcodeLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
const Topbar = () => {
    return (
        <div className='flex gap-4 justify-between items-center px-5 py-3 shadow'>
            <div className='flex items-center gap-4 '>
                <IoSearchOutline size={28} />
                <input type="text" placeholder='Search Products...' className='focus:outline-none text-xl py-2' />
            </div>
            <div>
                <PiBarcodeLight size={28} />
            </div>
        </div>
    )
}

export default Topbar