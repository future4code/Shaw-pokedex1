import React from 'react'
import { useState } from "react"
import axios from 'axios'
import GlobalState from "../../global/GlobalState"
import { base_url } from '../../constants/constants'
import { useEffect } from "react"
import { PokeCards, HomeContainer } from './style'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"

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
        return <Card pokeName={poke.name} />
    })

    return (
        <div>
            <Header page={"home"} />
            <HomeContainer>
                <PokeCards>
                    {getPokemonList}
                </PokeCards>
            </HomeContainer>
            <Footer />
        </div>

          
    )
}

export default HomePage