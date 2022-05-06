
import {Fieldset, SpritesContainer, Img} from './style'


const PokemonSprites= (props) => {
   

    return (
        <SpritesContainer>
            <Fieldset>
                <legend>{props.name}</legend>
                <Img src={props.sprites.front_default} alt={'Pokémon de frente'}/>
                <Img src={props.sprites.back_default} alt={'Pokémon de costas'}/>
            </Fieldset>
        </SpritesContainer>
    )
}

export default PokemonSprites