import React from 'react'
import { MdNavigateBefore } from "react-icons/md";

import UserForm from '../form/UserForm';
const Modal = ({ modalShow, setModalShow }) => {
    return (
        <>
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[350px] md:w-[500px] bg-white z-30 py-4 px-6 md:px-12 rounded shadow'>
                <div>
                    <MdNavigateBefore size={40} className='absolute top-4 left-2 sm:left-4 md:left-10 text-slate-400 cursor-pointer' onClick={() => setModalShow(!modalShow)} />
                    <h2 className='text-center text-slate-800 text-xl md:text-3xl font-medium'>Add New Customer</h2>
                </div>
                <UserForm />
            </div>
            <div className='fixed top-0 left-0 w-full h-full bg-[#B8BBBF] opacity-70 z-20' onClick={() => setModalShow(!modalShow)} />
        </>
    )
}

export default Modal