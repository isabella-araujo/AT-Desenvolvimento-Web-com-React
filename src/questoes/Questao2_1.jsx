import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Questao2_1() {
    const { adminState } = useParams();
    const [isAdmin, setIsAdmin] = useState(false);
    const [usuario, setUsuario] = useState("Colaborador");

    useEffect(() => {
        setUsuario(isAdmin ? "Administrador" : "Colaborador");
    }, [isAdmin]);

    useEffect(() => {
        if (adminState === 'ligado') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [adminState]);

    function handleChange() {
        setIsAdmin(!isAdmin)
    }

    return (
        <div>
            <div className='flex items-center justify-center gap-5'>
                Administrador
                <label className="inline-flex items-center cursor-pointer">
                    <input checked={isAdmin} onChange={handleChange} type="checkbox" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:[#6c886c] dark:peer-focus:[#6c886c] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                </label>
            </div>
            <p>O usuário atual é {usuario}</p>
        </div>
    )
}
