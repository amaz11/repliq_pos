import React, { useState } from 'react'
import logo from "../../../assets/gobilling.png"

//icons
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { GoGear } from "react-icons/go";
const menus = [
    { id: 1, lable: "Dashboard", icon: MdOutlineDashboard, size: 19 },
    { id: 2, lable: "Location", icon: IoLocationOutline, size: 19 },
    { id: 4, lable: "POS Invoices", icon: LiaMoneyCheckAltSolid, size: 19 },
    { id: 3, lable: "Setting", icon: GoGear, size: 19 },
]
const Sidebar = ({ sidebarShow, setsidebarShow }) => {
    const [activeId, setActiveId] = useState(1)
    return (
        <>
            <div className={`fixed top-0 left-0 bg-white h-full ${sidebarShow ? '' : '-ml-96'} w-64 md:w-80 z-30 flex flex-col justify-between pb-4 transition-all duration-500`}>
                <div className='top-2 -right-8 absolute text-white'><RxCross2 size={30} className='cursor-pointer' onClick={() => setsidebarShow(!sidebarShow)} /></div>
                <div>
                    <div className='bg-[#EFEFEF] p-4'>
                        <div className='mb-6'>
                            <img src={logo} className='mx-auto w-48' alt="logo" />
                        </div>
                        <div>
                            <span className='font-semibold text-slate-500'>Location:</span>
                            <h4 className='font-semibold text-slate-700 text-xl'>Los Angeles, California</h4>
                        </div>
                    </div>
                    <div className='py-4'>
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
                </div>
                <div className='px-4'>
                    <button className='border-2 pt-1 pb-2 rounded-md w-full font-semibold text-slate-600 text-xl'>Logout</button>
                </div>
            </div>
            {sidebarShow ? <div className='top-0 left-0 z-20 fixed bg-[#B8BBBF] opacity-70 w-full h-full' onClick={() => setsidebarShow(!sidebarShow)}></div> : null}
        </>
    )
}

export default Sidebar