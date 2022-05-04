import { Progress } from '@chakra-ui/react'
import {FieldsetForm, StatsContainer, StatName} from './style'

const statsPt = [
    'HP', 'Ataque', 'Defesa', 'Sp. Atk.', 'Sp. Def.', 'Velocidade'
]

const PokemonStats = (props) => {
    const stats = props.stats.map((stat, index) => {
        return (
            <div key={index}>
                <label><StatName>{statsPt[index]}: </StatName>{stat.base_stat} </label>
                <Progress variant={props.type} size='sm' value={stat.base_stat} max='180' />

            </div>
        )
    })

    return (
        <StatsContainer>
            <FieldsetForm>
                <legend>Estatísticas</legend>
                {stats}
            </FieldsetForm>
        </StatsContainer>
    )
}

export default PokemonStats