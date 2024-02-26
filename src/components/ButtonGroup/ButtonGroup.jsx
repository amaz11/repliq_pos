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
        <div className='flex flex-wrap justify-between items-center gap-4 mt-4 mb-3'>
            <button className='flex justify-center items-center gap-3 bg-red-200 px-4 py-3 rounded text-red-600 cursor-pointer grow'>
                <RxCrossCircled size={28} />
                <span className='font-semibold text-xl'>Cancel</span>
            </button>

            <button className='flex justify-center items-center gap-3 bg-[#E7E9F6] px-4 py-3 rounded text-[#5C6AC4] cursor-pointer grow'>
                <FaRegHandBackFist size={28} />
                <span className='font-semibold text-xl'>Hold</span>
            </button>

            <button className='flex justify-center items-center gap-3 bg-[#E7E9F6] px-4 py-3 rounded text-[#5C6AC4] cursor-pointer grow'>
                <TbShoppingBagDiscount size={28} />
                <span className='font-semibold text-xl'>Discount</span>
            </button>

            <button onClick={() => setPay(!pay)} className='flex justify-center items-center gap-3 bg-[#E7E9F6] px-4 py-3 rounded text-[#5C6AC4] cursor-pointer grow' disabled={cart.length === 0 ? true : false}>
                <FaAmazonPay size={28} />
                <span className='font-semibold text-xl' >Pay Now</span>
            </button>
        </div>
    )
}

export default ButtonGroup