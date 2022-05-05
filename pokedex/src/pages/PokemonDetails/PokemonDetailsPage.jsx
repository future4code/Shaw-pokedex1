import PokemonType from '../../components/PokemonTypes/PokemonType'
import PokemonStats from '../../components/PokemonStats/PokemonStats'
import useRequestData from '../../hook/useRequestData'
import { InfoContainer, PageContainer, Img, InfoCenterDiv, ButtonContainer } from './style'
import { Box } from "@chakra-ui/react"
import { colors } from '../../theme/pokemonTypeColors'
import PokeWeakness from '../../components/PokeWeakness/PokeWeakness'
import PokemonMoves from '../../components/PokemonMoves/PokemonMoves'
import PokemonSprites from '../../components/PokemonSprites/PokemonSprites'
import { useNavigate, useParams } from 'react-router-dom'
import { goToPokemonDetailsPage } from '../../routes/coordinator'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io"
import Header from '../../components/Header/Header'


const PokemonDetailsPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    let pokemonData = useRequestData({}, `https://pokeapi.co/api/v2/pokemon/${params.id}`)

    const onClickNext = () => {
        params.id !== '898' && goToPokemonDetailsPage(navigate, Number(params.id) + 1)
    }
    const onClickPrevious = () => {
        console.log()
        params.id !== '1' && goToPokemonDetailsPage(navigate, Number(params.id) - 1)
    }

    return (
        <>
        <Header />
        <PageContainer>
            {pokemonData.types && <Box bg={colors[pokemonData.types[0].type.name]} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '35vh', borderRadius: '10px', paddingBottom:'10px' }}>
                <ButtonContainer>
                    <button onClick={onClickPrevious}><IoIosArrowDropleftCircle /></button>
                    <p>#{('00'+pokemonData.id).slice(-3)} <span>{pokemonData.name}</span></p>
                    <button onClick={onClickNext}><IoIosArrowDroprightCircle /></button>
                </ButtonContainer>
                <Img src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} />

            </Box>}

            {
                pokemonData.stats && <InfoContainer>
                    <PokemonStats
                        stats={pokemonData.stats}
                        type={pokemonData.types[0].type.name}
                    />
                    <InfoCenterDiv>
                        <PokemonType types={pokemonData.types}
                        />
                        <PokeWeakness
                            types={pokemonData.types}
                        />
                        <PokemonSprites
                            sprites={params.id <= 649 ? pokemonData.sprites.versions['generation-v']['black-white'].animated : pokemonData.sprites}
                            name={pokemonData.name}
                        />
                    </InfoCenterDiv>
                    <PokemonMoves
                        moves={pokemonData.moves}
                        type={pokemonData.types[0].type.name}
                    />

                </InfoContainer>
            }
        </PageContainer>
        </>
    )
}

export default PokemonDetailsPage