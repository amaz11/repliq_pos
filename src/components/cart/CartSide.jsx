import React, { useState } from 'react'

// components
import Topbar from '../navigationBar/Cartbar/Topbar'
import Sidebar from '../navigationBar/Cartbar/Sidebar'
import Table from '../table/Table';

// icons
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Modal from '../modal';


const CartSide = () => {
    const [sidebarShow, setsidebarShow] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    return (
        <div>
            <Topbar setsidebarShow={setsidebarShow} />
            <Sidebar sidebarShow={sidebarShow} setsidebarShow={setsidebarShow} />
            <div className='px-4 pt-3'>
                <div className='flex justify-between items-center bg-[#E7E9F6] px-4 py-4 rounded text-[#5C6AC4]'>
                    <div className='flex items-center gap-2'>
                        <IoPersonCircleOutline size={28} />
                        <span className='font-semibold text-sm md:text-base lg:text-xl'>Steve Jobs</span>
                    </div>
                    <GoPlusCircle className='cursor-pointer' size={28} onClick={() => setModalShow(!modalShow)} />
                </div>
                <Table />
                <ButtonGroup />
            </div>
            {modalShow ? <Modal modalShow={modalShow} setModalShow={setModalShow} /> : null}
        </div>
    )
}

export default CartSide