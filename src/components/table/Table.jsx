import React, { useContext, useEffect } from 'react'
// icons
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";
import { CartContextCreate } from '../../hoc/cartContext';

const Table = () => {
    const { cart, removeFromCart, increseQuantity, deincreseQuantity, setTotalAmount } = useContext(CartContextCreate)
    const subTotal = cart?.reduce((a, b) => (+a) + (+b.price * b.quantity), 0)
    const tax = 25
    const shipping = 50
    const discount = 0
    useEffect(() => {
        const amount = (subTotal + tax + shipping) - discount;
        setTotalAmount(amount)
    }, [cart])
    return (
        <>
            <div className='mt-6 overflow-x-scroll md:overflow-x-auto'>
                <table className='w-full'>
                    <tbody className='group'>
                        {cart.length === 0 ? <tr className=''>
                            <td className='w-full text-center text-slate-600 font-semibold'>Shop Now</td>
                        </tr> : cart.map(item => <tr key={item.id} className=''>
                            <td className='w-10 px-1 py-2 md:py-3 lg:py-4 text-slate-600'><FiEdit size={22} className='cursor-pointer' /></td>
                            <td className='border-t-2 border-l-2 border-b group:last:border-b-2 pl-2 rounded-tl text-slate-600 font-medium text-sm md:text-base lg:text-xl'>{item.title}</td>
                            <td className='border-t-2 text-center border-b group:last:border-b-2 text-slate-600 font-medium text-sm md:text-base lg:text-xl'>${item.price}</td>
                            <td className='border-t-2 border-b group:last:border-b-2'>
                                <div className='flex items-center justify-center gap-4 group:last:border-b-2 text-slate-600'>
                                    <GrSubtractCircle onClick={() => deincreseQuantity(item.id)} size={24} className='cursor-pointer' />
                                    <span className='text-slate-600 font-medium text-sm md:text-base lg:text-xl'>{item.quantity}</span>
                                    <AiOutlinePlusCircle onClick={() => increseQuantity(item.id)} size={24} className='cursor-pointer' />
                                </div>
                            </td>
                            <td className='border-t-2 border-r-2 text-right pr-3 border-b group:last:border-b-2 text-slate-600 font-medium text-sm md:text-base lg:text-xl'>${item.price * item.quantity}</td>
                            <td className='w-4 px-1 py-2 text-right text-red-500'><MdDeleteOutline onClick={() => removeFromCart(item.id)} size={24} className='cursor-pointer' /></td>
                        </tr>)}
                        {cart.length === 0 ? null : <>
                            <tr>
                                <td className='px-1 py-2 md:py-3 lg:py-4 opacity-0'>n/a</td>
                                <td className='pl-2 opacity-0'>n/a</td>
                                <td className='text-center opacity-0'>n/a</td>
                                <td className=' text-slate-500 font-medium text-sm md:text-base lg:text-xl border-b'>Sub Tolal</td>
                                <td className='text-right pr-3 text-slate-700 font-medium text-sm md:text-base lg:text-xl border-b'>${subTotal}</td>
                                <td className='text-center opacity-0'>n/a</td>
                            </tr>
                            <tr>
                                <td className='px-1 py-2 md:py-3 lg:py-4 opacity-0'>n/a</td>
                                <td className='pl-2 opacity-0'>n/a</td>
                                <td className='text-center opacity-0'>n/a</td>
                                <td className=' text-slate-500 font-medium text-sm md:text-base lg:text-xl border-b'>TAX</td>
                                <td className='text-right pr-3 text-slate-700 font-medium text-sm md:text-base lg:text-xl border-b'>${tax}</td>
                                <td className='text-center opacity-0'>n/a</td>
                            </tr>
                            <tr>
                                <td className='px-1 py-2 md:py-3 lg:py-4 opacity-0'>n/a</td>
                                <td className='pl-2 opacity-0'>n/a</td>
                                <td className='text-center opacity-0'>n/a</td>
                                <td className=' text-slate-500 font-medium text-sm md:text-base lg:text-xl border-b'>Shipping</td>
                                <td className='text-right pr-3 text-slate-700 font-medium text-sm md:text-base lg:text-xl border-b'>${shipping}</td>
                                <td className='text-center opacity-0'>n/a</td>
                            </tr>
                            <tr >
                                <td className='px-1 py-2 md:py-3 lg:py-4 opacity-0'>n/a</td>
                                <td className='pl-2 opacity-0'>n/a</td>
                                <td className='text-center opacity-0'>n/a</td>
                                <td className='text-[#3674D9] font-medium text-sm md:text-base lg:text-xl '>Discount on Cart</td>
                                <td className='text-right pr-3 text-slate-700 font-medium text-sm md:text-base lg:text-xl'>${discount}</td>
                                <td className='text-center opacity-0'>n/a</td>
                            </tr>
                            <tr className='mt-3 w-full rounded bg-[#E1EAF9] text-[#3674D9] total'>
                                <td className='opacity-0'></td>
                                <td className='pl-2 px-4 py-4 font-medium text-sm md:text-base lg:text-xl'>Product Count ({cart.length})</td>
                                <td className='text-center opacity-0'>n/a</td>
                                <td className='font-bold text-sm md:text-base lg:text-xl'>Total</td>
                                <td className='text-right pr-3 font-bold text-sm md:text-base lg:text-xl'>${(subTotal + tax + shipping) - discount}</td>
                                <td className='text-center opacity-0'>n/a</td>
                            </tr>
                        </>}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table