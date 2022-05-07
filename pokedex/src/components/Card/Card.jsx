import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { goToPokemonDetailsPage } from '../../routes/coordinator'
import { GlobalContext } from '../../global/GlobalContext'
import axios from 'axios'
import { base_url } from '../../constants/constants'
import { CardContainer, PokeImg, IconeImg, PokeBallContainer } from './style'
import { Tooltip } from '@chakra-ui/react'
import { typesIcons, typesPt } from '../../theme/pokemonTypeColors'
import PokeBall from '../../assets/Images/pokeClose.png'
import PokeOpen from '../../assets/Images/pokeOpen.png'

function Card(props) {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({})
    const [inPokedex, setInPokedex] = useState(false)
    const { states, setters } = useContext(GlobalContext)
    const pokedex = states.pokedex
    const setPokedex = setters.setPokedex
    const setPageBefore = setters.setPageBefore

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

    const removePokedex = () => {
        const currentPokedex = [...pokedex]
        const index = currentPokedex.findIndex((element) => {
            return (element.name === props.pokeName)
        })
        currentPokedex.splice(index, 1)
        setPokedex(currentPokedex)
        setInPokedex(false)
    }

    const addLocalStorage = () => {
        window.localStorage.setItem("pokedex", JSON.stringify(pokedex))
    }

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

    useEffect(() => {
        addLocalStorage()
    }, [inPokedex])

    const types = pokemon.types?.map((type, index) => {
        return (
            <Tooltip key={index} label={typesPt[type.type.name]} textTransform={'capitalize'}>
                <IconeImg src={typesIcons[type.type.name]} />
            </Tooltip>
        )
    })

    const goToDetaisl = (id) =>{
        goToPokemonDetailsPage(navigate, id)
        setPageBefore(props.page)
    }

    return (
        <div>
            {pokemon.name &&
                <CardContainer type={pokemon.types[0].type.name}>

                    <span> #{('00' + pokemon.id).slice(-3)} </span>

                    <PokeImg onClick={() => goToDetaisl(pokemon.id)}
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        alt={pokemon.name}
                    />
                    <p> {pokemon.name} </p>
                    <div> {types} </div>

                    <PokeBallContainer>
                        {!inPokedex ?
                            <img onClick={() => (addPokedex(pokemon))} src={PokeOpen} alt={"Botão pra capturar Pokémon"} />
                            :
                            <img onClick={removePokedex} src={PokeBall} alt={"Botão pra liberar Pokémon"} />
                        }
                    </PokeBallContainer>
                </CardContainer>
            }
        </div>
    )
}

export default Card;