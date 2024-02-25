import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";
const Table = () => {
    return (
        <>
            <div className='mt-3'>
                <table className='w-full '>
                    <tbody className='group'>
                        {[1, 2, 3, 4, 5].map(item => <tr key={item} className=''>
                            <td className='w-10 px-1 py-2 text-slate-600'><FiEdit size={22} className='cursor-pointer' /></td>
                            <td className='border-t-2 border-l-2 border-b group:last:border-b-2 pl-2 rounded-tl text-slate-600 font-medium text-base'>Pure White shit</td>
                            <td className='border-t-2 text-center border-b group:last:border-b-2 text-slate-600 font-medium text-base'>Price</td>
                            <td className='border-t-2 border-b group:last:border-b-2'>
                                <div className='flex items-center justify-center gap-4 group:last:border-b-2 text-slate-600'>
                                    <GrSubtractCircle size={24} className='cursor-pointer' />
                                    <span className='text-slate-600 font-medium text-base'>1</span>
                                    <AiOutlinePlusCircle size={24} className='cursor-pointer' />
                                </div>
                            </td>
                            <td className='border-t-2 border-r-2 text-right pr-3 border-b group:last:border-b-2 text-slate-600 font-medium text-base'>price * quntity</td>
                            <td className='w-4 px-1 py-2 text-right text-red-500'><MdDeleteOutline size={24} className='cursor-pointer' /></td>
                        </tr>)}
                        <tr>
                            <td className='px-1 py-2 opacity-0'>n/a</td>
                            <td className='pl-2 opacity-0'>n/a</td>
                            <td className='text-center opacity-0'>n/a</td>
                            <td className=' text-slate-500 font-medium text-base border-b'>Sub Tolal</td>
                            <td className='text-right pr-3 text-slate-700 font-medium text-base border-b'>Price</td>
                            <td className='text-center opacity-0'>n/a</td>
                        </tr>
                        <tr>
                            <td className='px-1 py-2 opacity-0'>n/a</td>
                            <td className='pl-2 opacity-0'>n/a</td>
                            <td className='text-center opacity-0'>n/a</td>
                            <td className=' text-slate-500 font-medium text-base border-b'>TAX</td>
                            <td className='text-right pr-3 text-slate-700 font-medium text-base border-b'>Price</td>
                            <td className='text-center opacity-0'>n/a</td>
                        </tr>
                        <tr>
                            <td className='px-1 py-2 opacity-0'>n/a</td>
                            <td className='pl-2 opacity-0'>n/a</td>
                            <td className='text-center opacity-0'>n/a</td>
                            <td className=' text-slate-500 font-medium text-base border-b'>Shipping</td>
                            <td className='text-right pr-3 text-slate-700 font-medium text-base border-b'>Price</td>
                            <td className='text-center opacity-0'>n/a</td>
                        </tr>
                        <tr >
                            <td className='px-1 py-2 opacity-0'>n/a</td>
                            <td className='pl-2 opacity-0'>n/a</td>
                            <td className='text-center opacity-0'>n/a</td>
                            <td className='text-[#3674D9] font-medium text-base '>Discount on Cart</td>
                            <td className='text-right pr-3 text-slate-700 font-medium text-base'>Price</td>
                            <td className='text-center opacity-0'>n/a</td>
                        </tr>
                        <tr className='mt-3 w-full rounded bg-[#E1EAF9] text-[#3674D9] total'>
                            <td className='opacity-0'></td>
                            <td className='pl-2 px-4 py-4 font-medium'>Product Count (13)</td>
                            <td className='text-center opacity-0'>n/a</td>
                            <td className='font-bold text-xl'>Total</td>
                            <td className='text-right pr-3 font-bold text-xl'>Price</td>
                            <td className='text-center opacity-0'>n/a</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table