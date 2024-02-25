import React, { useState } from 'react'
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
        <div className='flex gap-4 justify-between items-center px-5 py-3' >
            <HiOutlineBars3 className='cursor-pointer' size={30} onClick={() => setsidebarShow(true)} />
            <div className='hidden lg:block'>
                <div className='flex gap-4 items-center flex-wrap justify-end'>
                    {
                        buttons.map(item => <button key={item.id} className='flex gap-3 cursor-pointer items-center bg-[#E7E9F6] py-2 pl-2 pr-4 rounded text-[#5C6AC4]'>
                            {<item.icon size={item.size} />}
                            <span className='font-medium text-lg'>{item.label}</span>
                        </button>)
                    }
                </div>
            </div>

            <div className='relative transition-all duration-500 lg:hidden'>
                <BsThreeDotsVertical size={24} onClick={() => setListShow(!listShow)} />
                <div className={`bg-white z-20 absolute right-8 py-4 flex flex-col gap-4 shadow rounded w-40 ${listShow ? 'top-6' : '-top-80'}`}>
                    {
                        buttons.map(item => <span key={item.id} className='flex  items-center  gap-3 w-full cursor-pointer px-2 pb-2 last:pb-0  border-b last:border-b-0  text-[#5C6AC4] '>
                            {<item.icon size={item.size} />}
                            <span className='font-medium text-base'>{item.label}</span>
                        </span>)
                    }
                </div>
            </div>

            {listShow ? <div className='absolute top-0 left-0 w-full h-full bg-[#B8BBBF] opacity-0' onClick={() => setListShow(!listShow)}></div> : null}
        </div>
    )
}

export default Topbar