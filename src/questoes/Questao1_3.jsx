import React from 'react'

export default function Questao1_3() {
    function handleClick() {
        alert("Clicou no botão!");
    }
    return (
        <div>
            <button
                onClick={handleClick}
                className='hover:bg-rose-600 hover:text-white text-white bg-rose-500 py-2 px-4 rounded'
            >
                Clique em mim
            </button>
        </div>
    )
}
