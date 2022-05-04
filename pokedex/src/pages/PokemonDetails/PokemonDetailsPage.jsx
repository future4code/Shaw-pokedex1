import axios from 'axios'
import { useState } from 'react'
import PokemonTypeWeak from '../../components/PokemonMoves/PokemonTypeWeak'
import PokemonStats from '../../components/PokemonStats/PokemonStats'
import useRequestData from '../../hook/useRequestData'
import {InfoContainer, PageContainer, Img} from './style'
import { Box } from "@chakra-ui/react"
import { colors } from '../../theme/pokemonTypeColors'


    const getRequest = (url, setData) => {

        axios.get(url)
        .then((res) =>{
            console.log( res.data.damage_relations.double_damage_from)

            setData(res.data.damage_relations.double_damage_from)
        })

    }
const PokemonDetailsPage = () => {
    const [data, setData] = useState([])
    const pokemonData = useRequestData({},'https://pokeapi.co/api/v2/pokemon/500')
    
   

    console.log(pokemonData)
    // let pokemonWeakness = []
    //  pokemonData.name && pokemonData.types.map((type)=>{
    //     let data = getRequest(type.type.url,setData);
    //     console.log(data)
    //     pokemonWeakness =  [...pokemonWeakness,data] 
    //  })
    //  console.log(pokemonWeakness)
    // console.log(pokemonData.sprites.other['official-artwork'].front_default) damage_relations.double_damage_from ->name

    return (
        <PageContainer>
       {pokemonData.types && <Box bg={colors[pokemonData.types[0].type.name]} style={{display:'flex',justifyContent:'center', alignItems:'end', height:'35vh', borderRadius:'10px'}}>
             <Img src={pokemonData.sprites.other['official-artwork'].front_default} alt = {pokemonData.name}/>
             {/* <Img src={pokemonData.sprites.versions['generation-v']['black-white'].animated.back_default} alt = {pokemonData.name}/> */}

        </Box>}

            {
                pokemonData.stats && <InfoContainer>
                    <PokemonStats
                    stats={pokemonData.stats} type={pokemonData.types[0].type.name} />
                     <PokemonTypeWeak types ={pokemonData.types}/>
                </InfoContainer> 
                
            }
           

        </PageContainer>
    )
}

export default PokemonDetailsPage