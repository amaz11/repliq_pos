import React from 'react'

const CategorySkeleton = () => {
    return (
        <div>
            <button className={`py-2 px-3 border-2 border-slate-200 bg-slate-100 animate-pulse h-10 w-36 rounded font-semibold grow`} onClick={() => setActiveId(item.id)}>
            </button>
        </div>
    )
}

export default CategorySkeleton