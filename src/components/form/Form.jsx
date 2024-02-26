import React from 'react'

const Form = () => {
    return (
        <>
            <form action="" className='mt-8'>
                <div className='mb-6'>
                    <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2 text-lg' placeholder='Name' />
                </div>
                <div className='mb-6'>
                    <input type="email" className='w-full focus:outline-none focus:border-slate-500 border-b-2 text-lg' placeholder='Email' />
                </div>
                <div className='mb-6'>
                    <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2 text-lg' placeholder='Phone' />
                </div>
                <div className='mb-6'>
                    <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2 text-lg' placeholder='Curency' />

                </div>
                <div className='relative mb-6'>
                    <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2 text-lg' placeholder='TAX ID' />
                    <FaAngleDown className='top-2 right-2 absolute text-slate-400' size={18} />
                </div>
                <div className='flex items-center gap-4 mb-12 font-medium text-[#3674D9] text-lg'>
                    <FaPlus />
                    <span>Add More Details</span>
                </div>

                <button className='bg-[#3674D9] mb-6 py-4 w-full font-medium text-2xl text-white'>Update</button>
            </form>
        </>
    )
}

export default Form