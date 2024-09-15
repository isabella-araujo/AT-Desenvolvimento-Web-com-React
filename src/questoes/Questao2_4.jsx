//  Crie uma página com um dropdown com uma lista de categorias de pratos de um restaurante que, ao ser selecionado, mostre a descrição e a imagem da categoria selecionada.

import React, { useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown';

export default function Questao2_4() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function carregarCategorias() {
            const retorno = await listarCategorias();
            console.log(retorno);
            setCategorias(retorno);
        }
        carregarCategorias();
        console.log("categorias");
    }, []);

    return (
        <div className='flex flex-col gap-2'>
            { categorias.length > 0 &&
                categorias.map((item) => (
                    <Dropdown title={item.strCategory} key={item.idCategory}>
                        <img className='w-64' src={item.strCategoryThumb}/>
                        <p className='text-white'>{item.strCategoryDescription}</p>
                    </Dropdown>
                ))
            }
        </div>
    )
}

async function listarCategorias() {
    let retorno;
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((categorias) => {
            retorno = categorias;
        })
        .catch((erro) => retorno.erro = erro);
    return retorno.categories;
}