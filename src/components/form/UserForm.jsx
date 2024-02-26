import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
const UserForm = () => {
    return (
        <form action="" className='mt-8'>
            <div className='mb-6'>
                <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2  text-lg' placeholder='Name' />
            </div>
            <div className='mb-6'>
                <input type="email" className='w-full focus:outline-none focus:border-slate-500 border-b-2  text-lg' placeholder='Email' />
            </div>
            <div className='mb-6'>
                <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2  text-lg' placeholder='Phone' />
            </div>
            <div className='mb-6'>
                <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2  text-lg' placeholder='Curency' />

            </div>
            <div className='mb-6 relative'>
                <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2  text-lg' placeholder='TAX ID' />
                <FaAngleDown className='text-slate-400 absolute right-2 top-2' size={18} />
            </div>
            <div className='mb-12 flex items-center gap-4 text-[#3674D9] font-medium text-lg'>
                <FaPlus />
                <span>Add More Details</span>
            </div>

            <button className='bg-[#3674D9] w-full text-white text-2xl font-medium py-4 mb-6'>Update</button>
        </form>
    )
}

export default UserForm