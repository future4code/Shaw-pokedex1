import React from 'react'
import { useState } from "react"
import axios from 'axios'
import GlobalState from "../../global/GlobalState"
import { base_url } from '../../constants/constants'
import { useEffect } from "react"
import { Bloco } from './style'
import Card from '../../components/Card/Card'

const HomePage = () => {

    const [pokemonList, setPokemonList] = useState([])

    const getAllPokemon = () => {
        const url = `${base_url}pokemon/?offset=O&limit=21`
        axios.get(url)
            .then((res) => {
                setPokemonList(res.data.results)
                console.log(pokemonList)
            })
            .catch((err) => {
                console.log(err.data)
            })
    }

    useEffect(() => {
        getAllPokemon()
    }, [])

    const getPokemonList = pokemonList?.map((poke) => {
        return (
            <div>
                <Card pokeName = {poke.name}/>
            </div>
        )

    })

    return (
        <div>
            {getPokemonList}
        </div>
    )
}

export default HomePage