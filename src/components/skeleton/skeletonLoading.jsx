import React from 'react'

const SkeletonLoading = () => {
    return (
        <div>
            <div className='shadow border rounded animate-pulse group'>
                <div className='relative bg-slate-300 h-40'></div>
                <div className='mt-2 text-center'>
                    <p className='bg-slate-200 mb-2 p-1 border-b font-semibold text-lg'></p>
                    <p className='bg-slate-200 px-2 p-1 font-semibold text-lg truncate'></p>
                </div>
            </div>
        </div>
    )
}

export default SkeletonLoading