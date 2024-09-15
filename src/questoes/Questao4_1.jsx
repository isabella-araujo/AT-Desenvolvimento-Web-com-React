import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Questao4_1() {
  return (
    <div className='p-3 border border-rose-600 bg-rose-500'>
        <ul className='flex gap-5 items-center text-white'>
            <li><Link to='/questao1_1'>Questao 1.1</Link></li>
            <li><Link to='/questao1_2'>Questao 1.2</Link></li>
            <li><Link to='/questao1_3'>Questao 1.3</Link></li>
            <li><Link to='/questao1_4'>Questao 1.4</Link></li>
            <li><Link to='/questao2_1'>Questao 2.1</Link></li>
            <li><Link to='/questao2_2'>Questao 2.2</Link></li>
            <li><Link to='/questao2_3'>Questao 2.3</Link></li>
            <li><Link to='/questao2_4'>Questao 2.4</Link></li>
            <li><Link to='/questao3_1'>Questao 3.1</Link></li>
            <li><Link to='/questao3_2'>Questao 3.2</Link></li>
            <li><Link to='/questao3_3'>Questao 3.3</Link></li>
            <li><Link to='/questao3_4'>Questao 3.4</Link></li>
            <li><Link to='/admin/desligado'>Admin Desligado</Link></li>
            <li><Link to='/admin/ligado'>Admin Ligado</Link></li>
            <li><Link to='/brasil'>Brasil</Link></li>
            <li><Link to='/formulario/preenchido'>Formulario Preenchido</Link></li>
        </ul>
    </div>
  )
}
