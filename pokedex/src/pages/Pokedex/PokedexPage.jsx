import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { useContext } from "react"
import { GlobalContext } from "../../global/GlobalContext"
import Card from "../../components/Card/Card"
import { Grid } from "@chakra-ui/layout"
import {PokedexContainer, PokedexMain} from './style'

const PokedexPage = () => {
    const { states, setters } = useContext(GlobalContext)

    const pokedex = states.pokedex
    const setPokedex = setters.pokedex
    console.log(pokedex)

    return (
        <PokedexContainer>
            <Header />
            <PokedexMain>
            <Grid
                gap={10}
                mt={20}
                px={20}
                templateColumns="repeat(3, 18rem)"
                templateRows="auto"
            >
                {pokedex
                .sort((a, b) => a.id - b.id)
                .map((poke) => {
                    return <Card pokeName={poke.name} page={'pokedex'} />
                })}
            </Grid>
            </PokedexMain>
            <Footer />
        </PokedexContainer>
    )
}

export default PokedexPage