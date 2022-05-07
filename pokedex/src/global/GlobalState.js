import React, { useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext'

export default function GlobalState(props) {

    const [pokedex, setPokedex] = useState([])
    const [pageBefore, setPageBefore] = useState([])

    
    const states = { pokedex, pageBefore }
    const setters = { setPokedex, setPageBefore }

    useEffect(() => {
        const pokedexList = JSON.parse(window.localStorage.getItem("pokedex"))
        pokedexList && setPokedex(pokedexList)
    }, [])

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}