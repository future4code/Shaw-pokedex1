import styled from "styled-components";

export const PokedexMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw; 
    min-height: 80vh;
`

export const PokedexContainer = styled.div`
   display: flex;
    flex-direction: column;
    gap:40px;
    max-width: 100vw; 
`

export const DivDexEmpty = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p{
        font-weight: bold;
        font-size: 1.2em;
    }
    `