import styled from 'styled-components'

export const HomeMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw; 
    min-height: 80vh;
`
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:40px;
    max-width: 100vw; 
`

export const LoaderContainer = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 20%;
    }
`