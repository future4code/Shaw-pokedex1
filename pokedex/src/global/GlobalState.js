import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'
import { base_url } from '../constants/constants'
import axios from 'axios'

export default function GlobalState(props) {

    const [pokedex, setPokedex] = useState([])

    const getRequest = (url, setData) => {
        axios.get(base_url + url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const states = { pokedex }
    const setters = { setPokedex }


    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}