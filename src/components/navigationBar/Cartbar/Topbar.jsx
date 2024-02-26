import React, { useState } from 'react'

//icons
import { HiOutlineBars3 } from "react-icons/hi2";
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuCircleDotDashed } from "react-icons/lu";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
const buttons = [
    { id: 1, icon: PiNotePencilDuotone, label: "Note", size: 28 },
    { id: 2, icon: MdOutlineLocalShipping, label: "Shipping", size: 28 },
    { id: 3, icon: LuCircleDotDashed, label: "Hold Orders", size: 28 },
    { id: 4, icon: AiFillPlusCircle, label: "New Item", size: 28 },
]

const Topbar = ({ setsidebarShow }) => {
    const [listShow, setListShow] = useState(false)
    return (
        <div className='flex justify-between items-center gap-4 px-5 py-3' >
            <HiOutlineBars3 className='cursor-pointer' size={30} onClick={() => setsidebarShow(true)} />
            <div className='lg:block hidden'>
                <div className='flex flex-wrap justify-end items-center gap-4'>
                    {
                        buttons.map(item => <button key={item.id} className='flex items-center gap-3 bg-[#E7E9F6] py-2 pr-4 pl-2 rounded text-[#5C6AC4] cursor-pointer'>
                            {<item.icon size={item.size} />}
                            <span className='font-medium text-lg'>{item.label}</span>
                        </button>)
                    }
                </div>
            </div>

            <div className='relative lg:hidden transition-all duration-500'>
                <BsThreeDotsVertical size={24} onClick={() => setListShow(!listShow)} />
                <div className={`bg-white z-20 absolute right-4 py-4 flex flex-col gap-4 shadow rounded w-40 ${listShow ? 'top-6' : 'hidden'}`}>
                    {
                        buttons.map(item => <span key={item.id} className='flex items-center gap-3 px-2 pb-2 last:pb-0 border-b last:border-b-0 w-full text-[#5C6AC4] cursor-pointer '>
                            {<item.icon size={item.size} />}
                            <span className='font-medium text-base'>{item.label}</span>
                        </span>)
                    }
                </div>
            </div>

            {listShow ? <div className='top-0 left-0 fixed bg-[#B8BBBF] opacity-0 w-full h-full' onClick={() => setListShow(!listShow)}></div> : null}
        </div>
    )
}

export default Topbar