import React from 'react'
import { MdNavigateBefore } from "react-icons/md";

import UserForm from '../form/UserForm';
const Modal = ({ modalShow, setModalShow }) => {
    return (
        <>
            <div className='top-1/2 left-1/2 z-30 fixed bg-white shadow px-6 md:px-12 py-4 rounded w-[300px] sm:w-[350px] md:w-[500px] transform -translate-x-1/2 -translate-y-1/2'>
                <div>
                    <MdNavigateBefore size={40} className='top-4 left-2 sm:left-4 md:left-10 absolute text-slate-400 cursor-pointer' onClick={() => setModalShow(!modalShow)} />
                    <h2 className='font-medium text-center text-slate-800 text-xl md:text-3xl'>Add New Customer</h2>
                </div>
                <UserForm />
            </div>
            <div className='top-0 left-0 z-20 fixed bg-[#B8BBBF] opacity-70 w-full h-full' onClick={() => setModalShow(!modalShow)} />
        </>
    )
}

export default Modal