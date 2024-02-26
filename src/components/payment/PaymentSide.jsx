import React, { useContext, useState } from 'react'
import { CartContextCreate } from '../../hoc/cartContext'
import { BiMoneyWithdraw } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import CardForm from '../form/CardForm';
const menus = [
    { id: 1, lable: "Cash", icon: BiMoneyWithdraw, size: 19 },
    { id: 2, lable: "Card", icon: CiCreditCard1, size: 19 },
    { id: 4, lable: "On Account", icon: IoPersonOutline, size: 19 },
    { id: 3, lable: "Checque", icon: CiMoneyCheck1, size: 19 },
]
const PaymentSide = () => {
    const { tolaAmount } = useContext(CartContextCreate)
    const [activeId, setActiveId] = useState(1)

    return (
        <div className='px-4 md:px-8 py-5 border-l border-l-slate-400'>
            <div className='flex justify-between items-center border-slate-300 px-6 py-6 border rounded'>
                <span className='font-base text-slate-500 text-sm md:text-base lg:text-xl'>Order Amount</span>
                <span className='font-bold text-sm md:text-base lg:text-2xl'>
                    ${tolaAmount}
                </span>
            </div>
            <div className='flex flex-wrap sm:flex-nowrap border-slate-300 bg-white mt-4 border'>
                <div className='border-slate-300 py-4 sm:border-r border-b sm:border-b-0 w-full md:w-60'>
                    <ul>
                        {
                            menus.map(item => <li key={item.id} onClick={() => setActiveId(item.id)} className={`p-3 mb-3 ${item.id === activeId ? 'bg-[#E7E9F6] text-[#5C6AC4]' : 'text-slate-600'}`}>
                                <Link className='flex items-center gap-4 cursor-pointer'>
                                    {<item.icon size={item.size} />}
                                    <span className='font-medium text-xl'>{item.lable}</span>
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
                <div className='p-8 w-full'>
                    <CardForm />
                </div>
            </div>
        </div>
    )
}

export default PaymentSide