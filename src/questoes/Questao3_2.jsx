import React, { useEffect, useState } from 'react'
import Input from '../components/Input';

export default function Questao3_2() {
    const [contato, setContato] = useState({
        nome: '',
        email: '',
        telefone: ''
    });
    const [erros, setErros] = useState({
        nome: '',
        email: '',
        telefone: '',
    })

    function submit() {
        if(isValido()) {
            alert("Contato enviado com sucesso! " + JSON.stringify({contato}));
        }
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

    function isValido() {
        let isValido = true;
        let novosErros = {nome: '', email: '', telefone: ''}
        if(contato.nome.length === 0) {
            novosErros.nome = 'O campo nome é obrigatório.';
            isValido = false;
        }
        if(contato.email.length === 0) {
            novosErros.email = 'O campo email é obrigatório.';
            isValido = false;
        }
        if(!Number(contato.telefone)) {
            novosErros.telefone = 'O campo telefone deve ser númerico.';
            isValido = false;
        } 
        setErros(novosErros);
        return isValido;
    }

    return (
        <div className='flex flex-col gap-4 w-96 self-center'>
            <h3>Formulário</h3>
            <Input
                name="nome"
                value={contato.nome} 
                onChange={handleChange}
                placeholder='Nome'
            />
            {erros.nome && <p className='text-red-800'>{erros.nome}</p>}
            <Input
                name="email"
                value={contato.email} 
                onChange={handleChange}
                placeholder='Email'
            />
            {erros.email && <p className='text-red-800'>{erros.email}</p>}
            <Input
                name="telefone"
                value={contato.telefone} 
                onChange={handleChange}
                placeholder='Telefone'
            />
            {erros.telefone && <p className='text-red-800'>{erros.telefone}</p>}
            <button className='hover:bg-rose-600 hover:text-white text-white bg-rose-500 py-2 px-4 rounded' onClick={submit}>Enviar</button>
        </div>
    )
}