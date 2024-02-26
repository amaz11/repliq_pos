import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { FaAmazonPay } from "react-icons/fa";

const CardForm = () => {
    return (
        <form action="" className='mt-8'>
            <div className='flex flex-col justify-between gap-60'>
                <div>
                    <div className='mb-6'>
                        <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2 text-lg' placeholder='Card Name' />
                    </div>
                    <div className='mb-6'>
                        <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2 text-lg' placeholder='Card Number' />
                    </div>
                    <div className='mb-6'>
                        <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2 text-lg' placeholder='Card Expire Date' />
                    </div>
                    <div className='mb-6'>
                        <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2 text-lg' placeholder='Card Screet' />
                    </div>
                </div>
                <div className='flex flex-wrap items-center gap-4'>
                    <button className='flex justify-center items-center gap-3 bg-red-200 px-4 py-3 rounded font-semibold text-red-600 cursor-pointer grow'> <RxCrossCircled size={28} />Cancle</button>
                    <button onClick={() => setPay(!pay)} className='flex justify-center items-center gap-3 bg-blue-600 px-4 py-3 rounded text-white cursor-pointer grow'>
                        <FaAmazonPay size={28} />
                        <span className='font-semibold text-sm sm:text-base md:text-xl' >Complete Payment</span>
                    </button>
                </div>
            </div>

        </form>
    )
}

export default CardForm