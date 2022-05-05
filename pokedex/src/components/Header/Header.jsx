import { HeaderDiv, DivLogoHome, DivDex, Button, Img, DivLogoOthers } from "./style"
import LogoDex from "../../assets/Images/LogoDex.png"
import Battle from "../../assets/Images/Battle.png"
import Pokedex from "../../assets/Images/Pokedex.png"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToBattlePage, goToPokedexPage, goBack } from "../../routes/coordinator"
import { TiArrowBack } from "react-icons/ti"
import { Tooltip } from '@chakra-ui/react'

const Header = (props) => {

    const navigate = useNavigate()

    return(
        <>
            {
                props.page === 'home' ?
                <HeaderDiv>
                    <DivLogoHome>
                        <Tooltip hasArrow bg='gray.400' color={'black'} label='Início'>
                            <Button onClick={() => goToHomePage(navigate)}>
                                <Img src={LogoDex} alt="Botão para página inicial" />
                            </Button>
                        </Tooltip>
                    </DivLogoHome>
                    
                    <DivDex>
                        <Tooltip hasArrow bg='gray.400' color={'black'} label='Batalha'>
                            <Button onClick={() => goToBattlePage(navigate)}>
                                <Img src={Battle} alt="Botão para página de batalha" />
                            </Button>
                        </Tooltip>
                        <Tooltip hasArrow bg='gray.400' color={'black'} label='Pokédex'>
                            <Button onClick={() => goToPokedexPage(navigate)}>
                                <Img src={Pokedex} alt="Botão para página de Pokédex" />
                            </Button>
                        </Tooltip>
                    </DivDex>
                </HeaderDiv>
                : 
                <HeaderDiv>
                    <Tooltip hasArrow bg='gray.400' color={'black'} label='Voltar' placement='top-end'>
                        <Button onClick={() => goBack(navigate)}>
                            <TiArrowBack 
                                size={50} 
                                color={'#E41C24'} 
                                style={{position: "absolute", top: "14px"}} 
                            />
                        </Button>
                    </Tooltip>

                    <DivLogoOthers>
                        <Tooltip hasArrow bg='gray.400' color={'black'} label='Início'>
                            <Button onClick={() => goToHomePage(navigate)}>
                                <Img src={LogoDex} alt="Botão para página inicial" />
                            </Button>
                        </Tooltip>
                    </DivLogoOthers>
                    
                    <DivDex>
                        <Tooltip hasArrow bg='gray.400' color={'black'} label='Batalha'>
                            <Button onClick={() => goToBattlePage(navigate)}>
                                <Img src={Battle} alt="Botão para página de batalha" />
                            </Button>
                        </Tooltip>
                        <Tooltip hasArrow bg='gray.400' color={'black'} label='Pokédex'>
                            <Button onClick={() => goToPokedexPage(navigate)}>
                                <Img src={Pokedex} alt="Botão para página de Pokédex" />
                            </Button>
                        </Tooltip>
                    </DivDex>
                </HeaderDiv>
            }
        </>
    )
}

export default Header