import { Badge } from '@chakra-ui/react'
import { MovesContainer, FieldsetForm, ScrollContainer } from './style'

const PokemonMoves = (props) => {
    
    const moves = props.moves.map((move, index) => {
        return (
            <Badge key={index} variant={'moves'}>
                { move.move.name }
            </Badge>
        )
    })

    return (
        <MovesContainer>
            <FieldsetForm>
                <legend> Movimentos </legend>
                <ScrollContainer type={props.type}>
                    <div>
                        { moves }
                    </div>
                </ScrollContainer>
            </FieldsetForm>
        </MovesContainer>
    )
}

export default PokemonMoves