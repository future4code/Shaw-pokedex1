import { FooterDiv, LinksDiv } from "./style"
import { 
    RiArrowDropRightFill, 
    RiFacebookBoxFill, 
    RiTwitterFill, 
    RiYoutubeFill, 
    RiInstagramFill 
} from "react-icons/ri"

const Footer = () => {

    return(
        <FooterDiv> 
            <LinksDiv>
                <h2> Links Interessantes </h2>
                <a href="https://www.pokemon.com/br/noticias-pokemon/" target="_blank" rel="external">
                    <span><RiArrowDropRightFill /></span> Notícias de Pokémon 
                </a>
                <a href="https://watch.pokemon.com/pt-br/#/" target="_blank" rel="external">
                    <span><RiArrowDropRightFill /></span> Episódios de Pokémon 
                </a>
                <a href="https://legends.pokemon.com/en-us/" target="_blank" rel="external">
                    <span><RiArrowDropRightFill /></span> Pókemon Arceus
                </a>
                <a href="https://play.pokemonshowdown.com/" target="_blank" rel="external">
                    <span><RiArrowDropRightFill /></span> Pókemon Showdown
                </a>
            </LinksDiv>

            <hr />
            
            <h3>
                ©2022 Pokémon. ©1995 - 2022 Nintendo/Creatures <br/> Inc./GAME FREAK inc. TM, ®Nintendo.
            </h3>

            <hr />

            <nav>
                <a href="https://www.facebook.com/" target="_blank" rel="external">
                    <RiFacebookBoxFill alt="Ícone do FaceBook" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="external">
                    <RiTwitterFill alt="Ícone do Twitter" />
                </a>
                <a href="https://youtube.com/" target="_blank" rel="external">
                    <RiYoutubeFill alt="Ícone do Youtube" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="external">
                    <RiInstagramFill alt="Ícone do Instagram" />
                </a>
            </nav>
        </FooterDiv>
    )
}

export default Footer