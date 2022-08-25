import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/Home/HomePage'
import PokedexPage from '../pages/Pokedex/PokedexPage'
import PokemonDetailsPage from '../pages/PokemonDetails/PokemonDetailsPage'
import BattlePage from '../pages/Battle/BattlePage'
import ErroPage from "../pages/Erro/ErroPage";

export function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/pokedex' element={<PokedexPage />} />
                <Route path='/pokemon/:id' element={<PokemonDetailsPage />} />
                <Route path='/battle' element={<BattlePage />} />
                <Route path='*' element={<ErroPage />} />
            </Routes>
        </BrowserRouter>
    )
}