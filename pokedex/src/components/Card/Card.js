import React, { useState } from 'react'
import axios from 'axios'
import { base_url } from '../../constants/constants'
import { useEffect } from 'react'

function Card(props) {
    const [pokemon, setPokemon] = useState({})


    const getPokemon = (pokeName) => {
        const url = `${base_url}pokemon/${pokeName}`
        axios.get(url)
            .then((res) => {
                setPokemon(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    useEffect(() => {
        getPokemon(props.pokeName)
    }, [props.pokeName])


    return (
        <div>
            {pokemon.name ?
                <div>
                    <p> {pokemon.name} </p>
                    <p> {pokemon.order}</p>
                    <p>{pokemon.types[0].type.name} </p>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                </div>
                :
                <div>
                    Carregando...
                </div>
            }
        </div>
    )
}

export default Card;
