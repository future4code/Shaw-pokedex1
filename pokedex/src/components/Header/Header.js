import { HeaderDiv, DivLogoHome, DivDex, Button, Img, DivLogoOthers } from "./style"
import LogoDex from "../../assets/Images/LogoDex.png"
import Battle from "../../assets/Images/Battle.png"
import Pokedex from "../../assets/Images/Pokedex.png"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToBattlePage, goToPokedexPage, goBack } from "../../routes/coordinator"
import { TiArrowBack } from "react-icons/ti"

const Header = (props) => {

    const navigate = useNavigate()

    return(
        <>
            {
                props.page === 'home' ?
                <HeaderDiv>
                    <DivLogoHome>
                        <Button onClick={() => goToHomePage(navigate)}>
                            <Img src={LogoDex} alt="Botão para página inicial" />
                        </Button>
                    </DivLogoHome>
                    
                    <DivDex>
                        <Button onClick={() => goToBattlePage(navigate)}>
                            <Img src={Battle} alt="Botão para página de batalha" />
                        </Button>
                        <Button onClick={() => goToPokedexPage(navigate)}>
                            <Img src={Pokedex} alt="Botão para página de Pokédex" />
                        </Button>
                    </DivDex>
                </HeaderDiv>
                : 
                <HeaderDiv>
                    <Button onClick={() => goBack(navigate)}>
                       <TiArrowBack size={50} color={'#E41C24'} style={{position: "absolute", top: "14px"}}/>
                    </Button>

                    <DivLogoOthers>
                        <Button onClick={() => goToHomePage(navigate)}>
                            <Img src={LogoDex} alt="Botão para página inicial" />
                        </Button>
                    </DivLogoOthers>
                    
                    <DivDex>
                        <Button onClick={() => goToBattlePage(navigate)}>
                            <Img src={Battle} alt="Botão para página de batalha" />
                        </Button>
                        <Button onClick={() => goToPokedexPage(navigate)}>
                            <Img src={Pokedex} alt="Botão para página de Pokédex" />
                        </Button>
                    </DivDex>
                </HeaderDiv>
            }
        </>
    )
}

export default Header