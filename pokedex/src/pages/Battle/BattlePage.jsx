import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import ManutencionBattle from "../../assets/Images/ManutencionBattle.png"
import { DivBattle } from "./style"

const BattlePage = () => {

    return(
        <>
            <Header />
            <DivBattle>
                <p> Em manutenção... </p>
                <img src={ManutencionBattle} alt="Imagem de manutenção"/>
            </DivBattle>
            <Footer />
        </>
    )
}

export default BattlePage