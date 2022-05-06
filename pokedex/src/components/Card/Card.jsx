import React, { useState, useContext } from 'react'
import axios from 'axios'
import { base_url } from '../../constants/constants'
import { useEffect } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import { CardContainer, PokeImg, IconeImg, PokeBallContainer } from './style'
import { typesIcons, colorsShadow, typesPt } from '../../theme/pokemonTypeColors'
import PokeBall from '../../assets/Images/pokeClose.png'
import { goToPokemonDetailsPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router'
import { Tooltip } from '@chakra-ui/react'

function Card(props) {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    const { states, setters } = useContext(GlobalContext)

    const pokedex = states.pokedex
    const setPokedex = setters.pokedex

    const getPokemon = (pokeName) => {
        const url = `${base_url}pokemon/${pokeName}`
        axios.get(url)
        .then((res) => {
            setPokemon(res.data)
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
            <Tooltip label={typesPt[type.type.name]} textTransform={'capitalize'}>
                <IconeImg key={index} src={typesIcons[type.type.name]} />
            </Tooltip>
        )  
    })

    return (
        <div>
            {pokemon.name ?
                <CardContainer type={pokemon.types[0].type.name}>
                    <span> #{('00' + pokemon.id).slice(-3)} </span>
                    
                    <PokeImg onClick={() => goToPokemonDetailsPage(navigate, pokemon.id)} 
                        src={pokemon.sprites.other['official-artwork'].front_default} 
                        alt={pokemon.name} 
                    />

                    <p> { pokemon.name } </p>
                    
                    <div> { types } </div>

                    <PokeBallContainer>
                        <img src={ PokeBall } alt={"Botão de captura"} />
                    </PokeBallContainer>
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
