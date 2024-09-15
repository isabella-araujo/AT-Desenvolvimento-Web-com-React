import React from 'react'
import { useForm } from 'react-hook-form';

const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexNumerico = /^\d+$/;

export default function Questao3_4() {
    const { register, handleSubmit, formState: { errors } } = useForm();

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
                    {...register("nome", {
                        required: "O campo nome é obrigatório.",
                        validate: {
                            minLength: (value) => value.length >= 3 || "Nome inválido.",
                        }
                    })}
                />

                {errors.nome && <p className='text-red-800'>{errors.nome.message}</p>}

                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Email'
                    {...register("email", {
                        required: "O campo email é obrigatório.",
                        validate: {
                            minLength: (value) => value.length >= 3 || "Email inválido.",
                            matchPattern: (value) => regexEmail.test(value) || "Email deve ser um email válido."
                        }
                    })}
                />

                {errors.email && <p className='text-red-800'>{errors.email.message}</p>}

                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Telefone'
                    {...register("tel", {
                        required: "O campo telefone é obrigatório.",
                        validate: {
                            minLength: (value) => value.length >= 8 || "Telefone inválido.",
                            matchPattern: (value) => regexNumerico.test(value) || "Telefone deve conter apenas números.",
                        },
                    })}
                />

                {errors.tel && <p className='text-red-800'>{errors.tel.message}</p>}

                <input className='hover:bg-rose-600 hover:text-white text-white bg-rose-500 py-2 px-4 rounded' type="submit" value="Salvar" />
            </form>
        </div>
    )
}
