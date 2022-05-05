import { FooterDiv, LinksDiv } from "./style"
import { RiArrowDropRightLine } from "react-icons/ri"

const Footer = () => {

    return(
        <FooterDiv> 
            <LinksDiv>
                <p> Links Interessantes </p>
                <a href="https://www.pokemon.com/br/noticias-pokemon/" target="_blank" rel="external">
                    {/* <RiArrowDropRightLine />  */}
                    - Notícias de Pokémon 
                </a>
                <a href="https://watch.pokemon.com/pt-br/#/" target="_blank" rel="external">
                    {/* <RiArrowDropRightLine />  */}
                    - Episódios de Pokémon 
                </a>
                <a href="https://legends.pokemon.com/en-us/" target="_blank" rel="external">
                    {/* <RiArrowDropRightLine />  */}
                    - Pókemon Arceus
                </a>
                <a href="https://play.pokemonshowdown.com/" target="_blank" rel="external">
                    {/* <RiArrowDropRightLine />  */}
                    - Pókemon Showdown
                </a>
            </LinksDiv>

            <hr />
            
            <h3>
                ©2022 Pokémon. ©1995 - 2022 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.
            </h3>

            <hr width="20" size="10" />

            <nav>
                <a href="https://www.facebook.com/" target="_blank" rel="external">
                    <img src="" alt="Ícone do FaceBook" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="external">
                    <img src="" alt="Ícone do Instagram" />
                </a>
                <a href="https://youtube.com/" target="_blank" rel="external">
                    <img src="" alt="Ícone do Youtube" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="external">
                    <img src="" alt="Ícone do Twitter" />
                </a>
            </nav>
        </FooterDiv>
    )
}

export default Footer