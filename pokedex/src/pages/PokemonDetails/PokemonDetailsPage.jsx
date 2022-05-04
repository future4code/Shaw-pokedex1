import axios from 'axios'
import { useEffect, useState } from 'react'
import PokemonTypeWeak from '../../components/PokemonMoves/PokemonTypeWeak'
import PokemonStats from '../../components/PokemonStats/PokemonStats'
import {InfoContainer} from './style'


const PokemonDetailsPage = () => {
    const [pokemonData, setPokemonData] = useState()
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/246')
            .then((response) => {
                console.log(response.data)
                setPokemonData(response.data)
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }, [])



    return (
        <>

            {
                pokemonData && <InfoContainer>
                    <PokemonStats
                    stats={pokemonData.stats} type={pokemonData.types[0].type.name} />
                     <PokemonTypeWeak types ={pokemonData.types}/>
                </InfoContainer> 
                
            }
           

        </>
    )
}

export default PokemonDetailsPage