import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw; 
`

export const PokeCards = styled.div`
   display: grid;
    grid-template-columns: repeat(3, 18rem);
    grid-template-rows: auto;
    row-gap: 1%;
    column-gap: 2%;
    /* align-self: center; */
`