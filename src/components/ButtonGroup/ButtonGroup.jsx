import React, { useContext } from 'react'

// icons
import { RxCrossCircled } from "react-icons/rx";
import { FaRegHandBackFist } from "react-icons/fa6";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { FaAmazonPay } from "react-icons/fa";

// Context API
import { CartContextCreate } from '../../hoc/cartContext';
const ButtonGroup = () => {
    const { pay, setPay, cart } = useContext(CartContextCreate)
    return (
        <div className='mb-3 mt-4 flex items-center justify-between flex-wrap gap-4'>
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

            <button onClick={() => setPay(!pay)} className='flex gap-3 cursor-pointer items-center justify-center py-3 px-4 rounded bg-[#E7E9F6] text-[#5C6AC4] grow' disabled={cart.length === 0 ? true : false}>
                <FaAmazonPay size={28} />
                <span className='font-semibold text-xl' >Pay Now</span>
            </button>
        </div>
    )
}

export default ButtonGroup