import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { FaAmazonPay } from "react-icons/fa";

const CardForm = () => {
    return (
        <form action="" className='mt-8'>
            <div className='flex flex-col justify-between gap-60'>
                <div>
                    <div className='mb-6'>
                        <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2  text-lg' placeholder='Card Name' />
                    </div>
                    <div className='mb-6'>
                        <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2  text-lg' placeholder='Card Number' />
                    </div>
                    <div className='mb-6'>
                        <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2  text-lg' placeholder='Card Expire Date' />
                    </div>
                    <div className='mb-6'>
                        <input type="text" className='w-full focus:outline-none focus:border-slate-500 border-b-2  text-lg' placeholder='Card Screet' />
                    </div>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <button className='font-semibold flex gap-3 cursor-pointer items-center justify-center bg-red-200 py-3 px-4 rounded text-red-600'> <RxCrossCircled size={28} />Cancle</button>
                    <button onClick={() => setPay(!pay)} className='flex gap-3 cursor-pointer items-center justify-center py-3 px-4 rounded bg-blue-600 text-white grow'>
                        <FaAmazonPay size={28} />
                        <span className='font-semibold text-xl' >Complete Payment</span>
                    </button>
                </div>
            </div>

        </form>
    )
}

export default CardForm