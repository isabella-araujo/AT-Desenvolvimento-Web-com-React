import React, { useState } from 'react'

export default function PerguntaResposta({ pergunta, resposta }) {
    const [isOpen, setIsOpen] = useState(false);
    const open = "";
    const close = "hidden";
    return (
        <div className='bg-rose-500 rounded-lg shadow p-3 flex flex-col gap-5 border border-rose-700'>
            <div className='flex items-center justify-evenly'>
                <p className='text-white'>{pergunta}</p>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='hover:bg-white hover:text-rose-500 border text-white border-white py-2 px-4 rounded'
                >
                    {isOpen ? "Esconder Resposta" : "Mostrar Resposta"}
                </button>
            </div>

            <div className={isOpen ? open : close}>
                <p className='text-white'>{resposta}</p>
            </div>
        </div>
    )
}
