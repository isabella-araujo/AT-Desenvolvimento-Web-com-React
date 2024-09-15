import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Dropdown({ children, title, dropdownState }) {
    const [isOpen, setIsOpen] = useState(dropdownState ? true : false);
    const open = "";
    const close = "hidden";
    return (
        <div className='bg-rose-500 rounded-lg shadow p-3 flex flex-col gap-5 border border-rose-700'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='flex justify-between items-center px-3'
            >
                <p className='text-white font-semibold'>{title}</p>
                {isOpen ? <IoIosArrowUp className='text-white font-semibold' /> : <IoIosArrowDown className='text-white font-semibold' />}
            </div>
            <div className={`flex text-white justify-center items-center ${isOpen ? open : close}`}>
                {children}
            </div>
        </div>
    )
}
