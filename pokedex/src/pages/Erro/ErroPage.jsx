import Header from "../../components/Header/Header"
import ErroImg from "../../assets/Images/ErroImg.png"
import { ErroDiv } from "./style"

const ErroPage = () => {
    return(
        <>
            <Header />
            <ErroDiv imagem={ErroImg}>
                <p> Página não encontrada! </p>
            </ErroDiv>
        </>
    )
}

export default ErroPage