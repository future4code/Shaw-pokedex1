import React from 'react'
import { GlobalContext } from './GlobalContext'
import {base_url} from '../constants/constants'
import axios from 'axios'

export default function GlobalState(props) {

    const getRequest = (url, setData) => {
        axios.get(base_url + url )
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <GlobalContext.Provider value={getRequest}>
            {props.children}
        </GlobalContext.Provider>
    )
}