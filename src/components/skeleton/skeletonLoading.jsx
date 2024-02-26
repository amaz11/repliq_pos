import React from 'react'

const SkeletonLoading = () => {
    return (
        <div>
            <div className='border rounded group animate-pulse shadow'>
                <div className='relative h-40 bg-slate-300'></div>
                <div className='text-center mt-2'>
                    <p className='text-lg font-semibold border-b p-1 bg-slate-200 mb-2'></p>
                    <p className='text-lg font-semibold p-1 truncate px-2 bg-slate-200'></p>
                </div>
            </div>
        </div>
    )
}

export default SkeletonLoading