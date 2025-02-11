import React, { useState } from 'react'
import { div } from 'three/tsl'
import Popper from './Popper'

const RowColour = () => {
    const [show, SetShow] = useState(false);

    return (
        <>
            {show && <Popper />}
            <div className='flex px-2 gap-6 w-[200px] justify-center mx-auto'>
                {/* <button className='cursor-pointer gap-1 flex flex-col justify-end items-center'>
                <img src="/sweet.png" alt="" width='41' />
                <p className='text-white text-sm font-semibold'>BUN</p>
            </button> */}
                <button className='cursor-pointer gap-2 flex flex-col justify-end items-center' onClick={() => SetShow(!show)}>
                    <img src="/doughnut.png" alt="" width='33' />
                    <p className='text-white text-sm font-semibold'>CREAM</p>
                </button>

            </div>
        </>
    )
}

export default RowColour

//className='w-[240px] h-[40px] bg-amber-50 rounded-2xl'