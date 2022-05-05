import {FieldsetForm, StatsContainer} from './style'
import { Badge } from '@chakra-ui/react'
import {typesPt} from '../../theme/pokemonTypeColors'

const PokemonTypeWeak = (props) => {

    const types = props.types.map((type,index)=>{
        return<Badge key={index} variant={type.type.name}>{typesPt[type.type.name]}</Badge>
    })
    return (
        <StatsContainer>
            <FieldsetForm>
                <legend>Tipo</legend>
                {types}
            </FieldsetForm>
        </StatsContainer>
    )
}

export default PokemonTypeWeak