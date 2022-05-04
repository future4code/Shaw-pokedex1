
import {FieldsetForm, StatsContainer} from './style'
import { Badge } from '@chakra-ui/react'



const PokemonTypeWeak = (props) => {

    const types = props.types.map((type)=>{
        return<Badge variant={type.type.name}>{type.type.name}</Badge>
    })
    return (
        <StatsContainer>
            <FieldsetForm>
                <legend>Type</legend>
                {types}
            </FieldsetForm>
        </StatsContainer>
    )
}

export default PokemonTypeWeak