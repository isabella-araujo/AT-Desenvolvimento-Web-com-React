import React, { useEffect, useState } from 'react'
import Input from '../components/Input';
import { useParams } from 'react-router-dom';

export default function Questao3_1() {
    const { formState } = useParams();
    const [contato, setContato] = useState({
        nome: '',
        email: '',
        telefone: ''
    });

    function submit() {
        alert("Contato enviado com sucesso! " + JSON.stringify({ contato }));
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setContato((contato) => {
            return {
                ...contato,
                [name]: value,
            }
        });
    }

    useEffect(() => {
        if(formState === 'preenchido') {
            setContato({
                nome: 'João Souza Silva',
                email: 'teste@exemplo.us',
                telefone: 3121286800
            });
            console.log("formulario/preenchido")
        } else {
            setContato({
                nome: '',
                email: '',
                telefone: ''
            })
        }

    }, [formState]);

    return (
        <div className='flex flex-col gap-4 w-96 self-center'>
            <h3>Formulário</h3>
            <Input
                name="nome"
                value={contato.nome}
                onChange={handleChange}
                placeholder='Nome'
            />
            <Input
                name="email"
                value={contato.email}
                onChange={handleChange}
                placeholder='Email'
            />
            <Input
                name="telefone"
                value={contato.telefone}
                onChange={handleChange}
                placeholder='Telefone'
            />
            <button className='hover:bg-rose-600 hover:text-white text-white bg-rose-500 py-2 px-4 rounded' onClick={submit}>Enviar</button>
        </div>
    )
}
