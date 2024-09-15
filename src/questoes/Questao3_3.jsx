import React from 'react'
import { useForm } from 'react-hook-form';

export default function Questao3_3() {
    const { register, handleSubmit } = useForm();

    function onSubmit(dados) {
        alert("Contato enviado com sucesso! " + JSON.stringify(dados));

    }

    return (
        <div>
            <form className='flex flex-col gap-4 w-96 self-center' onSubmit={handleSubmit(onSubmit)}>
                <h3>Formulário</h3>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Nome'
                    {...register("nome")}
                />

                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Email'
                    {...register("email")}
                />

                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Telefone'
                    {...register("tel")}
                />

                <input className='hover:bg-rose-600 hover:text-white text-white bg-rose-500 py-2 px-4 rounded' type="submit" value="Salvar" />
            </form>
        </div>
    )
}
