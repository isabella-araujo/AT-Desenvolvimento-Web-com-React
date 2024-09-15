import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import Dropdown from '../components/Dropdown';

export default function Questao2_2() {
  const { brasilState } = useParams();
  //const [isOpen, setIsOpen] = useState(false);
  const [paises, setPaises] = useState([]);
  // const open = "";
  // const close = "hidden";

  useEffect(() => {
    async function carregarPaises() {
      const retorno = await listarPaises();
      setPaises(retorno);
    }
    carregarPaises();
  }, []);

  useEffect(() => {
    if (brasilState === 'brasil') {

    }

  }, [brasilState]);

  return (
    <div className='flex gap-5 flex-wrap border'>
      {paises.map((pais, index) => {
        if (pais?.name.common === 'Brazil') {
          return (
            <div key={index}>
              <Dropdown dropdownState={true} title={pais?.name.common}>
                <img className='w-48' src={pais?.flags.png} />
                <div className='flex flex-col'>
                  <p>Official Name: {pais?.name.official}</p>
                  <p>Capital: {pais?.capital}</p>
                  <p>Continent: {pais?.continents[0]}</p>
                </div>
              </Dropdown>
            </div>
          )
        } else {
          return (
            <div key={index}>
              <Dropdown title={pais?.name.common}>
                <img className='w-48' src={pais?.flags.png} />
                <div className='flex flex-col'>
                  <p>Official Name: {pais?.name.official}</p>
                  <p>Capital: {pais?.capital}</p>
                  <p>Continent: {pais?.continents[0]}</p>
                </div>
              </Dropdown>
            </div>
          )
        }

      })}
    </div >
  )
}

async function listarPaises() {
  let retorno = [];
  const url = 'https://restcountries.com/v3.1/all';
  await fetch(url)
    .then((resposta) => resposta.json())
    .then((paises) => {
      retorno = paises;
      console.log(paises);
    })
    .catch((erro) => retorno.erro = erro);
  return retorno;
}
