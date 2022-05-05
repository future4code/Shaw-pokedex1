import React, { useState } from 'react'
import axios from 'axios'
import { base_url } from '../../constants/constants'
import { useEffect } from 'react'
import { CardContainer, PokeImg, IconeImg } from './style'
import { typesIcons, colorsShadow } from '../../theme/pokemonTypeColors'


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

    const types = pokemon.types?.map((type, index) => {
        return (
            <IconeImg key={index} src={typesIcons[type.type.name]}  />
        )
    })

    return (
        <div>
            {pokemon.name ?
                <CardContainer type={pokemon.types[0].type.name}>
                    <span> #{('00' + pokemon.id).slice(-3)}</span>
                    <PokeImg src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                    <p> {pokemon.name} </p>
                    <div>{types}</div>
                </CardContainer>
                :
                <div>
                    Carregando...
                </div>
            }
        </div>
    )
}

export default Card;
