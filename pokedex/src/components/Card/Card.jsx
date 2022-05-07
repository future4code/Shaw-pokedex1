import React, { useState, useContext } from 'react'
import axios from 'axios'
import { base_url } from '../../constants/constants'
import { useEffect } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import { CardContainer, PokeImg, IconeImg, PokeBallContainer } from './style'
import { typesIcons, typesPt } from '../../theme/pokemonTypeColors'
import PokeBall from '../../assets/Images/pokeClose.png'
import PokeOpen from '../../assets/Images/pokeOpen.png'
import { goToPokemonDetailsPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router'
import { Tooltip } from '@chakra-ui/react'

function Card(props) {
    const [pokemon, setPokemon] = useState({})
    const [inPokedex, setInPokedex] = useState(false)
    const navigate = useNavigate()

    const { states, setters } = useContext(GlobalContext)

    const pokedex = states.pokedex
    const setPokedex = setters.setPokedex

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

    const addPokedex = (pokemon) => {
        const currentPokedex = [...pokedex, pokemon]
        setPokedex(currentPokedex)
        setInPokedex(true)
    }

    const addLocalStorage = () => {
        window.localStorage.setItem("pokedex", JSON.stringify(pokedex))
    }

    const removePokedex = () => {
        const currentPokedex = [...pokedex]
        const index = currentPokedex.findIndex((element) => {
            return element.name === props.pokeName
        })
        currentPokedex.splice(index, 1)
        setPokedex(currentPokedex)
        setInPokedex(false)
    }

    useEffect(() => {
        addLocalStorage()
    }, [inPokedex])

    const checkPokedex = () => {
        const pokedexNames = pokedex.map((pokemon) => {
            return pokemon.name
        })
        const check = pokedexNames.includes(props.pokeName)
        setInPokedex(check)
    }

    useEffect(() => {
        getPokemon(props.pokeName)
        checkPokedex()
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

                    <p> {pokemon.name} </p>

                    <div> {types} </div>

                    <PokeBallContainer>
                        {inPokedex ?
                            <img onClick={removePokedex} src={PokeOpen} alt={"Botão de captura"} />
                            :
                            <img onClick={() => (addPokedex(pokemon))} src={PokeBall} alt={"Botão de captura"} />}
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
