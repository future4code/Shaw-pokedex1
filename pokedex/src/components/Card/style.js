import styled from 'styled-components'
import { colors } from '../../theme/pokemonTypeColors'

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
background-color: ${props => colors[props.type]};
height: 55vh;
font-size: 1.2rem;
text-transform:capitalize;
min-width: 100%;
gap: 5px;
div{
    display: flex;
    justify-content: center;
    gap: 10px;
}
span {
    width: 100%;
    text-align: left;
    padding-left: 20px;
    font-size: 1.2rem;
}
`
export const PokeImg = styled.img`
    width: 90%;
`

export const IconeImg = styled.img`
    width: 30px;
    height: 30px;
    box-shadow: 0px 0px 10px #3B3D42;
    border-radius: 50%;
`