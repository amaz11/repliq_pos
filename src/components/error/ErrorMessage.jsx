import React from 'react'
import { RxCross2 } from "react-icons/rx";

const ErrorMessage = ({ iserror, setIsError, errorMessage }) => {
    return (
        <div className={`bg-red-500 fixed px-6 py-4 rounded top-6 ${iserror ? 'right-1' : '-right-56'} w-auto transition-all duration-500`}>
            <RxCross2 size={20} className='-top-5 right-2 absolute cursor-pointer' onClick={() => setIsError(false)} />
            <span className='font-semibold text-white'>{errorMessage}</span>
        </div>
    )
}

export default ErrorMessage